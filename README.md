# Syahril Rachman — Portfolio Website

A personal portfolio website built with Nuxt 3, Vue 3, and Tailwind CSS. Features dark mode, smooth animations, and a project showcase timeline.

## Tech Stack

- **Framework:** Nuxt 3 (SSG)
- **UI:** Vue 3 Composition API
- **Styling:** Tailwind CSS
- **Dark Mode:** @nuxtjs/color-mode

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run generate
```

## Project Structure

```
├── assets/css/          # Global styles
├── components/          # Vue components
├── data/               # Project data
├── pages/              # Nuxt pages
├── public/             # Static assets
└── nuxt.config.ts      # Nuxt configuration
```

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages.

**Setup:**

1. Push this repository to GitHub
2. Go to **Settings → Pages** in your GitHub repository
3. Set **Source** to "GitHub Actions"
4. The workflow will auto-deploy on every push to `main` branch

**URL:** `https://yourusername.github.io/syahril-portofolio-page/`

**Note:** Jika ingin deploy ke custom domain, ubah `baseURL` di `nuxt.config.ts` dari `/syahril-portofolio-page/` menjadi `/`, lalu atur custom domain di GitHub Pages settings.

### Manual Build

```bash
npm run generate
```

Output ada di folder `.output/public`.

## License

MIT
