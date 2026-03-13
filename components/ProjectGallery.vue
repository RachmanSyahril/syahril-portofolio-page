<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  images: string[]
  projectTitle: string
}>()

const currentIndex = ref(0)
const isHovering = ref(false)

const hasMultipleImages = computed(() => props.images.length > 1)

function nextSlide() {
  if (hasMultipleImages.value) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }
}

function prevSlide() {
  if (hasMultipleImages.value) {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  }
}

function goToSlide(index: number) {
  currentIndex.value = index
}

// Touch handling
let touchStartX = 0
let touchEndX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
}

function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}
</script>

<template>
  <div
    class="relative h-[180px] bg-[#F8F9FA] dark:bg-[#1A1D27] overflow-hidden rounded-t-xl"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Images -->
    <div class="relative h-full w-full">
      <img
        v-for="(image, index) in images"
        :key="image"
        :src="image"
        :alt="`${projectTitle} - Image ${index + 1}`"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
        loading="lazy"
      />

      <!-- Placeholder when no images -->
      <div
        v-if="images.length === 0"
        class="absolute inset-0 flex flex-col items-center justify-center text-[#9CA3AF]"
      >
        <svg class="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-sm">{{ projectTitle }}</span>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      v-if="hasMultipleImages"
      @click="prevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 dark:bg-[#1A1D27]/90 rounded-full shadow-sm opacity-0 transition-opacity duration-200"
      :class="{ 'opacity-100': isHovering }"
      aria-label="Previous image"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      v-if="hasMultipleImages"
      @click="nextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/90 dark:bg-[#1A1D27]/90 rounded-full shadow-sm opacity-0 transition-opacity duration-200"
      :class="{ 'opacity-100': isHovering }"
      aria-label="Next image"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots Indicator -->
    <div
      v-if="hasMultipleImages"
      class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="h-1.5 rounded-full transition-all duration-300"
        :class="[
          index === currentIndex
            ? 'w-5 bg-teal'
            : 'w-1.5 bg-white/60 dark:bg-white/40 hover:bg-white/80 dark:hover:bg-white/60'
        ]"
        :aria-label="`Go to image ${index + 1}`"
      />
    </div>
  </div>
</template>
