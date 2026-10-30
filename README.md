# Karnataka Theatre & Cinema Guide

A React and TypeScript web application showcasing a curated list of theatre and cinema venues in Karnataka, with an interactive Gemini-powered chat interface.

## What is included

- A browsable venue-card interface.
- A curated, hard-coded list of 20 venues and their short descriptions.
- Venue locations and illustrative image URLs.
- A chat screen powered by the Google GenAI SDK.
- A Vite development and production build setup.

**Accuracy note:** The venue information is static project data, not a verified live directory. The app does not currently provide a maintained showtime/ticket inventory. Treat venue details, descriptions, and availability as informational examples and verify them with the venue before travelling or booking.

## Technology

- React 19
- TypeScript
- Vite 6
- Google GenAI SDK
- Tailwind utility classes loaded from the Tailwind CDN in `index.html`

## Run locally

**Prerequisites:** Node.js and npm.

```bash
git clone https://github.com/harshith29122004-lgtm/harshith-ds.git
cd harshith-ds
npm install
```

Create a local `.env.local` file in the project root:

```dotenv
GEMINI_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## API key security

The current Vite configuration injects `GEMINI_API_KEY` into client-side JavaScript as `process.env.API_KEY`. Any key included in a browser build can be inspected by users. Use only a restricted development key for local testing; do not publish a private key in a public deployment. A production implementation should route Gemini requests through a protected server-side endpoint.

Never commit `.env.local` or other files containing credentials.

## Repository

[View source code](https://github.com/harshith29122004-lgtm/harshith-ds)
