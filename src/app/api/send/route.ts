import { isIP } from "node:net";
import { getUmamiCollectionUrl } from "../../../lib/umami-proxy";

const maxBodyBytes = 256 * 1024;

function getVercelClientIp(headers: Headers): string | undefined {
  if (process.env.VERCEL !== "1") return undefined;

  const forwardedFor =
    headers.get("x-vercel-forwarded-for") || headers.get("x-forwarded-for");
  const firstIp = forwardedFor?.split(",")[0]?.trim();
  return firstIp && isIP(firstIp) ? firstIp : undefined;
}

export async function POST(request: Request) {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();
  if (!websiteId) return new Response(null, { status: 404 });
  if (request.headers.get("dnt") === "1") {
    return new Response(null, { status: 204 });
  }
  if (Number(request.headers.get("content-length")) > maxBodyBytes) {
    return new Response(null, { status: 413 });
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).length > maxBodyBytes) {
    return new Response(null, { status: 413 });
  }

  let event: { payload?: Record<string, unknown> };
  try {
    event = JSON.parse(body);
  } catch {
    return new Response(null, { status: 400 });
  }
  if (
    !event ||
    typeof event !== "object" ||
    !event.payload ||
    typeof event.payload !== "object" ||
    Array.isArray(event.payload) ||
    event.payload.website !== websiteId
  ) {
    return new Response(null, { status: 400 });
  }

  // Never accept an IP supplied by the browser. Vercel owns these headers.
  delete event.payload.ip;
  const clientIp = getVercelClientIp(request.headers);
  if (process.env.VERCEL === "1" && !clientIp) {
    return new Response(null, { status: 503 });
  }
  if (clientIp) event.payload.ip = clientIp;

  try {
    const headers = new Headers({ "Content-Type": "application/json" });
    const userAgent = request.headers.get("user-agent");
    if (userAgent) headers.set("User-Agent", userAgent);
    if (clientIp) headers.set("X-Forwarded-For", clientIp);

    const upstream = await fetch(getUmamiCollectionUrl(), {
      method: "POST",
      headers,
      body: JSON.stringify(event),
      redirect: "error",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    return new Response(upstream.status === 204 ? null : upstream.body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
