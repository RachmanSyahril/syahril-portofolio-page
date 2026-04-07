<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { skills } from '~/data/projects'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('skills')
  if (section) observer.observe(section)
})

// Tech icons as SVG components
const techIcons: Record<string, string> = {
  'Vue.js / Nuxt.js': '<path d="M2 3h4l6 10 6-10h4L12 21 2 3z"/>',
  'React.js / Next.js': '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  'AngularJS': '<path d="M12 2L2 5l2 13 8 4 8-4 2-13L12 2zm0 3.5l4.5 10h-2l-1-2.5H10l-1 2.5h-2L12 5.5z"/>',
  'Tailwind CSS': '<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"/><path d="M8 10h8"/><path d="M8 14h6"/>',
  'Bootstrap': '<path d="M4 3h8a3 3 0 013 3v1.5a2 2 0 01-2 2h0a2 2 0 012 2V18a3 3 0 01-3 3H4V3z"/>',
  'Ant Design': '<path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/>',
  'Node.js / Hapi.js': '<path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/><path d="M12 12v9"/><path d="M12 12L4 7"/>',
  'Nest.js': '<circle cx="12" cy="12" r="3"/><path d="M12 2l8 6v8l-8 6-8-6V8l8-6z"/>',
  'RabbitMQ': '<path d="M12 3c-4.5 0-8 3.5-8 8v8h4v-5h8v5h4v-8c0-4.5-3.5-8-8-8z"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/>',
  'Microservices': '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/><path d="M10 7h4"/><path d="M10 17h4"/><path d="M7 10v4"/><path d="M17 10v4"/>',
  'Laravel': '<path d="M4 4l8 4 8-4v12l-8 4-8-4V4z"/>',
  'PostgreSQL': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/>',
  'MySQL': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/>',
  'MongoDB': '<path d="M12 2c0 0-4 4-4 10 0 4 2 8 4 10 2-2 4-6 4-10 0-6-4-10-4-10z"/>',
  'Git': '<path d="M4 9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V9z"/><path d="M9 6v12"/>',
  'Docker': '<path d="M4 9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V9z"/><path d="M9 6v12"/>',
  'Figma': '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="12" cy="6" r="3"/><path d="M15 12h-3"/><path d="M15 18a3 3 0 01-3-3v-3h3a3 3 0 013 3 3 3 0 01-3 3z"/>',
  'Kafka': '<path d="M4 6h16"/><path d="M4 10h16"/><path d="M4 14h16"/><path d="M4 18h16"/>',
  'Redis': '<path d="M12 2l-8 4 8 4 8-4-8-4z"/><path d="M4 10v8l8 4 8-4v-8"/><path d="M4 14v8l8 4 8-4v-8"/>',
  'MQTT': '<path d="M4 6h16"/><path d="M4 10h16"/><path d="M4 14h16"/><path d="M4 18h16"/>',
  'Jest': '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
  'Sonarqube': '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
}

function getIcon(name: string): string {
  return techIcons[name] || '<circle cx="12" cy="12" r="3"/>'
}
</script>

<template>
  <section id="skills" class="py-20 bg-[#F8F9FA] dark:bg-[#0F1117]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <p class="text-xs font-medium uppercase tracking-[0.08em] text-gray-600 dark:text-gray-400 mb-2">
          Core Skills
        </p>
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">Technologies & Tools</h2>
      </div>

      <!-- Skills Grid -->
      <div
        class="grid md:grid-cols-3 gap-8 lg:gap-12"
        :class="{ 'opacity-0 translate-y-3': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        style="transition: all 500ms ease;"
      >
        <!-- Frontend -->
        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400">
            Frontend Development
          </h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in skills.frontend"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-[#1A1D27] border border-[#E5E7EB] dark:border-[#2A2D3A] hover:border-teal dark:hover:border-teal transition-colors"
            >
              <svg class="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getIcon(skill.name)" />
              <span class="text-sm text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400">
            Backend Development
          </h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in skills.backend"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-[#1A1D27] border border-[#E5E7EB] dark:border-[#2A2D3A] hover:border-teal dark:hover:border-teal transition-colors"
            >
              <svg class="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getIcon(skill.name)" />
              <span class="text-sm text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400">
            Tools & Infra
          </h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in skills.tools"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-[#1A1D27] border border-[#E5E7EB] dark:border-[#2A2D3A] hover:border-teal dark:hover:border-teal transition-colors"
            >
              <svg class="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getIcon(skill.name)" />
              <span class="text-sm text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
