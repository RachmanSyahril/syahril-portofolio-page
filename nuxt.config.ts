export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  ssr: false,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/syahril-portofolio-page/',
    head: {
      title: 'Syahril Rachman — Full Stack Developer',
      meta: [
        { name: 'description', content: 'Full Stack Developer from Bandung, Indonesia. Specialized in Vue.js, React, Node.js, and IoT data visualization.' },
        { name: 'og:title', content: 'Syahril Rachman — Full Stack Developer' },
        { name: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'icon.svg' },
        { rel: 'apple-touch-icon', href: 'icon-192.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-DHH1LQQRRP',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHH1LQQRRP');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
})
