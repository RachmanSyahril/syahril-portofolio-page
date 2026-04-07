<template>
  <div>
    <AppNav />
    <main>
      <SectionHero />
      <SectionWork />
      <SectionSkills />
      <SectionRecommendations />
      <SectionAbout />
      <SectionContact />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Syahril Rachman — Full Stack Developer',
  meta: [
    { name: 'description', content: 'Full Stack Developer from Bandung, Indonesia. Specialized in Vue.js, React, Node.js, and IoT data visualization.' },
    { property: 'og:title', content: 'Syahril Rachman — Full Stack Developer' },
    { property: 'og:description', content: 'Full Stack Developer from Bandung, Indonesia. Specialized in Vue.js, React, Node.js, and IoT data visualization.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>
