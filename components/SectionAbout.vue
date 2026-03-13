<script setup lang="ts">
import { ref, onMounted } from 'vue'

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

  const section = document.getElementById('about')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="about" class="py-20 bg-[#F8F9FA] dark:bg-[#1A1D27]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <p class="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] dark:text-[#9CA3AF] mb-2">
          About
        </p>
        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">The Person Behind the Code</h2>
      </div>

      <div
        class="grid md:grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start"
        :class="{ 'opacity-0 translate-y-3': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        style="transition: all 500ms ease;"
      >
        <!-- Avatar -->
        <div class="flex md:block justify-center">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-teal">
            <img
              src="/avatar.jpg"
              alt="Syahril Rachman"
              class="w-full h-full object-cover"
              onerror="this.style.display='none'"
            />
            <!-- Fallback avatar with initials -->
            <div
              v-if="true"
              class="w-full h-full bg-teal-light dark:bg-teal/20 flex items-center justify-center text-teal text-3xl md:text-4xl font-semibold"
            >
              SR
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg leading-relaxed text-[#1A1A1A] dark:text-[#F0F0F0]">
              Mulai dari jaringan komputer, bergerak ke web —
              saya Syahril, developer dari Bandung yang senang
              membangun hal-hal yang benar-benar dipakai orang.
            </p>
            <p class="text-lg leading-relaxed text-[#666666] dark:text-[#9CA3AF]">
              Dari IoT platform di Telkom sampai dashboard
              klinik Pertamina, saya terbiasa kerja di antara
              frontend yang smooth dan backend yang solid.
            </p>
            <p class="text-lg leading-relaxed text-[#666666] dark:text-[#9CA3AF]">
              Nyarios Sunda, Mamanah Nest, Nyerat Vue.
            </p>
          </div>

          <!-- Info Grid -->
          <div class="flex flex-wrap gap-6 pt-4 border-t border-[#E5E7EB] dark:border-[#2A2D3A]">
            <div class="flex items-center gap-2 text-sm text-[#666666] dark:text-[#9CA3AF]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bandung, Indonesia
            </div>

            <div class="flex items-center gap-2 text-sm text-[#666666] dark:text-[#9CA3AF]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              D4 Teknik Informatika — Politeknik Piksi Ganesha
            </div>

            <div class="flex items-center gap-2 text-sm text-[#666666] dark:text-[#9CA3AF]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Indonesian · English · Sundanese
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
