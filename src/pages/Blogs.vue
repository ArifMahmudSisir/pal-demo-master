<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Blogs</h1>
          <p class="text-xl opacity-90">Insights, Trends, and Innovations in Automation</p>
        </div>
      </div>
    </section>

    <!-- Featured Blog Post -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Our latest insights on automation and industry trends.</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <img :src="featuredBlog.image" :alt="featuredBlog.title" class="w-full h-96 object-cover">
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <span class="bg-prime-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {{ featuredBlog.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ featuredBlog.date }}</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ featuredBlog.title }}</h3>
              <p class="text-gray-600 mb-6">{{ featuredBlog.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="featuredBlog.author.avatar" :alt="featuredBlog.author.name" class="w-10 h-10 rounded-full mr-3">
                  <div>
                    <p class="font-semibold">{{ featuredBlog.author.name }}</p>
                    <p class="text-gray-500 text-sm">{{ featuredBlog.author.role }}</p>
                  </div>
                </div>
                <button class="btn-primary">Read Full Article</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore articles organized by topic and interest area.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="category in categories" :key="category.name" 
               class="bg-white p-6 rounded-lg shadow-lg text-center card-hover cursor-pointer"
               data-aos="fade-up"
               :data-aos-delay="category.delay"
               @click="selectedCategory = category.name">
            <div class="w-16 h-16 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 text-sm">{{ category.count }} articles</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Blog Posts -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 class="text-3xl font-bold mb-4 md:mb-0">Latest Articles</h2>
          <div class="flex items-center space-x-4">
            <select v-model="selectedCategory" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.name" :value="category.name">
                {{ category.name }}
              </option>
            </select>
            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green">
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="blog in filteredBlogs" :key="blog.id" 
               class="bg-gray-50 rounded-lg shadow-lg overflow-hidden card-hover"
               data-aos="fade-up"
               :data-aos-delay="blog.delay">
            <img :src="blog.image" :alt="blog.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="bg-prime-green text-white px-2 py-1 rounded text-xs font-semibold">
                  {{ blog.category }}
                </span>
                <span class="text-gray-500 text-xs">{{ blog.date }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ blog.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ blog.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="blog.author.avatar" :alt="blog.author.name" class="w-8 h-8 rounded-full mr-2">
                  <span class="text-gray-500 text-sm">{{ blog.author.name }}</span>
                </div>
                <button class="text-prime-green hover:text-deep-sea-green transition-colors text-sm font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="btn-secondary">Load More Articles</button>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p class="text-gray-600 mb-8">Subscribe to our newsletter and get the latest insights delivered to your inbox.</p>
          
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4">
            <input 
              v-model="newsletterEmail" 
              type="email" 
              placeholder="Enter your email address" 
              required
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
            >
            <button type="submit" class="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Popular Tags -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Popular Tags</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore articles by popular topics and keywords.</p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tag in popularTags" :key="tag" 
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-prime-green hover:text-white transition-colors cursor-pointer">
            #{{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Want to Contribute?</h2>
        <p class="text-xl mb-8 opacity-90">Share your expertise and insights with our community of automation professionals.</p>
        <router-link to="/contact" class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Become a Contributor
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const selectedCategory = ref('')
const sortBy = ref('date')
const newsletterEmail = ref('')

const categories = [
  {
    name: 'Industry Trends',
    count: 24,
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    delay: 0
  },
  {
    name: 'Technology',
    count: 18,
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    delay: 100
  },
  {
    name: 'Case Studies',
    count: 12,
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    delay: 200
  },
  {
    name: 'Best Practices',
    count: 15,
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    delay: 300
  }
]

const featuredBlog = {
  id: 1,
  title: 'The Future of Industrial Automation: Trends to Watch in 2024',
  excerpt: 'Explore the cutting-edge technologies and trends that are shaping the future of industrial automation, from AI integration to sustainable practices.',
  category: 'Industry Trends',
  date: 'March 1, 2024',
  image: 'https://picsum.photos/seed/future-automation/800/400.jpg',
  author: {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    avatar: 'https://picsum.photos/seed/author1/100/100.jpg'
  }
}

const blogPosts = [
  {
    id: 1,
    title: 'Implementing AI in Manufacturing: A Complete Guide',
    excerpt: 'Learn how to successfully integrate artificial intelligence into your manufacturing processes for improved efficiency and quality.',
    category: 'Technology',
    date: 'February 28, 2024',
    image: 'https://picsum.photos/seed/ai-manufacturing/400/300.jpg',
    author: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/seed/author2/100/100.jpg'
    },
    delay: 0
  },
  {
    id: 2,
    title: 'Case Study: Automating a Food Processing Plant',
    excerpt: 'Discover how we helped a major food processing company increase productivity by 40% through strategic automation.',
    category: 'Case Studies',
    date: 'February 25, 2024',
    image: 'https://picsum.photos/seed/food-processing/400/300.jpg',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://picsum.photos/seed/author3/100/100.jpg'
    },
    delay: 100
  },
  {
    id: 3,
    title: 'Best Practices for Industrial IoT Security',
    excerpt: 'Essential security measures and best practices to protect your industrial IoT systems from cyber threats.',
    category: 'Best Practices',
    date: 'February 20, 2024',
    image: 'https://picsum.photos/seed/iot-security/400/300.jpg',
    author: {
      name: 'David Kim',
      avatar: 'https://picsum.photos/seed/author4/100/100.jpg'
    },
    delay: 200
  },
  {
    id: 4,
    title: 'The Rise of Collaborative Robots in Industry',
    excerpt: 'How collaborative robots are transforming workplace safety and efficiency in modern manufacturing environments.',
    category: 'Industry Trends',
    date: 'February 15, 2024',
    image: 'https://picsum.photos/seed/cobots/400/300.jpg',
    author: {
      name: 'Lisa Thompson',
      avatar: 'https://picsum.photos/seed/author5/100/100.jpg'
    },
    delay: 300
  },
  {
    id: 5,
    title: 'Sustainable Automation: Green Solutions for Industry',
    excerpt: 'Exploring eco-friendly automation technologies that reduce environmental impact while maintaining productivity.',
    category: 'Industry Trends',
    date: 'February 10, 2024',
    image: 'https://picsum.photos/seed/green-automation/400/300.jpg',
    author: {
      name: 'Robert Green',
      avatar: 'https://picsum.photos/seed/author6/100/100.jpg'
    },
    delay: 400
  },
  {
    id: 6,
    title: 'Predictive Maintenance: A Game Changer for Industry',
    excerpt: 'How predictive maintenance powered by AI and IoT is revolutionizing industrial equipment management.',
    category: 'Technology',
    date: 'February 5, 2024',
    image: 'https://picsum.photos/seed/predictive-maintenance/400/300.jpg',
    author: {
      name: 'Amanda Foster',
      avatar: 'https://picsum.photos/seed/author7/100/100.jpg'
    },
    delay: 500
  },
  {
    id: 7,
    title: 'Case Study: Automotive Assembly Line Automation',
    excerpt: 'A detailed look at how we automated a major automotive manufacturer\'s assembly line with remarkable results.',
    category: 'Case Studies',
    date: 'January 30, 2024',
    image: 'https://picsum.photos/seed/automotive/400/300.jpg',
    author: {
      name: 'James Wilson',
      avatar: 'https://picsum.photos/seed/author8/100/100.jpg'
    },
    delay: 600
  },
  {
    id: 8,
    title: 'Best Practices for SCADA System Implementation',
    excerpt: 'Key considerations and best practices for successful SCADA system deployment in industrial environments.',
    category: 'Best Practices',
    date: 'January 25, 2024',
    image: 'https://picsum.photos/seed/scada/400/300.jpg',
    author: {
      name: 'Patricia Martinez',
      avatar: 'https://picsum.photos/seed/author9/100/100.jpg'
    },
    delay: 700
  },
  {
    id: 9,
    title: 'Digital Transformation in Traditional Industries',
    excerpt: 'How traditional industries are embracing digital transformation and automation to stay competitive.',
    category: 'Industry Trends',
    date: 'January 20, 2024',
    image: 'https://picsum.photos/seed/digital-transform/400/300.jpg',
    author: {
      name: 'Christopher Lee',
      avatar: 'https://picsum.photos/seed/author10/100/100.jpg'
    },
    delay: 800
  }
]

const popularTags = [
  'Automation', 'Industry 4.0', 'IoT', 'AI', 'Robotics', 'SCADA', 'PLC', 'Manufacturing',
  'Smart Factory', 'Predictive Maintenance', 'Digital Twin', 'Cybersecurity', 'Sustainability',
  'Innovation', 'Technology', 'Efficiency', 'Quality', 'Safety', 'Integration'
]

const filteredBlogs = computed(() => {
  let filtered = blogPosts
  
  if (selectedCategory.value) {
    filtered = filtered.filter(blog => blog.category === selectedCategory.value)
  }
  
  return filtered.sort((a, b) => {
    if (sortBy.value === 'date') {
      return new Date(b.date) - new Date(a.date)
    } else if (sortBy.value === 'title') {
      return a.title.localeCompare(b.title)
    } else if (sortBy.value === 'popular') {
      // Simulate popularity based on date (newer = more popular)
      return new Date(b.date) - new Date(a.date)
    }
    return 0
  })
})

const subscribeNewsletter = async () => {
  // Simulate newsletter subscription
  alert('Thank you for subscribing! You will receive our latest articles in your inbox.')
  newsletterEmail.value = ''
}

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>