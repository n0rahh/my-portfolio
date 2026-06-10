# Portfolio — Vlad Herasymovych

Personal portfolio website: a Vue 3 single-page app backed by a small FastAPI service that serves portfolio content from MongoDB and forwards contact-form inquiries to Telegram.

## Architecture

```
my-portfolio/
├── frontend/    Vue 3 + Vuetify 3 + Vite SPA (deployed to Firebase Hosting)
└── backend/     FastAPI + MongoDB API (deployed as a Docker container)
```

| Layer    | Tech                                              |
| -------- | ------------------------------------------------- |
| Frontend | Vue 3, Vuetify 3, Vue Router, SCSS, Vite          |
| Backend  | FastAPI, Pydantic v2, PyMongo, httpx              |
| Data     | MongoDB (`portfolio` database)                    |
| Hosting  | Firebase Hosting (frontend), Docker (backend)     |

### How it fits together

- The SPA fetches `skills`, `projects` and `experiences` from the API on the home page, and a single project from `GET /projects/{id}` on the project subpage.
- Read endpoints are cached in memory on the server (5 min TTL, configurable) and sent with `Cache-Control` headers; the frontend additionally keeps an in-memory cache so client-side navigation never refetches.
- The contact form posts to `POST /contact`, which stores the inquiry in MongoDB and sends a Telegram notification.

## Running locally

### Prerequisites

- Node.js 20+
- Python 3.12+ (or Docker)
- A running MongoDB instance (local or Atlas)

### 1. Backend

```bash
cd backend
cp .env.example .env          # create and fill in (see variables below)

# Option A: Docker
docker compose up

# Option B: bare Python (3.10+ required — macOS system python3 is 3.9 and won't work;
# use Homebrew: brew install python@3.13)
python3.13 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Environment variables (`backend/.env`):

| Variable             | Required | Default                     | Description                          |
| -------------------- | -------- | --------------------------- | ------------------------------------ |
| `MONGO_URI`          | yes      | `mongodb://localhost:27017` | MongoDB connection string            |
| `CORS_ALLOW_ORIGINS` | no       | `http://localhost:3000`     | Comma-separated allowed origins      |
| `TELEGRAM_BOT_TOKEN` | no       | —                           | Bot token for contact notifications  |
| `TELEGRAM_CHAT_ID`   | no       | —                           | Chat that receives notifications     |
| `CACHE_TTL_SECONDS`  | no       | `300`                       | Server-side cache TTL for reads      |
| `PORT`               | no       | `8000`                      | Port (used by the Docker `CMD`)      |

The API expects these MongoDB collections in the `portfolio` database:

- `skill_categories` — `{ name, active, order }`
- `skills` — `{ name, percentage, type }`
- `projects` — `{ title, shortDescription, longDescription, keyAccomplishments[], technologies[], sourceCodeUrl, projectUrl, images[], order, active, category, tileUrl }`
- `experiences` — `{ company, position, dateRange, description, achievements[], active, order }`
- `inquiries` — written by the contact form

### 2. Frontend

```bash
cd frontend
npm install
npm run dev                   # http://localhost:3000
```

Environment variables (`frontend/.env`):

| Variable       | Default                 | Description  |
| -------------- | ----------------------- | ------------ |
| `VITE_API_URL` | `http://localhost:8000` | Backend URL  |

Other useful commands:

```bash
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint (flat config)
npm run lint:fix   # ESLint with autofix
```

## Deployment

### Frontend → Firebase Hosting

`firebase.json` is already configured with SPA rewrites and long-lived cache headers for static assets.

```bash
cd frontend
npm run build
npx firebase-tools deploy --only hosting
```

Set `VITE_API_URL` (e.g. in `.env.production`) to the public backend URL **before** building.

### Backend → any Docker host

```bash
cd backend
docker build -t portfolio-api .
docker run -p 8000:8000 --env-file .env -e PORT=8000 portfolio-api
```

Works as-is on Fly.io, Render, Railway, Cloud Run, etc. — they all inject `PORT` and the image's `CMD` honors it. Remember to add the deployed frontend origin to `CORS_ALLOW_ORIGINS`.

## Performance notes

- The animated background is a hand-rolled `<canvas>` particle field ([AppBackground.vue](frontend/src/components/AppBackground.vue)) — it pauses when the tab is hidden, scales particle count with viewport area, and renders a single static frame for users with `prefers-reduced-motion`.
- Icons are tree-shaken SVG paths from `@mdi/js`; the icon font is not shipped.
- The project and policy routes are lazy-loaded chunks.
- Design tokens (colors, spacing, radii, breakpoints) live in [tokens.scss](frontend/src/styles/tokens.scss) — use them instead of hard-coded values.
