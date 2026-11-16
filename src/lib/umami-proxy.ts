const defaultScriptUrl = "https://cloud.umami.is/script.js";

export function getUmamiUpstreams(requestUrl: string) {
  const script = new URL(
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim() || defaultScriptUrl,
  );
  const request = new URL(requestUrl);

  // The upstream must be external; pointing this at our proxy would recurse.
  if (script.origin === request.origin) {
    throw new Error("Umami upstream cannot be the site itself");
  }

  const collection = new URL(
    script.hostname === "cloud.umami.is"
      ? "https://gateway.umami.is/api/send"
      : "/api/send",
    script.origin,
  );

  return { script, collection };
}
