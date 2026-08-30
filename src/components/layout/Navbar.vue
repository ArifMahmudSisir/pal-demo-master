<template>
  <nav class="fixed top-0 w-full bg-white shadow-lg z-50 transition-all duration-300" :class="{ 'scrolled': isScrolled }">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center">
            <img :src="palLogoNav" alt="PAL Nav Logo" class="w-10 h-10">
            <!-- class="w-10 h-10 text-white fill=none" -->
          </div>
          <span class="text-xl font-bold gradient-text">Prime Automations Ltd.</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            class="text-gray-700 hover:text-prime-green transition-colors duration-300 font-medium"
            :class="{ 'text-prime-green': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200"
      >
        <div class="py-4 space-y-2">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            @click="isMobileMenuOpen = false"
            class="block px-4 py-2 text-gray-700 hover:bg-prime-green hover:text-white transition-colors duration-300"
            :class="{ 'bg-prime-green text-white': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import palLogoNav from '@/assets/images/icons/pal-logo-nav.svg'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Events', path: '/events' },
  { name: 'News', path: '/news' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="postcss">
.scrolled {
  @apply shadow-xl;
}
</style>