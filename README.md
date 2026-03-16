
# Daniel Portfolio

Personal portfolio website built with **React + Vite** and deployed to **GitHub Pages**.

## Tech stack

- React
- Vite
- GitHub Actions (build + deploy)
- GitHub Pages (hosting)

## Local development

Install deps:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This repo is configured to deploy automatically on pushes to `main` using `.github/workflows/deploy.yml`.

Important settings:

- In GitHub: **Settings → Pages → Source: GitHub Actions**
- Vite `base` is set to `/daniel-portfolio/` in `vite.config.js` (required for project Pages)

After a successful workflow run, the site will be available at:

- `https://<your-username>.github.io/daniel-portfolio/`
