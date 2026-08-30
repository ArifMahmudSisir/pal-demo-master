<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p class="text-xl opacity-90">Latest News and Company Announcements</p>
        </div>
      </div>
    </section>

    <!-- Breaking News -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Breaking News</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest announcements and industry news.</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8" data-aos="fade-up">
            <div class="flex items-center mb-4">
              <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                BREAKING
              </span>
              <span class="text-gray-500 text-sm">{{ breakingNews.date }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ breakingNews.title }}</h3>
            <p class="text-gray-700 mb-4">{{ breakingNews.content }}</p>
            <button class="text-red-500 hover:text-red-700 font-semibold transition-colors">
              Read Full Story →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Grid -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 class="text-3xl font-bold mb-4 md:mb-0">Latest News</h2>
          <div class="flex items-center space-x-4">
            <select v-model="selectedCategory" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="">All Categories</option>
              <option v-for="category in newsCategories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="important">Most Important</option>
            </select>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="news in filteredNews" :key="news.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
               data-aos="fade-up"
               :data-aos-delay="news.delay">
            <div class="relative">
              <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover">
              <div v-if="news.important" class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                IMPORTANT
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="bg-prime-green text-white px-2 py-1 rounded text-xs font-semibold">
                  {{ news.category }}
                </span>
                <span class="text-gray-500 text-xs">{{ news.date }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ news.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ news.excerpt }}</p>
              <button class="text-prime-green hover:text-deep-sea-green transition-colors text-sm font-semibold">
                Read More →
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="btn-secondary">Load More News</button>
        </div>
      </div>
    </section>

    <!-- Press Releases -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Press Releases</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Official press releases and media statements from Prime Automations Limited.</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="release in pressReleases" :key="release.id" 
               class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
               data-aos="fade-up"
               :data-aos-delay="release.delay">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">{{ release.title }}</h3>
                <p class="text-gray-600 mb-3">{{ release.summary }}</p>
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ release.date }}
                  <span class="mx-2">•</span>
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  {{ release.views }} views
                </div>
              </div>
              <button class="ml-4 text-prime-green hover:text-deep-sea-green transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Coverage -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Media Coverage</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">See what the media is saying about Prime Automations Limited.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="coverage in mediaCoverage" :key="coverage.id" 
               class="bg-white rounded-lg shadow-lg p-6"
               data-aos="fade-up"
               :data-aos-delay="coverage.delay">
            <div class="flex items-center mb-4">
              <img :src="coverage.logo" :alt="coverage.publication" class="w-12 h-12 object-contain mr-3">
              <div>
                <h4 class="font-semibold">{{ coverage.publication }}</h4>
                <p class="text-gray-500 text-sm">{{ coverage.date }}</p>
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ coverage.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ coverage.excerpt }}</p>
            <a :href="coverage.link" class="text-prime-green hover:text-deep-sea-green transition-colors text-sm font-semibold">
              Read Article →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Subscribe to News Updates</h2>
          <p class="text-gray-600 mb-8">Get the latest news and announcements delivered directly to your inbox.</p>
          
          <form @submit.prevent="subscribeNews" class="flex flex-col sm:flex-row gap-4">
            <input 
              v-model="newsEmail" 
              type="email" 
              placeholder="Enter your email address" 
              required
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
            >
            <button type="submit" class="btn-primary whitespace-nowrap">
              Subscribe to News
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Media Inquiries</h2>
        <p class="text-xl mb-8 opacity-90">For press inquiries, interviews, or media resources, please contact our media relations team.</p>
        <router-link to="/contact" class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Contact Media Relations
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const selectedCategory = ref('')
const sortBy = ref('date')
const newsEmail = ref('')

const newsCategories = [
  'Company News', 'Product Launches', 'Partnerships', 'Awards', 'Industry News', 'Events'
]

const breakingNews = {
  title: 'Prime Automations Limited Announces Major Breakthrough in AI-Powered Industrial Automation',
  content: 'We are thrilled to announce a revolutionary advancement in artificial intelligence for industrial automation systems. This breakthrough technology promises to increase efficiency by up to 60% while significantly reducing operational costs.',
  date: 'March 1, 2024'
}

const newsItems = [
  {
    id: 1,
    title: 'New Partnership with Global Tech Giant',
    excerpt: 'Prime Automations Limited signs strategic partnership agreement with leading technology company to enhance automation solutions.',
    category: 'Partnerships',
    date: 'February 28, 2024',
    image: 'https://picsum.photos/seed/partnership/400/300.jpg',
    important: true,
    delay: 0
  },
  {
    id: 2,
    title: 'Launch of Next-Gen PLC Systems',
    excerpt: 'Introducing our latest line of programmable logic controllers with advanced AI integration capabilities.',
    category: 'Product Launches',
    date: 'February 25, 2024',
    image: 'https://picsum.photos/seed/plc-launch/400/300.jpg',
    important: false,
    delay: 100
  },
  {
    id: 3,
    title: 'Industry Award for Innovation Excellence',
    excerpt: 'Prime Automations Limited receives prestigious innovation award for groundbreaking automation solutions.',
    category: 'Awards',
    date: 'February 20, 2024',
    image: 'https://picsum.photos/seed/award/400/300.jpg',
    important: true,
    delay: 200
  },
  {
    id: 4,
    title: 'Expansion into European Market',
    excerpt: 'Company announces major expansion plans with new headquarters in Berlin, Germany.',
    category: 'Company News',
    date: 'February 15, 2024',
    image: 'https://picsum.photos/seed/expansion/400/300.jpg',
    important: false,
    delay: 300
  },
  {
    id: 5,
    title: 'Record-Breaking Q4 Performance',
    excerpt: 'Prime Automations Limited reports highest quarterly revenue in company history.',
    category: 'Company News',
    date: 'February 10, 2024',
    image: 'https://picsum.photos/seed/performance/400/300.jpg',
    important: true,
    delay: 400
  },
  {
    id: 6,
    title: 'New Sustainability Initiative Launched',
    excerpt: 'Company commits to carbon-neutral operations by 2030 with comprehensive sustainability program.',
    category: 'Company News',
    date: 'February 5, 2024',
    image: 'https://picsum.photos/seed/sustainability/400/300.jpg',
    important: false,
    delay: 500
  },
  {
    id: 7,
    title: 'Breakthrough in Robotics Technology',
    excerpt: 'Research team develops revolutionary robotic system with unprecedented precision and flexibility.',
    category: 'Product Launches',
    date: 'January 30, 2024',
    image: 'https://picsum.photos/seed/robotics-breakthrough/400/300.jpg',
    important: true,
    delay: 600
  },
  {
    id: 8,
    title: 'Major Industry Conference Sponsorship',
    excerpt: 'Prime Automations Limited to be platinum sponsor at International Automation Conference 2024.',
    category: 'Events',
    date: 'January 25, 2024',
    image: 'https://picsum.photos/seed/conference/400/300.jpg',
    important: false,
    delay: 700
  },
  {
    id: 9,
    title: 'New CEO Appointment Announcement',
    excerpt: 'Board of Directors announces appointment of new Chief Executive Officer effective March 1, 2024.',
    category: 'Company News',
    date: 'January 20, 2024',
    image: 'https://picsum.photos/seed/ceo-appointment/400/300.jpg',
    important: true,
    delay: 800
  }
]

const pressReleases = [
  {
    id: 1,
    title: 'Prime Automations Limited Reports Record Revenue Growth of 45% in 2023',
    summary: 'Company announces exceptional financial performance with significant growth across all business segments and geographic regions.',
    date: 'February 28, 2024',
    views: 1250,
    delay: 0
  },
  {
    id: 2,
    title: 'Strategic Acquisition of AI Startup Enhances Technology Portfolio',
    summary: 'Prime Automations Limited completes acquisition of innovative AI startup to strengthen artificial intelligence capabilities.',
    date: 'February 15, 2024',
    views: 980,
    delay: 100
  },
  {
    id: 3,
    title: 'Launch of Sustainable Automation Initiative',
    summary: 'Company introduces comprehensive sustainability program aimed at reducing environmental impact across all operations.',
    date: 'February 1, 2024',
    views: 1560,
    delay: 200
  },
  {
    id: 4,
    title: 'New Manufacturing Facility Opens in Southeast Asia',
    summary: 'Prime Automations Limited inaugurates state-of-the-art manufacturing facility in Singapore to serve Asian markets.',
    date: 'January 15, 2024',
    views: 2100,
    delay: 300
  },
  {
    id: 5,
    title: 'Partnership Agreement with Leading Automotive Manufacturer',
    summary: 'Company signs multi-year agreement to provide automation solutions for major automotive production facilities.',
    date: 'January 1, 2024',
    views: 1870,
    delay: 400
  }
]

const mediaCoverage = [
  {
    id: 1,
    publication: 'Tech Industry Today',
    title: 'How Prime Automations is Revolutionizing Industrial AI',
    excerpt: 'In-depth analysis of the company\'s groundbreaking AI-powered automation solutions and their impact on the industry.',
    date: 'February 25, 2024',
    logo: 'https://picsum.photos/seed/tech-today/100/50.jpg',
    link: '#',
    delay: 0
  },
  {
    id: 2,
    publication: 'Manufacturing Weekly',
    title: 'The Rise of Smart Factories: A Prime Automations Success Story',
    excerpt: 'Feature story on how Prime Automations\' technology is transforming traditional manufacturing into smart factories.',
    date: 'February 20, 2024',
    logo: 'https://picsum.photos/seed/manufacturing-weekly/100/50.jpg',
    link: '#',
    delay: 100
  },
  {
    id: 3,
    publication: 'Business Innovation Magazine',
    title: 'Prime Automations Leads the Way in Sustainable Automation',
    excerpt: 'Coverage of the company\'s sustainability initiatives and their commitment to eco-friendly automation solutions.',
    date: 'February 15, 2024',
    logo: 'https://picsum.photos/seed/business-innovation/100/50.jpg',
    link: '#',
    delay: 200
  },
  {
    id: 4,
    publication: 'Global Technology Review',
    title: 'Exclusive Interview: CEO Discusses Future of Automation',
    excerpt: 'In-depth interview with the CEO about the company\'s vision for the future of industrial automation.',
    date: 'February 10, 2024',
    logo: 'https://picsum.photos/seed/tech-review/100/50.jpg',
    link: '#',
    delay: 300
  },
  {
    id: 5,
    publication: 'Industrial Automation News',
    title: 'Breakthrough Technology Sets New Industry Standards',
    excerpt: 'Technical analysis of Prime Automations\' latest technological breakthrough and its implications for the industry.',
    date: 'February 5, 2024',
    logo: 'https://picsum.photos/seed/automation-news/100/50.jpg',
    link: '#',
    delay: 400
  },
  {
    id: 6,
    publication: 'Financial Times',
    title: 'Prime Automations Stock Surges on Strong Earnings Report',
    excerpt: 'Financial analysis of the company\'s impressive stock performance following record-breaking quarterly results.',
    date: 'January 30, 2024',
    logo: 'https://picsum.photos/seed/financial-times/100/50.jpg',
    link: '#',
    delay: 500
  }
]

const filteredNews = computed(() => {
  let filtered = newsItems
  
  if (selectedCategory.value) {
    filtered = filtered.filter(news => news.category === selectedCategory.value)
  }
  
  return filtered.sort((a, b) => {
    if (sortBy.value === 'date') {
      return new Date(b.date) - new Date(a.date)
    } else if (sortBy.value === 'title') {
      return a.title.localeCompare(b.title)
    } else if (sortBy.value === 'important') {
      return (b.important ? 1 : 0) - (a.important ? 1 : 0)
    }
    return 0
  })
})

const subscribeNews = async () => {
  // Simulate newsletter subscription
  alert('Thank you for subscribing to our news updates! You will receive the latest news in your inbox.')
  newsEmail.value = ''
}

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>