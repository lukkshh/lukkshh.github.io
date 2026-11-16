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
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` (defaults to `https://cloud.umami.is/script.js`)
- `NEXT_PUBLIC_SITE_URL` (optional production origin override, such as `https://example.com`; Vercel's production domain is used by default)

English is served at `/` and Georgian at `/ka`; the language selector navigates between these URLs. Locale messages are in `messages/en.json` and `messages/ka.json`.

<img width="715" height="186" alt="performance" src="https://github.com/user-attachments/assets/78951831-6955-4a5d-8ab8-fb0069eba44f" />
