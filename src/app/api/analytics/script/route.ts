import { getUmamiScriptUrl } from "../../../../lib/umami-proxy";

export async function GET(request: Request) {
  if (!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim()) {
    return new Response(null, { status: 404 });
  }

  try {
    const script = getUmamiScriptUrl(request.url);
    const upstream = await fetch(script, {
      headers: { Accept: "application/javascript" },
      redirect: "error",
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });

    if (
      !upstream.ok ||
      !/javascript|ecmascript/i.test(upstream.headers.get("content-type") || "")
    ) {
      return new Response(null, { status: 502 });
    }

    return new Response(upstream.body, {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
