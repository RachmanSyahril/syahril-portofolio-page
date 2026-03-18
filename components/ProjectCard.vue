<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()

const isModalOpen = ref(false)
const isExpanded = ref(false)

function openModal() {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function getYearDisplay() {
  if (props.project.yearEnd) {
    return `${props.project.year}–${props.project.yearEnd}`
  }
  return `${props.project.year}`
}
</script>

<template>
  <div>
    <!-- Minimal Card -->
    <div
      @click="openModal"
      class="group border border-[#E5E7EB] dark:border-[#2A2D3A] rounded-xl p-5 cursor-pointer transition-all duration-200 hover:border-teal dark:hover:border-teal hover:shadow-lg dark:hover:shadow-lg hover:bg-[#F8F9FA] dark:hover:bg-[#1A1D27]"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1 min-w-0">
          <!-- Title & Company -->
          <h3 class="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100 group-hover:text-teal transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-sm text-[#666666] dark:text-[#9CA3AF] capitalize">
            {{ project.company }} · {{ project.role }} · {{ project.type }}
          </p>

          <!-- Tech Stack (minimal) -->
          <div class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="tech in project.techStack.slice(0, 3)"
              :key="tech"
              class="px-2 py-0.5 text-[10px] font-medium bg-[#F8F9FA] dark:bg-[#1A1D27] group-hover:bg-white dark:group-hover:bg-[#0F1117] text-[#666666] dark:text-[#9CA3AF] rounded"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.techStack.length > 3"
              class="px-2 py-0.5 text-[10px] font-medium text-[#9CA3AF]"
            >
              +{{ project.techStack.length - 3 }}
            </span>
          </div>
        </div>

        <!-- Right: Year & Gallery Indicator -->
        <div class="flex flex-col items-end gap-2">
          <span class="text-xs text-[#9CA3AF] font-mono">
            {{ getYearDisplay() }}
          </span>
          <div
            v-if="project.images.length > 0"
            class="w-8 h-8 rounded-lg bg-[#F8F9FA] dark:bg-[#1A1D27] group-hover:bg-teal-light dark:group-hover:bg-teal/20 flex items-center justify-center transition-colors"
          >
            <svg class="w-4 h-4 text-[#9CA3AF] group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Description (always visible, minimal) -->
      <p class="text-sm text-[#666666] dark:text-[#9CA3AF] mt-3 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Footer: Expand details -->
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-[#E5E7EB] dark:border-[#2A2D3A]">
        <button
          @click.stop="toggleExpand"
          class="text-xs text-[#9CA3AF] hover:text-teal transition-colors flex items-center gap-1"
        >
          {{ isExpanded ? 'Less info' : 'More info' }}
          <svg
            class="w-3 h-3 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <a
          v-if="project.liveUrls?.length"
          :href="project.liveUrls[0].url"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="text-xs text-teal hover:text-teal-dark transition-colors flex items-center gap-1"
        >
          Visit
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <!-- Expanded Content -->
      <div
        v-show="isExpanded"
        class="overflow-hidden transition-all duration-300"
      >
        <div class="pt-3 mt-3 border-t border-[#E5E7EB] dark:border-[#2A2D3A]">
          <p
            v-if="project.impact"
            class="text-sm text-[#1A1A1A] dark:text-[#F0F0F0] mb-3"
          >
            <span class="text-teal font-medium">Impact:</span> {{ project.impact }}
          </p>

          <div v-if="project.liveUrls?.length" class="space-y-1">
            <p class="text-xs text-[#9CA3AF] uppercase tracking-wider">Live URLs</p>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="url in project.liveUrls"
                :key="url.url"
                :href="url.url"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="text-xs text-teal hover:text-teal-dark transition-colors flex items-center gap-1"
              >
                {{ url.label }}
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          @click="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div
            class="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#1A1D27] rounded-2xl shadow-2xl overflow-hidden"
            @click.stop
          >
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] dark:border-[#2A2D3A]">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ project.title }}</h3>
                <p class="text-sm text-[#666666] dark:text-[#9CA3AF]">
                  {{ project.company }} · {{ getYearDisplay() }}
                </p>
              </div>
              <button
                @click="closeModal"
                class="p-2 rounded-lg text-[#666666] dark:text-[#9CA3AF] hover:bg-[#F8F9FA] dark:hover:bg-[#2A2D3A] transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Gallery -->
            <div class="p-6">
              <ProjectGallery :images="project.images" :project-title="project.title" />
            </div>

            <!-- Modal Footer Info -->
            <div class="px-6 pb-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-2.5 py-1 text-xs font-medium bg-teal-light dark:bg-teal/20 text-teal-dark dark:text-teal rounded"
                >
                  {{ tech }}
                </span>
              </div>
              <p class="text-sm text-[#666666] dark:text-[#9CA3AF]">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
