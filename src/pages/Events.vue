<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p class="text-xl opacity-90">Stay Connected with Industry Events and Conferences</p>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Join us at these exciting events to learn about the latest in automation technology.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in upcomingEvents" :key="event.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
               data-aos="fade-up"
               :data-aos-delay="event.delay">
            <div class="relative">
              <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-prime-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ event.date }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 mb-4">{{ event.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ event.location }}
                </div>
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {{ event.time }}
                </div>
              </div>
              <button class="btn-primary w-full">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Explore our successful events and conferences from previous years.</p>
        </div>
        
        <div class="space-y-8">
          <div v-for="event in pastEvents" :key="event.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden"
               data-aos="fade-up"
               :data-aos-delay="event.delay">
            <div class="flex flex-col md:flex-row">
              <img :src="event.image" :alt="event.title" class="w-full md:w-1/3 h-64 object-cover">
              <div class="w-full md:w-2/3 p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-2xl font-semibold">{{ event.title }}</h3>
                  <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {{ event.date }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4">{{ event.description }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div class="flex items-center text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ event.location }}
                  </div>
                  <div class="flex items-center text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    {{ event.attendees }} attendees
                  </div>
                  <div class="flex items-center text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    {{ event.sessions }} sessions
                  </div>
                </div>
                <div class="flex space-x-4">
                  <button class="btn-primary">View Gallery</button>
                  <button class="btn-secondary">Download Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Calendar -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Event Calendar</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Plan your schedule with our comprehensive event calendar.</p>
        </div>
        
        <div class="bg-gray-50 rounded-lg p-8" data-aos="fade-up">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="month in eventCalendar" :key="month.name">
              <h3 class="text-xl font-semibold mb-4 text-center">{{ month.name }}</h3>
              <div class="space-y-2">
                <div v-for="event in month.events" :key="event.date" 
                     class="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-lg font-semibold">{{ event.title }}</h4>
                      <p class="text-gray-500 text-xs">{{ event.date }}</p>
                    </div>
                    <div class="w-2 h-2 bg-prime-green rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CEO Message -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto" data-aos="fade-up">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/3 flex justify-center">
              <div class="relative">
                <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="@/assets/images/empolyee-20260203T102404Z-3-001/empolyee/Asib_Reza.JPG" alt="CEO KM ASIB REZA" class="w-full h-full object-cover">
                </div>
              </div>
            </div>
            <div class="md:w-2/3">
              <h3 class="text-3xl font-bold mb-4">Message from Our CEO</h3>
              <p class="text-lg opacity-95 mb-6 italic">
                "Throughout my 30+ years of journey, Limited(PAL) is more than just a machine manufacturing company. It represents our commitment to driving transformations, pushing boundaries, and delivering solutions that matter. We believe in innovation, excellence, and creating lasting partnerships."
              </p>
              <p class="text-xl font-semibold">- KM ASIB REZA, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Registration -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-8" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Event Registration</h2>
            <p class="text-gray-600">Register for our upcoming events and stay updated with the latest in automation.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <form @submit.prevent="submitRegistration">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    v-model="registrationForm.fullName" 
                    type="text" 
                    required 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input 
                    v-model="registrationForm.email" 
                    type="email" 
                    required 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Company *</label>
                  <input 
                    v-model="registrationForm.company" 
                    type="text" 
                    required 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    v-model="registrationForm.phone" 
                    type="tel" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
                </div>
              </div>
              
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">Select Event *</label>
                <select 
                  v-model="registrationForm.event" 
                  required 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                >
                  <option value="">Choose an event</option>
                  <option v-for="event in upcomingEvents" :key="event.id" :value="event.id">
                    {{ event.title }} - {{ event.date }}
                  </option>
                </select>
              </div>
              
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">Special Requirements</label>
                <textarea 
                  v-model="registrationForm.requirements" 
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                ></textarea>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                Register for Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Host Your Event With Us</h2>
        <p class="text-xl mb-8 opacity-90">Partner with us to organize industry-leading events and conferences.</p>
        <router-link to="/contact" class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Contact Event Team
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const registrationForm = reactive({
  fullName: '',
  email: '',
  company: '',
  phone: '',
  event: '',
  requirements: ''
})

const upcomingEvents = [
  {
    id: 1,
    title: 'Automation Expo 2024',
    description: 'The biggest automation exhibition featuring the latest technologies and innovations.',
    date: 'Mar 15, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Convention Center, Tech City',
    image: 'https://picsum.photos/seed/expo2024/400/300.jpg',
    delay: 0
  },
  {
    id: 2,
    title: 'Industrial AI Conference',
    description: 'Exploring the intersection of artificial intelligence and industrial automation.',
    date: 'Apr 22, 2024',
    time: '10:00 AM - 5:00 PM',
    location: 'Tech Hub, Innovation District',
    image: 'https://picsum.photos/seed/aiconf/400/300.jpg',
    delay: 100
  },
  {
    id: 3,
    title: 'Smart Manufacturing Workshop',
    description: 'Hands-on workshop on implementing smart manufacturing solutions.',
    date: 'May 10, 2024',
    time: '8:00 AM - 4:00 PM',
    location: 'Training Center, Industrial Park',
    image: 'https://picsum.photos/seed/workshop/400/300.jpg',
    delay: 200
  },
  {
    id: 4,
    title: 'Robotics & Automation Summit',
    description: 'Annual summit bringing together industry leaders and innovators.',
    date: 'Jun 5, 2024',
    time: '9:00 AM - 7:00 PM',
    location: 'Grand Hotel, Business District',
    image: 'https://picsum.photos/seed/summit/400/300.jpg',
    delay: 300
  },
  {
    id: 5,
    title: 'IoT in Industry Forum',
    description: 'Discussing the impact of Internet of Things on industrial processes.',
    date: 'Jul 18, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Conference Center, Downtown',
    image: 'https://picsum.photos/seed/iotforum/400/300.jpg',
    delay: 400
  },
  {
    id: 6,
    title: 'Automation Safety Seminar',
    description: 'Comprehensive seminar on safety standards and best practices.',
    date: 'Aug 30, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Safety Institute, Tech Park',
    image: 'https://picsum.photos/seed/safety/400/300.jpg',
    delay: 500
  }
]

const pastEvents = [
  {
    id: 1,
    title: 'Automation Expo 2023',
    description: 'Our flagship event that attracted over 5000 attendees and 200 exhibitors from around the world.',
    date: 'Nov 2023',
    location: 'Convention Center, Tech City',
    attendees: '5000+',
    sessions: '50+',
    image: 'https://picsum.photos/seed/expo2023/600/400.jpg',
    delay: 0
  },
  {
    id: 2,
    title: 'Tech Innovation Summit 2023',
    description: 'A gathering of industry leaders discussing the future of automation and technology.',
    date: 'Sep 2023',
    location: 'Tech Hub, Innovation District',
    attendees: '1200+',
    sessions: '30+',
    image: 'https://picsum.photos/seed/summit2023/600/400.jpg',
    delay: 100
  },
  {
    id: 3,
    title: 'Industrial Robotics Workshop',
    description: 'Hands-on training session for professionals in the robotics and automation field.',
    date: 'Jul 2023',
    location: 'Training Center, Industrial Park',
    attendees: '150+',
    sessions: '12+',
    image: 'https://picsum.photos/seed/robotics2023/600/400.jpg',
    delay: 200
  }
]

const eventCalendar = [
  {
    name: 'March 2024',
    events: [
      { title: 'Automation Expo 2024', date: 'Mar 15' },
      { title: 'Product Launch Event', date: 'Mar 20' },
      { title: 'Training Session', date: 'Mar 25' }
    ]
  },
  {
    name: 'April 2024',
    events: [
      { title: 'Industrial AI Conference', date: 'Apr 22' },
      { title: 'Partner Meeting', date: 'Apr 28' }
    ]
  },
  {
    name: 'May 2024',
    events: [
      { title: 'Smart Manufacturing Workshop', date: 'May 10' },
      { title: 'Tech Talk Series', date: 'May 15' },
      { title: 'Customer Appreciation Event', date: 'May 20' }
    ]
  }
]

const submitRegistration = async () => {
  // Simulate form submission
  alert('Thank you for registering! We will send you confirmation details shortly.')
  
  // Reset form
  Object.keys(registrationForm).forEach(key => {
    registrationForm[key] = ''
  })
}

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>