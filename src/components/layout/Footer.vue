<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center">
              <img :src="palLogo" alt="PAL Logo">
            </div>
            <span class="text-xl font-bold">Prime Automations Limited</span>
          </div>
          <p class="text-gray-400">Leading the future of automation with innovative solutions and cutting-edge technology.</p>
          <!-- Social Icons -->
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" 
               class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-prime-green transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
<div class="space-y-4">
  <h3 class="text-lg font-semibold">Quick Links</h3>
  <!-- 
    Using CSS Grid for a responsive 2-column layout.
    - grid-cols-1: Single column on small screens (mobile).
    - md:grid-cols-2: Switches to 2 columns on medium screens (tablets and up).
    - gap-y-2: Vertical space between rows.
    - gap-x-4: Horizontal space between the two columns.
  -->
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
    <li v-for="link in quickLinks" :key="link.name">
      <router-link :to="link.path" class="text-gray-400 hover:text-prime-green transition-colors duration-300">
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</div>

      <!-- Contact Info -->
<div class="space-y-4">
  <h3 class="text-lg font-semibold">Contact Info</h3>
  <div class="space-y-3">
    <!-- Location Div -->
    <div class="flex items-start space-x-3">
      <svg class="w-5 h-5 text-prime-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <span class="text-gray-400 text-sm sm:text-base leading-relaxed">Akash Plaza, Room #506 Plot #21, Road #7/D, Sector #09 Uttara, Dhaka, Bangladesh</span>
    </div>

    <!-- Telephone Div -->
    <div class="flex items-start space-x-3">
      <svg class="w-5 h-5 text-prime-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
      <a href="tel:+8801769093465" class="text-gray-400 hover:text-prime-green transition-colors duration-300 text-sm sm:text-base">+880 1769-093465</a>
    </div>

    <!-- Helpdesk Email Div -->
    <div class="flex items-start space-x-3">
      <svg class="w-5 h-5 text-prime-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
      <a href="mailto:salesdesk.primegroup@gmail.com" class="text-gray-400 hover:text-prime-green transition-colors duration-300 text-sm sm:text-base">salesdesk.primegroup@gmail.com</a>
    </div>
  </div>
</div>

        <!-- Opening Hours -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Opening Hours</h3>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-400">Monday - Friday</span>
              <span class="text-gray-400">9:00 AM - 6:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Saturday</span>
              <span class="text-gray-400">10:00 AM - 4:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Sunday</span>
              <span class="font-semibold text-red-800">Closed</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">© {{ currentYear }} Prime Automations Limited. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <router-link to="/privacy-policy" class="text-gray-400 hover:text-prime-green text-sm transition-colors duration-300">Privacy Policy</router-link>
            <a href="#" class="text-gray-400 hover:text-prime-green text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Footer Current Year
const currentYear = computed(() => new Date().getFullYear())

// Company logo import
import palLogo from '@/assets/images/icons/pal-logo-nav.svg'

// Social Media Links & Icons
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/primeautomationsltd',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/Prime_ltd_bd',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/primeautomationsltd/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/8801769093465',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@primeutomationsltd',
    icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  }
]


const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Events', path: '/events' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'News', path: '/news' },
  { name: 'Careers', path: '/careers' }
]
</script>