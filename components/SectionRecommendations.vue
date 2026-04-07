<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const recommendations = [
  '/recommendations/1.png',
  '/recommendations/2.png',
  '/recommendations/3.png',
]

const currentIndex = ref(0)
const isVisible = ref(false)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % recommendations.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + recommendations.length) % recommendations.length
}

function goToSlide(index: number) {
  currentIndex.value = index
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000)
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('recommendations')
  if (section) observer.observe(section)

  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section id="recommendations" class="py-20 bg-white dark:bg-[#0F1117]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <p class="text-xs font-medium uppercase tracking-[0.08em] text-gray-600 dark:text-gray-400 mb-2">
          Testimonials
        </p>
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">Recommendations</h2>
      </div>

      <!-- Carousel -->
      <div
        class="relative max-w-3xl mx-auto"
        :class="{ 'opacity-0 translate-y-3': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        style="transition: all 500ms ease;"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <!-- Images Container -->
        <div class="relative aspect-[16/9] bg-[#F8F9FA] dark:bg-[#1A1D27] rounded-xl overflow-hidden">
          <img
            v-for="(image, index) in recommendations"
            :key="image"
            :src="image"
            :alt="`Recommendation ${index + 1}`"
            class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
            :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
          />
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-[#1A1D27]/90 rounded-full shadow-sm hover:bg-white dark:hover:bg-[#1A1D27] transition-colors"
          aria-label="Previous image"
        >
          <svg class="w-5 h-5 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-[#1A1D27]/90 rounded-full shadow-sm hover:bg-white dark:hover:bg-[#1A1D27] transition-colors"
          aria-label="Next image"
        >
          <svg class="w-5 h-5 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex items-center justify-center gap-2 mt-6">
          <button
            v-for="(_, index) in recommendations"
            :key="index"
            @click="goToSlide(index)"
            class="h-2 rounded-full transition-all duration-300"
            :class="[
              index === currentIndex
                ? 'w-6 bg-teal'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            ]"
            :aria-label="`Go to image ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
