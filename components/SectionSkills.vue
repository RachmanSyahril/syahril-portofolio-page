<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { skills } from '~/data/projects'

const isVisible = ref(false)
const animatedSkills = ref<{ name: string; level: number; animated: boolean }[]>([])

// Initialize skills without animation
animatedSkills.value = [
  ...skills.frontend.map(s => ({ ...s, animated: false })),
  ...skills.backend.map(s => ({ ...s, animated: false })),
  ...skills.tools.map(s => ({ ...s, animated: false })),
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Trigger skill bar animations with stagger
        setTimeout(() => {
          const allSkills = [
            ...skills.frontend,
            ...skills.backend,
            ...skills.tools,
          ]
          allSkills.forEach((skill, index) => {
            setTimeout(() => {
              const found = animatedSkills.value.find(s => s.name === skill.name)
              if (found) found.animated = true
            }, index * 50)
          })
        }, 300)
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('skills')
  if (section) observer.observe(section)
})
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
          <div class="space-y-3">
            <div
              v-for="skill in skills.frontend"
              :key="skill.name"
              class="space-y-1"
            >
              <div class="flex justify-between text-sm">
                <span class="text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
                <span class="text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-[#E5E7EB] dark:bg-[#2A2D3A] rounded-full overflow-hidden">
                <div
                  class="h-full bg-teal rounded-full transition-all duration-600 ease-out"
                  :style="{
                    width: animatedSkills.find(s => s.name === skill.name)?.animated ? `${skill.level}%` : '0%',
                    transitionDuration: '600ms'
                  }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400">
            Backend Development
          </h3>
          <div class="space-y-3">
            <div
              v-for="skill in skills.backend"
              :key="skill.name"
              class="space-y-1"
            >
              <div class="flex justify-between text-sm">
                <span class="text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
                <span class="text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-[#E5E7EB] dark:bg-[#2A2D3A] rounded-full overflow-hidden">
                <div
                  class="h-full bg-teal rounded-full transition-all duration-600 ease-out"
                  :style="{
                    width: animatedSkills.find(s => s.name === skill.name)?.animated ? `${skill.level}%` : '0%',
                    transitionDuration: '600ms'
                  }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider mb-4 text-gray-600 dark:text-gray-400">
            Tools & Infra
          </h3>
          <div class="space-y-3">
            <div
              v-for="skill in skills.tools"
              :key="skill.name"
              class="space-y-1"
            >
              <div class="flex justify-between text-sm">
                <span class="text-gray-900 dark:text-gray-100">{{ skill.name }}</span>
                <span class="text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="h-1 bg-[#E5E7EB] dark:bg-[#2A2D3A] rounded-full overflow-hidden">
                <div
                  class="h-full bg-teal rounded-full transition-all duration-600 ease-out"
                  :style="{
                    width: animatedSkills.find(s => s.name === skill.name)?.animated ? `${skill.level}%` : '0%',
                    transitionDuration: '600ms'
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
