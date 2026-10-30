# Karnataka Theatre & Cinema Guide

A React and TypeScript web application showcasing a curated list of theatre and cinema venues in Karnataka, with a Gemini-powered chat interface.

## What is included

- A browsable venue-card interface with 20 curated sample venues.
- Venue locations, short descriptions and illustrative image URLs.
- A chat interface backed by a server-side Gemini API.
- Vite development and production build setup.

**Accuracy note:** Venue information is static project data, not a verified live directory. The app does not provide a maintained showtime or ticket inventory. The chatbot must not be treated as a live booking source; verify current schedules with official venue or ticketing sources.

## Technology

- React 19 and TypeScript
- Vite 6
- Node.js API server
- Google GenAI SDK (server-side only)
- Tailwind utility classes loaded from the Tailwind CDN in `index.html`

## Requirements

- Node.js 22 or newer
- npm

## Run locally

```bash
git clone https://github.com/harshith29122004-lgtm/harshith-ds.git
cd harshith-ds
npm install
```

Copy `.env.example` to `.env` and set your Gemini API key:

```dotenv
GEMINI_API_KEY=your_api_key
API_PORT=8788
```

Start the frontend and API server together:

```bash
npm run dev
```

Open the local URL printed by Vite. The Vite server proxies `/api` requests to the local Node API.

## Production build

```bash
npm run build
```

Deploy the frontend and API behind a same-origin reverse proxy, routing `/api/*` to the Node server. Configure `GEMINI_API_KEY` as a server-side environment secret. Never add it to frontend variables or commit it to Git.

## Security and limitations

- Gemini credentials are read only by the Node API and are not embedded in the browser bundle.
- The API validates message size, limits history length and applies a basic in-memory per-IP rate limit.
- The in-memory limiter is per process. Production deployments should use a shared rate-limit store and platform-level abuse protection.
- The API does not authenticate users. Add appropriate abuse controls before exposing it publicly.
- Venue details are curated static sample content and may be incomplete or outdated.
- AI-generated answers can be inaccurate; verify event, schedule and ticket details with official sources.

## Repository

[View source code](https://github.com/harshith29122004-lgtm/harshith-ds)
