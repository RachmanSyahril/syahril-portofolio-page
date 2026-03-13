<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '~/data/projects'

const filterOptions = ['All', 'Vue', 'React', 'Node', 'Fulltime', 'Freelance'] as const
type FilterOption = typeof filterOptions[number]

const activeFilter = ref<FilterOption>('All')
const isVisible = ref(false)

// Intersection observer for section reveal
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  const section = document.getElementById('work')
  if (section) observer.observe(section)
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects

  return projects.filter(project => {
    const techStackLower = project.techStack.map(t => t.toLowerCase())

    switch (activeFilter.value) {
      case 'Vue':
        return techStackLower.some(t => t.includes('vue'))
      case 'React':
        return techStackLower.some(t => t.includes('react'))
      case 'Node':
        return techStackLower.some(t => t.includes('node'))
      case 'Fulltime':
        return project.type === 'fulltime'
      case 'Freelance':
        return project.type === 'freelance'
      default:
        return true
    }
  })
})

function setFilter(filter: FilterOption) {
  activeFilter.value = filter
}
</script>

<template>
  <section id="work" class="py-20 bg-[#F8F9FA] dark:bg-[#1A1D27]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-10">
        <p class="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] dark:text-[#9CA3AF] mb-2">
          Selected Work
        </p>
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">Projects & Experience</h2>
      </div>

      <!-- Filter Pills -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="filter in filterOptions"
          :key="filter"
          @click="setFilter(filter)"
          class="px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200"
          :class="[
            activeFilter === filter
              ? 'bg-teal text-white'
              : 'bg-[#F8F9FA] dark:bg-[#1A1D27] text-[#666666] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F0F0F0]'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Timeline -->
      <div class="space-y-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="flex gap-4 sm:gap-6 transition-all duration-300"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
            filteredProjects.includes(project) ? '' : 'opacity-30 pointer-events-none scale-[0.98]'
          ]"
        >
          <!-- Year & Dot -->
          <div class="flex flex-col items-end pt-1">
            <span class="text-[11px] text-[#666666] dark:text-[#9CA3AF] w-14 text-right">
              {{ project.yearEnd ? `${project.year}–${project.yearEnd}` : project.year }}
            </span>
            <div
              class="w-2.5 h-2.5 rounded-full mt-1.5 border-2"
              :class="[
                project.featured
                  ? 'bg-teal border-teal'
                  : 'bg-transparent border-[#9CA3AF] dark:border-[#4B5563]'
              ]"
            />
          </div>

          <!-- Vertical Line -->
          <div class="w-px bg-[#E5E7EB] dark:bg-[#2A2D3A] self-stretch -mt-2 -mb-4"></div>

          <!-- Project Card -->
          <div class="flex-1 min-w-0 -mt-3">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
