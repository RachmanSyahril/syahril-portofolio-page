<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const { y } = useWindowScroll()
const colorMode = useColorMode()

const isScrolled = computed(() => y.value > 60)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function scrollToSection(href: string) {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
    :class="[
      isScrolled
        ? 'backdrop-blur-md bg-white/80 dark:bg-[#1A1D27]/80 border-b border-[#E5E7EB] dark:border-[#2A2D3A]'
        : 'bg-white/80 dark:bg-[#1A1D27]/80'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button
          @click="scrollToTop"
          class="text-xl text-[#666666] dark:text-[#9CA3AF] font-bold tracking-tight hover:text-teal transition-colors"
        >
          SR.
        </button>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <button
            v-for="link in navLinks"
            :key="link.href"
            @click="scrollToSection(link.href)"
            class="text-sm text-[#666666] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F0F0F0] transition-colors"
          >
            {{ link.label }}
          </button>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Dark Mode Toggle -->
          <button
            @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
            class="p-2 rounded-lg text-[#666666] dark:text-[#9CA3AF] hover:bg-[#F8F9FA] dark:hover:bg-[#1A1D27] transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg
              v-if="colorMode.preference === 'dark'"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <!-- Hire Me Button -->
          <a
            href="mailto:rachman.syahril@gmail.com"
            class="hidden sm:inline-flex items-center px-4 py-2 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal-dark transition-colors"
          >
            Hire me
          </a>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-[#666666] dark:text-[#9CA3AF] hover:bg-[#F8F9FA] dark:hover:bg-[#1A1D27] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1A1D27] border-b border-[#E5E7EB] dark:border-[#2A2D3A] shadow-lg"
    >
      <div class="px-4 py-4 space-y-2">
        <button
          v-for="link in navLinks"
          :key="link.href"
          @click="scrollToSection(link.href)"
          class="block w-full text-left px-4 py-3 text-sm text-[#666666] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#F0F0F0] hover:bg-[#F8F9FA] dark:hover:bg-[#1A1D27] rounded-lg transition-colors"
        >
          {{ link.label }}
        </button>
        <a
          href="mailto:rachman.syahril@gmail.com"
          class="block w-full text-center px-4 py-3 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal-dark transition-colors"
        >
          Hire me
        </a>
      </div>
    </div>
  </nav>
</template>
