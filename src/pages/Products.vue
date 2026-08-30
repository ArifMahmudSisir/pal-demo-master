<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p class="text-xl opacity-90">Comprehensive Automation Solutions for Every Industry</p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore our wide range of automation products designed to meet diverse industrial needs.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div v-for="category in categories" :key="category.name" 
               class="bg-gray-50 p-6 rounded-lg shadow-lg card-hover cursor-pointer"
               data-aos="fade-up"
               :data-aos-delay="category.delay"
               @click="selectedCategory = category.name">
            <div class="w-16 h-16 bg-prime-green rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ category.name }}</h3>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Our most popular and innovative automation solutions.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in featuredProducts" :key="product.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
               data-aos="fade-up"
               :data-aos-delay="product.delay">
            <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" :class="{ 'border-2 border-gray-100': product.name.includes('Audaces 360') }">
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                <span class="bg-prime-green text-white px-2 py-1 rounded text-sm">{{ product.category }}</span>
              </div>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <!-- <span class="text-2xl font-bold text-prime-green">{{ product.price }}</span> -->
                <button class="btn-primary text-sm">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Products Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 class="text-3xl font-bold mb-4 md:mb-0">All Products</h2>
          <div class="flex items-center space-x-4">
            <select v-model="selectedCategory" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.name" :value="category.name">
                {{ category.name }}
              </option>
            </select>
            <!-- <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select> -->
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="product in filteredProducts" :key="product.id" 
               class="bg-gray-50 rounded-lg shadow-lg overflow-hidden card-hover"
               data-aos="fade-up">
            <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover">
            <div class="p-4">
              <h4 class="font-semibold mb-1">{{ product.name }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ product.shortDescription }}</p>
              <div class="flex items-center justify-between">
                <!-- <span class="text-lg font-bold text-prime-green">{{ product.price }}</span> -->
                <button class="text-prime-green hover:text-deep-sea-green transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Comparison -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Product Comparison</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Compare our key products to find the perfect solution for your needs.</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-prime-green text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Features</th>
                  <th v-for="product in comparisonProducts" :key="product.id" class="px-6 py-4 text-center">
                    {{ product.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="feature in comparisonFeatures" :key="feature.name" class="border-b border-gray-200">
                  <td class="px-6 py-4 font-medium">{{ feature.name }}</td>
                  <td v-for="product in comparisonProducts" :key="product.id" class="px-6 py-4 text-center">
                    <span v-if="product.features[feature.key]" class="text-green-500">
                      <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span v-else class="text-gray-400">-</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
        <p class="text-xl mb-8 opacity-90">Our team can design and develop tailored automation solutions for your specific requirements.</p>
        <router-link to="/contact" class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Request Custom Solution
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import audaces360Icon from '../assets/images/icons/Audaces 360.svg'

import audaces3D from '../assets/images/product_image/Audaces 3D.svg'
import audacesDigiflashXT from '../assets/images/product_image/Audaces Digiflash XT.svg'
import audacesDigiflash from '../assets/images/product_image/Audaces Digiflash.svg'
import audacesFashionStudio from '../assets/images/product_image/Audaces Fashion Studio.svg'
import audacesIdea from '../assets/images/product_image/Audaces Idea.svg'
import audacesIsa from '../assets/images/product_image/Audaces Isa.svg'
import audacesMarker from '../assets/images/product_image/Audaces Marker.svg'
import audacesPattern from '../assets/images/product_image/Audaces Pattern.svg'
import audacesSofia from '../assets/images/product_image/Audaces Sofia.svg'
import audacesSupera from '../assets/images/product_image/Audaces Supera.svg'
import digiflashPng from '../assets/images/product_image/DIGIFLASH.png'
import encaixePng from '../assets/images/product_image/ENCAIXE.png'
import fashionStudioPng from '../assets/images/product_image/FASHION STUDIO.png'
import ideaPng from '../assets/images/product_image/IDEA.png'
import isaPng from '../assets/images/product_image/ISA.png'
import moldesPng from '../assets/images/product_image/MOLDES.png'
import sofiaPng from '../assets/images/product_image/SOFIA.png'
import superaPng from '../assets/images/product_image/SUPERA.png'

const selectedCategory = ref('')
const sortBy = ref('name')

const categories = [
  {
    name: 'Software Solutions',
    description: 'CAD/CAM, MES, ERP.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    delay: 0
  },
  {
    name: 'Control Systems',
    description: 'Advanced PLC and control systems for industrial automation.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
    delay: 200
  },
  {
    name: 'Robotics',
    description: 'Sensors & Spear Parts',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    delay: 100
  }
  
]

const featuredProducts = [
  {
    id: 1,
    name: 'FDS - Automated Padder Chemical Dosing System For Stenter',
    category: 'Control Systems',
    description: 'By M+',
    // price: '$2,500',
    image: 'https://picsum.photos/seed/plc2/400/300.jpg',
    delay: 0
  },
  {
    id: 2,
    name: 'Aqua Therm- Waste Water Energy Saving Solutions',
    category: 'Robotics',
    description: 'By Aenerji',
    // price: '$45,000',
    image: 'https://picsum.photos/seed/robot/400/300.jpg',
    delay: 100
  },
  {
    id: 3,
    name: 'Decolorization - Precision decolorization for sustainable water recovery',
    category: 'Software Solutions',
    description: 'By Enta',
    // price: '$15,000',
    image: 'https://picsum.photos/seed/scada2/400/300.jpg',
    delay: 200
  },
  {
    id: 4,
    name: 'Auto Cutter - Automated Cutting edge with precision and perfection',
    category: 'Sensors & Instruments',
    description: 'By Audaces',
    // price: '$3,200',
    image: 'https://picsum.photos/seed/sensor/400/300.jpg',
    delay: 300
  },
  {
    id: 5,
    name: 'Auto Hanger- Unite Production System',
    category: 'Control Systems',
    description: 'By Eltonsystem',
    // price: '$8,500',
    image: 'https://picsum.photos/seed/motion2/400/300.jpg',
    delay: 400
  },
  {
    id: 6,
    name: 'ICF - One Stop Production Control System',
    category: 'Software Solutions',
    description: 'By Audaces',
    // price: '$1,800',
    image: 'https://picsum.photos/seed/hmi2/400/300.jpg',
    delay: 500
  },
  {
    id: 7,
    name: 'Audaces 360 - Multi-System Integration',
    category: 'Software Solutions',
    description: 'By Audaces',
    // price: 'TBD',
    image: audaces360Icon,
    delay: 600
  }
]

const allProducts = [
  {
    id: 1,
    name: 'Advanced PLC System',
    category: 'Control Systems',
    shortDescription: 'High-performance PLC with networking',
    // price: '$2,500',
    image: 'https://picsum.photos/seed/plc3/300/200.jpg'
  },
  {
    id: 2,
    name: 'Basic PLC Module',
    category: 'Control Systems',
    shortDescription: 'Entry-level programmable controller',
    // price: '$800',
    image: 'https://picsum.photos/seed/plc4/300/200.jpg'
  },
  {
    id: 3,
    name: 'Industrial Robot Arm',
    category: 'Robotics',
    shortDescription: '6-axis precision robot',
    // price: '$45,000',
    image: 'https://picsum.photos/seed/robot2/300/200.jpg'
  },
  {
    id: 4,
    name: 'Collaborative Robot',
    category: 'Robotics',
    shortDescription: 'Safe human-robot collaboration',
    // price: '$28,000',
    image: 'https://picsum.photos/seed/cobot/300/200.jpg'
  },
  {
    id: 5,
    name: 'SCADA Platform',
    category: 'Software Solutions',
    shortDescription: 'Comprehensive monitoring system',
    // price: '$15,000',
    image: 'https://picsum.photos/seed/scada3/300/200.jpg'
  },
  {
    id: 6,
    name: 'MES Software',
    category: 'Software Solutions',
    shortDescription: 'Manufacturing execution system',
    // price: '$22,000',
    image: 'https://picsum.photos/seed/mes/300/200.jpg'
  },
  {
    id: 7,
    name: 'Smart Sensor Array',
    category: 'Sensors & Instruments',
    shortDescription: 'IoT-enabled multi-sensor system',
    // price: '$3,200',
    image: 'https://picsum.photos/seed/sensor2/300/200.jpg'
  },
  {
    id: 8,
    name: 'Temperature Controller',
    category: 'Sensors & Instruments',
    shortDescription: 'Precision temperature control',
    // price: '$450',
    image: 'https://picsum.photos/seed/temp/300/200.jpg'
  },
  {
    id: 9,
    name: 'Motion Controller',
    category: 'Control Systems',
    shortDescription: 'Advanced motion control system',
    // price: '$8,500',
    image: 'https://picsum.photos/seed/motion3/300/200.jpg'
  },
  {
    id: 10,
    name: 'HMI Touch Panel',
    category: 'Software Solutions',
    shortDescription: 'Industrial touch interface',
    // price: '$1,800',
    image: 'https://picsum.photos/seed/hmi3/300/200.jpg'
  },
  {
    id: 11,
    name: 'Safety Controller',
    category: 'Control Systems',
    shortDescription: 'Integrated safety system',
    // price: '$3,500',
    image: 'https://picsum.photos/seed/safety/300/200.jpg'
  },
  {
    id: 12,
    name: 'Pressure Sensor',
    category: 'Sensors & Instruments',
    shortDescription: 'High-accuracy pressure monitoring',
    // price: '$320',
    image: 'https://picsum.photos/seed/pressure/300/200.jpg'
  },
  {
    id: 13,
    name: 'Audaces 3D',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audaces3D
  },
  {
    id: 14,
    name: 'Audaces Digiflash XT',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesDigiflashXT
  },
  {
    id: 15,
    name: 'Audaces Digiflash',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesDigiflash
  },
  {
    id: 16,
    name: 'Audaces Fashion Studio',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesFashionStudio
  },
  {
    id: 17,
    name: 'Audaces Idea',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesIdea
  },
  {
    id: 18,
    name: 'Audaces Isa',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesIsa
  },
  {
    id: 19,
    name: 'Audaces Marker',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesMarker
  },
  {
    id: 20,
    name: 'Audaces Pattern',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesPattern
  },
  {
    id: 21,
    name: 'Audaces Sofia',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesSofia
  },
  {
    id: 22,
    name: 'Audaces Supera',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: audacesSupera
  },
  {
    id: 23,
    name: 'DIGIFLASH',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: digiflashPng
  },
  {
    id: 24,
    name: 'ENCAIXE',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: encaixePng
  },
  {
    id: 25,
    name: 'FASHION STUDIO',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: fashionStudioPng
  },
  {
    id: 26,
    name: 'IDEA',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: ideaPng
  },
  {
    id: 27,
    name: 'ISA',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: isaPng
  },
  {
    id: 28,
    name: 'MOLDES',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: moldesPng
  },
  {
    id: 29,
    name: 'SOFIA',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: sofiaPng
  },
  {
    id: 30,
    name: 'SUPERA',
    category: 'Software Solutions',
    shortDescription: 'Automated solution',
    image: superaPng
  }
]

const comparisonProducts = [
  {
    id: 1,
    name: 'Advanced PLC System',
    features: {
      networking: true,
      safety: true,
      iot: true,
      scalability: true,
      support: true
    }
  },
  {
    id: 2,
    name: 'Basic PLC Module',
    features: {
      networking: false,
      safety: true,
      iot: false,
      scalability: false,
      support: true
    }
  },
  {
    id: 3,
    name: 'Industrial Robot Arm',
    features: {
      networking: true,
      safety: true,
      iot: true,
      scalability: true,
      support: true
    }
  }
]

const comparisonFeatures = [
  { name: 'Networking Capabilities', key: 'networking' },
  { name: 'Safety Features', key: 'safety' },
  { name: 'IoT Integration', key: 'iot' },
  { name: 'Scalability', key: 'scalability' },
  { name: '24/7 Support', key: 'support' }
]

const filteredProducts = computed(() => {
  let filtered = allProducts
  
  if (selectedCategory.value) {
    filtered = filtered.filter(product => product.category === selectedCategory.value)
  }
  
  return filtered.sort((a, b) => {
    if (sortBy.value === 'name') {
      return a.name.localeCompare(b.name)
    } else if (sortBy.value === 'price') {
      return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
    } else if (sortBy.value === 'category') {
      return a.category.localeCompare(b.category)
    }
    return 0
  })
})

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>