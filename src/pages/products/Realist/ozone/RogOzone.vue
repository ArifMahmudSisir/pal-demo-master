<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <!-- <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h1 class="text-3xl md:text-4xl font-bold mb-3">ROG-OZONE</h1>
            <h2 class="text-xl opacity-90">Industrial Ozone Generator</h2>
            <p class="text-lg opacity-90">Heavy-duty ozone system for industrial applications</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img 
              src="/images/products/realist/ozone/rog-1.jpg" 
              alt="ROG-OZONE" 
              class="rounded-lg shadow-xl max-w-full h-auto"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-16">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <!-- Text: fixed height to match image so layout doesn't shift -->
                <div class="md:w-1/2 mb-8 md:mb-0 flex items-center h-48 md:h-64 lg:h-72">
                    <div class="w-full">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">ROG-OZONE</h1>
                        <h2 class="text-2xl opacity-90 mb-4">Industrial Ozone Generator</h2>
                        <p class="text-xl opacity-90">
                            Heavy-duty ozone system for industrial applications.
                        </p>
                    </div>
                </div>

                <!-- Image: fixed container height/width, object-cover keeps image from resizing section -->
                <div class="md:w-1/2 flex justify-center">
                    <div class="w-full max-w-md h-48 md:h-64 lg:h-72 overflow-hidden rounded-lg shadow-xl flex-shrink-0">
                        <img
                            src="/images/products/realist/ozone/rog-1.jpg"
                            alt="ROG-OZONE"
                            class="w-full h-full object-cover block"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Back Button -->
    <div class="container mx-auto px-4 py-4">
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

    <!-- Product Details -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Images -->
            <div>
              <div class="relative mb-4">
                <img 
                  :src="currentImage" 
                  alt="ROG-OZONE" 
                  class="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300"
                  :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
                  @load="imageLoaded = true"
                >
                <div v-if="!imageLoaded" class="absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              
              <div class="grid grid-cols-4 gap-2">
                <div 
                  v-for="(image, index) in productImages" 
                  :key="index"
                  @click="currentImage = image"
                  class="cursor-pointer group"
                >
                  <img 
                    :src="image" 
                    :alt="`ROG-OZONE ${index + 1}`" 
                    class="w-full h-20 object-cover rounded-lg border-2 transition-all duration-300 group-hover:scale-105"
                    :class="currentImage === image ? 'border-prime-green' : 'border-transparent'"
                    loading="lazy"
                  >
                </div>
              </div>
            </div>
            
            <!-- Info -->
            <div>
              <p class="text-gray-700 mb-6">
                The ROG-OZONE Industrial Ozone Generator delivers high-capacity ozone output with advanced control features, 
                designed for demanding industrial applications including water treatment plants, bottling facilities, and chemical processing.
              </p>
              
              <!-- Features -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3">Key Features</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">Industrial-grade construction (Stainless steel 316L)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">High capacity output (50g/h ozone)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">Advanced digital control system</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">Multiple safety interlocks and protections</span>
                  </li>
                </ul>
              </div>
              
              <!-- Specifications -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3">Specifications</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-500">Ozone Output</p>
                    <p class="font-medium">50g/h</p>
                  </div>
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-500">Power</p>
                    <p class="font-medium">1500W, 380V</p>
                  </div>
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-500">Dimensions</p>
                    <p class="font-medium">600x400x300mm</p>
                  </div>
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-500">Weight</p>
                    <p class="font-medium">25kg</p>
                  </div>
                </div>
              </div>
              
              <!-- Actions -->
              <div class="flex flex-wrap gap-3">
                <button class="bg-prime-green hover:bg-deep-sea-green text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Request Quote
                </button>
                <button class="border-2 border-prime-green text-prime-green hover:bg-prime-green hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-6 text-center">Applications</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Water Treatment Plants</h3>
              <p class="text-gray-600 text-sm">Large-scale municipal and industrial facilities</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Bottling Facilities</h3>
              <p class="text-gray-600 text-sm">Water bottling and beverage production</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Food Processing</h3>
              <p class="text-gray-600 text-sm">Food and beverage manufacturing</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Pharmaceutical</h3>
              <p class="text-gray-600 text-sm">Pharmaceutical and chemical processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-6 text-center">Support</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="w-12 h-12 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Installation</h3>
              <p class="text-gray-600 text-sm">Professional installation service</p>
            </div>
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="w-12 h-12 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L12 21l7.071-7.071-7.071-7.071M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536"></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-600 text-sm">Round-the-clock technical assistance</p>
            </div>
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="w-12 h-12 bg-prime-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">3 Year Warranty</h3>
              <p class="text-gray-600 text-sm">Comprehensive warranty coverage</p>
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
  '/images/products/realist/ozone/rog-1.jpg',
  '/images/products/realist/ozone/rog-2.jpg'
])

const currentImage = ref(productImages.value[0])
const imageLoaded = ref(false)
</script>