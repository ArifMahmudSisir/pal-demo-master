<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Ozone Systems</h1>
            <p class="text-xl opacity-90">Advanced ozone treatment solutions for water purification with cutting-edge technology</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img src="/images/products/realist/ozone/ozone.jpeg" alt="Ozone Systems" class="rounded-lg shadow-xl max-w-full h-auto">
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
        Back to Realist
      </button>
    </div>

    <!-- Products Grid -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Products in Ozone Systems</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- RMO Product Card -->
          <router-link 
            to="/products/realist/ozone/rmo"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-6">
              <img src="/images/products/realist/ozone/rmo-1.jpg" alt="RMO" class="w-full h-48 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">RMO</h3>
              <h4 class="text-lg text-gray-600 mb-2">Residential Ozone System</h4>
              <p class="text-gray-600 mb-4">Compact ozone generator for home use with advanced purification technology</p>
              
              <!-- Key Features -->
              <div class="mb-4">
                <h5 class="font-medium text-gray-700 mb-2">Key Features:</h5>
                <ul class="space-y-1">
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    High-efficiency ozone generation
                  </li>
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Compact and space-saving design
                  </li>
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Easy installation and maintenance
                  </li>
                </ul>
              </div>
              
              <div class="text-prime-green font-medium text-sm flex items-center">
                View Details
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </router-link>
          
          <!-- ROG-OZONE Product Card -->
          <router-link 
            to="/products/realist/ozone/rog-ozone"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-6">
              <img src="/images/products/realist/ozone/rog-1.jpg" alt="ROG-OZONE" class="w-full h-48 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">ROG-OZONE</h3>
              <h4 class="text-lg text-gray-600 mb-2">Industrial Ozone Generator</h4>
              <p class="text-gray-600 mb-4">Heavy-duty ozone system for industrial applications with high capacity output</p>
              
              <!-- Key Features -->
              <div class="mb-4">
                <h5 class="font-medium text-gray-700 mb-2">Key Features:</h5>
                <ul class="space-y-1">
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Industrial-grade construction
                  </li>
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    High capacity output
                  </li>
                  <li class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced control system
                  </li>
                </ul>
              </div>
              
              <div class="text-prime-green font-medium text-sm flex items-center">
                View Details
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>