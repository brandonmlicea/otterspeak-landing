# Otterspeak landing

The landing page for [Otterspeak](https://github.com/brandonmlicea/otterspeak), the open-source, Duolingo-style learning app with Pip the otter.

Live: https://otterspeak-landing.brandonlicea61.workers.dev

Astro, Tailwind 4 and GSAP, served as static files by a Cloudflare Worker. The app's address, the GitHub links and the course list are in `src/site.ts`.

```bash
pnpm install
pnpm dev
pnpm run deploy   # build, then wrangler deploy
```

## License

MIT
