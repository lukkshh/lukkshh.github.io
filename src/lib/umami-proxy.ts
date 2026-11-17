const defaultScriptUrl = "https://cloud.umami.is/script.js";

function getConfiguredScriptUrl(): URL {
  return new URL(
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim() || defaultScriptUrl,
  );
}

export function getUmamiCollectionUrl(): URL {
  const script = getConfiguredScriptUrl();

  return new URL(
    script.hostname === "cloud.umami.is"
      ? "https://gateway.umami.is/api/send"
      : "/api/send",
    script.origin,
  );
}

export function getUmamiScriptUrl(requestUrl: string): URL {
  const script = getConfiguredScriptUrl();
  const request = new URL(requestUrl);

  // The upstream must be external; pointing this at our proxy would recurse.
  if (script.origin === request.origin) {
    throw new Error("Umami upstream cannot be the site itself");
  }

  return script;
}
