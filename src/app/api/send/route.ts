import { getUmamiUpstreams } from "../../../lib/umami-proxy";

const maxBodyBytes = 256 * 1024;

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

  let event: { payload?: { website?: unknown } };
  try {
    event = JSON.parse(body);
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!event || typeof event !== "object" || event.payload?.website !== websiteId) {
    return new Response(null, { status: 400 });
  }

  try {
    const { collection } = getUmamiUpstreams(request.url);
    const headers = new Headers({ "Content-Type": "application/json" });
    const userAgent = request.headers.get("user-agent");
    if (userAgent) headers.set("User-Agent", userAgent);

    // Vercel supplies this header from the actual client request. Never pass
    // arbitrary client-provided forwarding headers to Umami.
    if (process.env.VERCEL === "1") {
      const clientIp = request.headers.get("x-vercel-forwarded-for");
      if (clientIp) headers.set("X-Forwarded-For", clientIp);
    }

    const upstream = await fetch(collection, {
      method: "POST",
      headers,
      body,
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
