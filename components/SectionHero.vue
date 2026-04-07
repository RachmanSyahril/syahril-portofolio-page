<script setup lang="ts">
import { ref, onMounted } from 'vue'

const firstName = 'Syahril'
const lastName = 'Rachman'
const displayFirstName = ref('')
const displayLastName = ref('')
const showCursor = ref(false)
const isTypingComplete = ref(false)
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
  typeText()
})

async function typeText() {
  // Type first name
  for (let i = 0; i < firstName.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 80))
    displayFirstName.value += firstName[i]
  }

  // Type last name
  for (let i = 0; i < lastName.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 80))
    displayLastName.value += lastName[i]
  }

  isTypingComplete.value = true
  showCursor.value = true
}

const stats = [
  { value: '12+', label: 'Projects shipped' },
  { value: '5+', label: 'Years exp.' },
  { value: '3', label: 'Recommendations' },
  { value: '1', label: 'Active freelance' },
]

const badges = ['React', 'Vue', 'Node', 'IoT']
</script>

<template>
  <section class="min-h-screen flex items-center pt-16 relative overflow-hidden bg-[#F8F9FA] dark:bg-[#0F1117]">
    <!-- Background dots -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
        <!-- Left Column -->
        <div
          class="space-y-6"
          :class="{ 'opacity-0 translate-y-2': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          style="transition: all 500ms ease; transition-delay: 0ms;"
        >
          <!-- Greeting -->
          <p class="text-sm font-medium text-teal uppercase tracking-[0.08em]">
            Halo, abdi téh —
          </p>

          <!-- Name with typing animation -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-gray-900 dark:text-gray-100">
            <span class="block">
              {{ displayFirstName }}<span v-if="showCursor" class="text-teal animate-blink">|</span>
            </span>
            <span class="block">
              {{ displayLastName }}<span v-if="showCursor && isTypingComplete" class="text-teal animate-blink">|</span>
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg text-[#666666] dark:text-[#9CA3AF]"
            :class="{ 'opacity-0': !isTypingComplete, 'opacity-100': isTypingComplete }"
            style="transition: opacity 500ms ease; transition-delay: 200ms;"
          >
            Full Stack Developer · Bandung, Indonesia
          </p>

          <!-- Badges -->
          <div
            class="flex flex-wrap items-center gap-3"
            :class="{ 'opacity-0': !isTypingComplete, 'opacity-100': isTypingComplete }"
            style="transition: opacity 500ms ease; transition-delay: 300ms;"
          >
            <span class="inline-flex items-center gap-1.5 text-sm text-[#666666] dark:text-[#9CA3AF]">
              <span class="w-2 h-2 rounded-full bg-teal animate-pulse-dot"></span>
              Available
            </span>
            <span class="w-px h-4 bg-[#E5E7EB] dark:bg-[#2A2D3A]"></span>
            <span
              v-for="badge in badges"
              :key="badge"
              class="px-2.5 py-1 text-xs font-medium bg-[#F8F9FA] dark:bg-[#1A1D27] text-[#666666] dark:text-[#9CA3AF] rounded-md"
            >
              {{ badge }}
            </span>
          </div>
        </div>

        <!-- Separator -->
        <div class="hidden lg:block w-px h-48 bg-[#E5E7EB] dark:bg-[#2A2D3A]"></div>

        <!-- Right Column - Stats -->
        <div
          class="grid grid-cols-2 gap-6"
          :class="{ 'opacity-0 translate-y-2': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          style="transition: all 500ms ease; transition-delay: 400ms;"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center text-gray-900 dark:text-gray-100"
            :style="{ 'transition-delay': `${500 + index * 100}ms` }"
          >
            <div class="text-2xl sm:text-3xl font-semibold">{{ stat.value }}</div>
            <div class="text-[11px] text-[#666666] dark:text-[#9CA3AF] uppercase tracking-wider mt-1">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
