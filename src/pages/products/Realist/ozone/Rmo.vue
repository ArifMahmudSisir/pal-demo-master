<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">RMO</h1>
            <h2 class="text-2xl opacity-90 mb-4">Residential Ozone System</h2>
            <p class="text-xl opacity-90">Compact ozone generator for home use with advanced purification technology</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img src="/images/products/realist/ozone/rmo-1.jpg" alt="RMO" class="rounded-lg shadow-xl max-w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Back Button -->
    <div class="container mx-auto px-4 py-6">
      <button 
        @click="$router.go(-1)" 
        class="flex items-center text-prime-green hover:text-deep-sea-green transition-colors duration-300"
      >
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Ozone Systems
      </button>
    </div>

    <!-- Product Details Section -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Product Images -->
            <div>
              <img :src="currentImage" alt="RMO" class="w-full h-auto rounded-lg shadow-lg mb-6">
              
              <!-- Image Thumbnails -->
              <div class="grid grid-cols-4 gap-2">
                <div 
                  v-for="(image, index) in productImages" 
                  :key="index"
                  @click="currentImage = image"
                  class="cursor-pointer"
                >
                  <img :src="image" :alt="`RMO ${index + 1}`" class="w-full h-20 object-cover rounded-lg border-2 transition-colors duration-300" 
                       :class="currentImage === image ? 'border-prime-green' : 'border-transparent'">
                </div>
              </div>
            </div>
            
            <!-- Product Information -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Product Description</h3>
              <p class="text-gray-700 mb-8">
                The RMO Residential Ozone System is a compact, efficient solution for home water purification. 
                Utilizing advanced ozone technology, it effectively eliminates bacteria, viruses, and other 
                contaminants from your water supply, providing clean, safe water for your family.
              </p>
              
              <!-- Key Features -->
              <div class="mb-8">
                <h4 class="text-xl font-semibold mb-4">Key Features</h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700"><strong>High-efficiency ozone generation</strong> - Produces 5g/h of pure ozone for effective water treatment</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700"><strong>Compact and space-saving design</strong> - Perfect for residential installations with limited space</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700"><strong>Easy installation and maintenance</strong> - Simple setup with minimal maintenance requirements</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700"><strong>Low energy consumption</strong> - Energy-efficient operation with 120W power consumption</span>
                  </li>
                </ul>
              </div>
              
              <!-- Specifications -->
              <div class="mb-8">
                <h4 class="text-xl font-semibold mb-4">Technical Specifications</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Capacity</p>
                    <p class="font-medium">5g/h ozone output</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Power</p>
                    <p class="font-medium">120W, 220V</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Dimensions</p>
                    <p class="font-medium">300x200x150mm</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Weight</p>
                    <p class="font-medium">3.5kg</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Material</p>
                    <p class="font-medium">Stainless steel and ABS plastic</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Warranty</p>
                    <p class="font-medium">2 years</p>
                  </div>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-4">
                <button class="bg-prime-green hover:bg-deep-sea-green text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Request Quote
                </button>
                <button class="border-2 border-prime-green text-prime-green hover:bg-prime-green hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
                <button class="bg-white text-prime-green border-2 border-prime-green font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-prime-green/10">
                  Technical Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Applications</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-12 h-12 bg-prime-green rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7l-7 7m7-7v7m0 0H5"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Residential Water Treatment</h3>
              <p class="text-gray-600">Perfect for home water purification systems, ensuring clean and safe drinking water for your family.</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-12 h-12 bg-prime-green rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H7m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Swimming Pools</h3>
              <p class="text-gray-600">Maintains crystal clear water in swimming pools by eliminating algae and bacteria.</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-12 h-12 bg-prime-green rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9 9m9 9c1.657 0 3-4.03 3-9"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Spas and Hot Tubs</h3>
              <p class="text-gray-600">Keeps spa and hot tub water clean and sanitized for a relaxing experience.</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-12 h-12 bg-prime-green rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Aquaculture</h3>
              <p class="text-gray-600">Ideal for fish tanks and aquaculture systems to maintain healthy aquatic environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Installation & Support</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="w-16 h-16 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Easy Installation</h3>
              <p class="text-gray-600">Simple installation process with detailed instructions and all necessary components included.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="w-16 h-16 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L12 21l7.071-7.071-7.071-7.071M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-600">Round-the-clock technical support and maintenance assistance for your peace of mind.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="w-16 h-16 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">2 Year Warranty</h3>
              <p class="text-gray-600">Comprehensive warranty covering all parts and labor for 2 years from date of purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productImages = ref([
  '/images/products/realist/ozone/rmo-1.jpg',
  '/images/products/realist/ozone/rmo-2.jpg'
])

const currentImage = ref(productImages.value[0])
</script>