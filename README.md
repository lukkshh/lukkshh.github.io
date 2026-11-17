# Luka Shvelidze Portfolio

Portfolio site built with Next.js App Router, React, TypeScript, Tailwind CSS, and next-intl.

## Development

```sh
pnpm install
pnpm dev
```

Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before deploying.

## Vercel deployment

Import this Git repository into Vercel and use the default Next.js framework settings. Vercel will build and deploy commits from the connected branch. The GitHub Actions workflow checks the production build.

Set these optional environment variables in Vercel to enable the existing Umami analytics and, if needed, override Vercel's production domain for canonical metadata:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` (the upstream Umami script URL; defaults to `https://cloud.umami.is/script.js`)
- `NEXT_PUBLIC_SITE_URL` (optional production origin override, such as `https://example.com`; Vercel's production domain is used by default)

English is served at `/` and Georgian at `/ka`; the language selector navigates between these URLs. Locale messages are in `messages/en.json` and `messages/ka.json`.

Umami's tracker script is loaded through the site's `/api/analytics/script` route. Page views and custom events go to the site's `/api/send` URL, which Next.js rewrites to Umami Cloud's gateway (or the configured self-hosted Umami origin). This keeps the browser's analytics requests on the site domain and removes the Vercel Function hop. The existing website ID and dashboard remain the same. Requests with Do Not Track enabled are skipped, and the script excludes URL search parameters. The script is cached for one hour. If you add a Content Security Policy, allow `script-src 'self'` and `connect-src 'self'`. Check a new visit in Umami after deployment to verify geolocation; Cloud may still use a proxy IP if the rewrite does not preserve the visitor IP.

<img width="715" height="186" alt="performance" src="https://github.com/user-attachments/assets/78951831-6955-4a5d-8ab8-fb0069eba44f" />
