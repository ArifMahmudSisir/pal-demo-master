<template>
  <div class="min-h-screen">
    <!-- Hero Section with Neural Network Background -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <!-- Neural Network Canvas Background -->
      <canvas
        ref="neuralCanvas"
        class="absolute inset-0 w-full h-full"
      ></canvas>

      <!-- Overlay for darken effect -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0"
      ></div>

      <!-- Hero Content -->
      <div
        class="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center py-20"
      >
        <!-- Badge -->
        <div class="flex justify-center mb-6 mt-2">
          <div
            class="inline-flex items-center px-2 py-2 bg-gradient-to-r from-green-300/80 via-green-500/80 to-emerald-400/80 rounded-full shadow backdrop-blur"
          >
            <span
              class="text-xs sm:text-sm font-bold text-deep-sea-green uppercase tracking-wider flex items-center"
            >
              <i class="fas fa-award mr-2"></i>Industry Leader Since 2019
            </span>
          </div>
        </div>
        <!-- Main Title -->
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
        >
          PAL: Driving profitable <br class="hidden sm:block" />
            <span class="text-green-400 font-extrabold">automation and sustainability</span>
            <span class="block mt-2 text-white">for Bangladesh's industry.</span>
        </h1>

        <!-- Supporting Text -->
        <p
          class="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Delivering cutting-edge CAD and automation solutions for RMG, textile,
          and manufacturing industries—enhancing efficiency, boosting
          productivity, driving sustainability, and ensuring long-term growth.
        </p>

        <!-- Trust Indicators -->
        <div
          class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6"
        >
          <span
            class="text-base sm:text-lg md:text-xl text-gray-200 font-medium"
            >Trusted by</span
          >
          <span
            class="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400"
            >200+</span
          >
          <span
            class="text-base sm:text-lg md:text-xl text-gray-200 font-medium"
            >clients in</span
          >
          <span class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400"
            >10+</span
          >
          <span
            class="text-base sm:text-lg md:text-xl text-gray-200 font-medium"
            >sectors</span
          >
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center cursor-pointer"
        >
          <router-link
            to="/contact"
            class="btn-primary text-base sm:text-lg w-full sm:w-auto"
          >
            Connect Expert
          </router-link>
          <router-link
            to="/products"
            class="btn-secondary text-base sm:text-lg border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto"
          >
            Explore Products
          </router-link>
        </div>
      </div>
    </section>

    <!-- Our Commitment Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4 text-green-900">Our Commitment</h2>
          <p class="text-gray-700 max-w-2xl mx-auto">We are dedicated to providing exceptional automation solutions with unwavering commitment to quality and innovation.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-green-200 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-green uppercase tracking-wider"
              >Our Commitment</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-green-600">Excellence</span
            ><span class="text-blue-600"> & Innovation</span>
            <span class="text-gray-900"> In Every Solution</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional automation solutions with unwavering
            commitment to quality and innovation
          </p>
        </div>
        <!-- Commitment Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
            v-for="commitment in commitments"
            :key="commitment.title"
            class="gradient-to-br from-green-100 via-green-200 to-emerald-100 p-6 rounded- lg shadow-xl card-hover"
            data-aos="fade-up"
            :data-aos-delay="commitment.delay"
          >
            <div
              class="w-16 h-16 bg-prime-green rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  :stroke-linecap="round"
                  :stroke-linejoin="round"
                  stroke-width="2"
                  :d="commitment.icon"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-green-900">
              {{ commitment.title }}
            </h3>
            <p class="text-gray-700">{{ commitment.description }}</p>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/about" class="btn-primary mr-4"
            >Our Story</router-link
          >
          <router-link to="/contact" class="btn-secondary"
            >Let's Talk</router-link
          >
        </div>
      </div>
    </section>

    <!-- Our Milestones Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Milestones</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Numbers that speak volumes about our journey and success.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-blue-600 uppercase tracking-wider"
              >Our Milestones</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-green-600">Achievements </span>
            <span class="text-gray-900"
              >That Define <span class="text-blue-600">Our Journey</span>
            </span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak volumes about our journey and success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(milestone, index) in milestones"
            :key="milestone.title"
            class="text-center"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div
              class="w-20 h-20 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  :stroke-linecap="round"
                  :stroke-linejoin="round"
                  stroke-width="2"
                  :d="milestone.icon"
                ></path>
              </svg>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {{ counterStore.counters[milestone.key] }}+
            </h3>
            <p class="text-gray-600">{{ milestone.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of automation solutions designed for various industries.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-purple-200 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-purple-600 uppercase tracking-wider"
              >Our Products</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-green-600">Innovative Solutions</span>
            <span class="text-gray-900"> For Your Industry</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of automation solutions designed
            for various industries.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-lg shadow-xl overflow-hidden card-hover cursor-pointer flex flex-col"
            data-aos="fade-up"
            :data-aos-delay="product.delay"
          >
          <!-- 
          Previous Approach:
          #previous: When @click push them to /product page with
          @click="$router.push('/products')"

          #current: Now each product card has its own link in the products array
          
          #Updated: Each product has different pages with flipbooks.
          -->
            <!-- Image -->
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-48 object-contain"
            />

            <!-- Card Content -->
            <div
              class="p-6 flex flex-col flex-1 bg-gradient-to-br from-green-100 via-green-200 to-green-100"
            >
              <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
              <p class="text-gray-600 mb-4 flex-1">{{ product.description }}</p>

              <!-- Button pinned at bottom -->
              <a
                :href="product.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-prime-green font-semibold hover:text-deep-sea-green transform transition-transform duration-200 ease-in-out mt-auto hover:scale-105"
              >
                Explore Product →
              </a>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/products" class="btn-primary">Discover Our Products</router-link>        
        </div>
      </div>
    </section>

    <!-- Our Collaborators Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Collaborators</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Trusted partners who believe in our vision and excellence.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-orange-200 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-orange-600 uppercase tracking-wider"
              >Our Collaborators</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-green-600">Trusted Partners</span>
            <span class="text-blue-600"> Shared Success</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations that value excellence choose to grow alongside us.
          </p>
        </div>

        <!-- Infinite Carousel -->
        <div class="overflow-hidden mb-12">
          <div
            class="flex space-x-8 cursor-pointer animate-marquee"
            @mouseenter="pauseCarousel"
            @mouseleave="resumeCarousel"
          >
            <div
              v-for="clients in [...clients, ...clients]"
              :key="clients.name"
              class="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                :src="clients.logo"
                :alt="clients.name"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Infinite Carousel -->
        <div class="overflow-hidden mb-12">
          <div
            class="flex space-x-8 cursor-pointer animate-marquee"
            @mouseenter="pauseCarousel"
            @mouseleave="resumeCarousel"
          >
            <div
              v-for="partner in [...partners, ...partners]"
              :key="partner.name"
              class="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        <!-- CEO Message -->
        <div
          class="bg-gradient-to-r from-prime-green to-deep-sea-green rounded-lg p-8 text-white"
          data-aos="fade-up"
        >
          <div
            class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <img
              src="@/assets/images/empolyee-20260203T102404Z-3-001/empolyee/Asib_Reza.JPG"
              alt="CEO KM ASIB REZA"
              class="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl font-bold mb-2">Message from Our CEO</h3>
              <p class="mb-4">
                "Throughout my 30+ years of journey, I have witnessed the remarkable 
                growth of Bangladesh's apparel sector and its evolving global market 
                presence. 
                Prime Automations Limited(PAL) is more than just a machinery to the sustained 
                success of our clients and the industry at large. We look forward to 
                continuing our journey of growth and transformations, driving the Bangladesh 
                apparel and textile sector towards a prosperous and technologically advanced 
                future."
"
              </p>
              <p class="font-semibold">- KM ASIB REZA, CEO</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/contact" class="btn-primary"
            >Join Our Trusted Partner Network</router-link
          >
        </div>
      </div>
    </section>

    <!-- Our Events Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest events and industry engagements.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-red-200 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-red-600 uppercase tracking-wider"
              >Our Events</span
            >
          </div>
          <!-- Main Tagline -->
          <h2
            class="text-4xl md:text-5xl font-bold text-gradient text-gray-900 mb-6"
          >
            <span class="text-green-600">Engaging Events</span>
            <span class="text-blue-600"> - Industry Insights</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events and industry engagements
          </p>
        </div>

        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="event in events" :key="event.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer" 
               data-aos="fade-up" 
               :data-aos-delay="event.delay"
               @click="$router.push('/events')">
            <div class="flex">
              <img :src="event.image" :alt="event.title" class="w-1/2 h-48 object-cover">
              <div class="w-1/2 p-6">
                <h3 class="text-lg font-semibold mb-2">{{ event.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ event.description }}</p>
                <button class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div> -->

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <div
    v-for="event in events"
    :key="event.id"
    class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer flex flex-col"
    data-aos="fade-up"
    :data-aos-delay="event.delay"
    @click="$router.push(event.link)"
  >
    <div class="flex flex-col md:flex-row h-80 md:h-64 lg:h-72 overflow-hidden shadow-lg rounded-lg bg-white">
      <!-- Event Image -->
      <div class="w-full md:w-2/5 h-40 md:h-full overflow-hidden bg-gray-100">
        <img
          :src="event.image"
          :alt="event.title"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <!-- Event Content -->
      <div class="w-full md:w-3/5 p-4 md:p-6 flex flex-col h-full">
        <div class="mb-3">
          <h3 class="text-base md:text-lg font-semibold text-gray-800">
            {{ event.title }}
          </h3>
        </div>

        <div class="mb-4 flex-grow">
          <p class="text-gray-600 text-sm">{{ event.description }}</p>
        </div>

        <!-- Fixed Button -->
        <div class="mt-auto">
          <a
            :href="event.link"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop
            class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm inline-flex items-center py-1"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


        <div class="text-center">
          <router-link to="/events" class="btn-primary"
            >View All Events</router-link
          >
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-blue-200 rounded-full mb-6">
            <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">Gallery</span>
          </div>
          <!-- Main Heading -->
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span class="text-green-600">Our Work</span>
            <span class="text-blue-600"> in Action</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest automation projects and success stories
          </p>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- DTG 2025 Gallery Items -->
          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="0">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC4523.JPG" alt="DTG 2025" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC2977.JPG" alt="DTG 2025 - 2" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC3075.JPG" alt="DTG 2025 - 3" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC3159.JPG" alt="DTG 2025 - 4" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC3394.JPG" alt="DTG 2025 - 5" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <img src="/src/assets/images/Gallary/Event-%20DTG%202025/_GSC3838.JPG" alt="DTG 2025 - 6" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div class="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-lg font-semibold">DTG 2025</h3>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>

    <!-- Our Blogs Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Insights, trends, and innovations in the automation industry.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-teal-600 uppercase tracking-wider"
              >Our Blogs</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-blue-600">Industry Insights</span>
            <span class="text-green-600"> - Latest Trends</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and innovations in the automation industry
          </p>
        </div>

        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="blog in blogs" :key="blog.id" 
               class="bg-gray-50 rounded-lg shadow-lg overflow-hidden card-hover" 
               data-aos="fade-up" 
               :data-aos-delay="blog.delay">
            <div class="flex">
              <img :src="blog.image" :alt="blog.title" class="w-1/2 h-48 object-cover">
              <div class="w-1/2 p-6">
                <h3 class="text-lg font-semibold mb-2">{{ blog.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ blog.description }}</p>
                <button class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div> -->

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="bg-gray-50 rounded-lg shadow-lg overflow-hidden card-hover flex flex-col"
            data-aos="fade-up"
            :data-aos-delay="blog.delay"
          >
            <div class="flex flex-1">
              <!-- Blog Image -->
              <img
                :src="blog.image"
                :alt="blog.title"
                class="w-1/2 h-48 object-cover"
              />

              <!-- Blog Content -->
              <div class="w-1/2 p-6 flex flex-col">
                <h3 class="text-lg font-semibold mb-2">{{ blog.title }}</h3>
                <p class="text-gray-600 text-sm mb-4 flex-1">
                  {{ blog.description }}
                </p>

                <!-- Button stays pinned at the bottom -->
                <button
                  class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm mt-auto"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/blogs" class="btn-primary">All Blogs</router-link>
        </div>
      </div>
    </section>

    <!-- Contact Us Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <!-- <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Get in touch with us for any inquiries or support.</p> -->
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 bg-indigo-200 rounded-full mb-6"
          >
            <span
              class="text-sm font-semibold text-indigo-600 uppercase tracking-wider"
              >Contact Us</span
            >
          </div>
          <!-- Main Tagline -->
          <h2 class="text-4xl md:text-5xl font-bold text-gradient mb-6">
            <span class="text-blue-600">We're Here</span>
            <span class="text-green-600"> To Help You</span>
          </h2>
          <!-- Supporting Line -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries or support
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div
            v-for="contact in contactInfo"
            :key="contact.title"
            class="bg-white p-6 rounded-lg shadow-lg text-center card-hover"
            data-aos="fade-up"
            :data-aos-delay="contact.delay"
          >
            <div
              class="w-16 h-16 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  :stroke-linecap="round"
                  :stroke-linejoin="round"
                  stroke-width="2"
                  :d="contact.icon"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ contact.title }}</h3>
            <p class="text-gray-600">{{ contact.info }}</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-gray-700 font-semibold mb-2"
                  >Full Name *</label
                >
                <input
                  v-model="formData.fullName"
                  type="text"
                  required
                  maxlength="100"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  :class="{ 'border-red-500': errors.fullName }"
                />
                <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">
                  {{ errors.fullName }}
                </p>
              </div>
              <div>
                <label class="block text-gray-700 font-semibold mb-2"
                  >Email Address *</label
                >
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2"
                >Subject *</label
              >
              <input
                v-model="formData.subject"
                type="text"
                required
                maxlength="200"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                :class="{ 'border-red-500': errors.subject }"
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">
                {{ errors.subject }}
              </p>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2"
                >Message *</label
              >
              <textarea
                v-model="formData.message"
                required
                maxlength="1000"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p class="text-gray-500 text-sm mt-1">
                {{ formData.message.length }}/1000 characters
              </p>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                {{ errors.message }}
              </p>
            </div>

            <div class="mb-6">
              <label class="flex items-center">
                <input
                  v-model="formData.agree"
                  type="checkbox"
                  class="mr-2 w-4 h-4 text-prime-green border-gray-300 rounded focus:ring-prime-green"
                />
                <span class="text-gray-700"
                  >I agree that submitted data is being collected and stored
                  *</span
                >
              </label>
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="!formData.agree || isSubmitting"
            >
              {{ isSubmitting ? "Sending..." : "Submit Message" }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const neuralCanvas = ref(null);
let animationId = null;

// Form data
const formData = reactive({
  fullName: "",
  email: "",
  subject: "",
  message: "",
  agree: false,
});

const errors = reactive({});
const isSubmitting = ref(false);

// Commitments data
const commitments = [
  {
    title: "Certified Quality",
    description:
      "ISO certified processes and quality management systems ensure the highest standards.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    delay: 0,
  },
  {
    title: "Expert Installation",
    description:
      "Professional installation team with years of experience in automation systems.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    delay: 100,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance services for your peace of mind.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    delay: 200,
  },
  {
    title: "Performance Optimized",
    description:
      "Systems designed for maximum efficiency and optimal performance in all conditions.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    delay: 300,
  },
  {
    title: "Safety First",
    description:
      "Comprehensive safety features and protocols to protect your workforce and assets.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    delay: 400,
  },
  {
    title: "Sustainability",
    description:
      "Eco-conscious automation for a greener, future-ready industry.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v8l6 3",
    delay: 500,
  },
];

// Milestones data
const milestones = [
  {
    title: "Years of Excellence",
    key: "years",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Happy Clients",
    key: "clients",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Trusted Partners",
    key: "partners",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Premium Products",
    key: "products",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

// Products data
const products = [
  {
    id: 1,
    title: "AUDACES",
    description:
      "Technology for fashion producttion and Industry 4.0 in apparel.",
    image: audacesLogo,
    url: "https://audaces.com/en",
    delay: 0,
  },
  {
    id: 2,
    title: "ETON SYSTEMS",
    description:
      "Flexible overhead conveyor systems to automate production logistics.",
    image: etonLogo,
    url: "http://etonsystems.com/",
    delay: 100,
    
  },
  {
    id: 3,
    title: "GBOS LASER INC.",
    description:
      "Smart laser-cutting automation for manufacturing industries.",
    image: gbosLogo,
    url: "https://www.gboslaser.com/",
    delay: 200,
  },
  {
    id: 4,
    title: "REALIST",
    description: "Precision textile textile-machinery for efficient finishing processes.",
    image: realistLogo,
    url: "https://realistmakina.com/",
    delay: 300,
  },
  {
    id: 5,
    title: "Bromak",
    description:
      "Fabric quality-control & packaging machines for textile industries.",
    image: bromakLogo,
    url: "https://bromak.com.tr/",
    delay: 400,
  },
  {
    id: 6,
    title: "OZVER",
    description: "Turkish high-precision textile finishing machinery manufacturer.",
    image: ozverLogo,
    url: "https://www.ozver.com/",
    delay: 500,
  },
  {
    id: 7,
    title: "PLUVIA",
    description:
      "Energy-efficeient continuous washing machines for textile finishing.",
    image: pluviaLogo,
    url: "https://www.pluviatr.com/Agents",
    delay: 600,
  },
  {
    id: 8,
    title: "Enta",
    description: "Sustainable water-management solutions for textile industries.",
    image: entaLogo,
    url: "https://www.enta.com.tr/",
    delay: 700,
  },
   {
    id: 9,
    title: "AENERGI SISTEMLERI",
    description:
      "AI-driven predictive maintenance solutions for industrial machinery.",
    image: aeneoiLogo,
    url: "https://www.aenerjisistemleri.com/",
    delay: 800,
  },
  {
    id: 10,
    title: "Promanage",
    description:
      "Comprehensive ERP solutions tailored for textile and apparel industries.",
    image: promanageLogo,
    url: "https://promanage.com/",
    delay: 900,
  },
 
];

//clients data
import abagroupLogo from "@/assets/images/clients/aba-group-logo.png";
import ccklLogo from "@/assets/images/clients/cckl-logo.png";
import chorkaLogo from "@/assets/images/clients/chorka-textile-logo.png";
import epyllionLogo from "@/assets/images/clients/epyllion-logo.png";
import gmsLogo from "@/assets/images/clients/gms-logo.png";
import impressLogo from "@/assets/images/clients/impress-logo.png";
import libasLogo from "@/assets/images/clients/libas-logo.png";
import lidaLogo from "@/assets/images/clients/lida-logo.png";
import lizLogo from "@/assets/images/clients/liz-logo.png";
import newtexLogo from "@/assets/images/clients/newtex-logo.png";
import palmalLogo from "@/assets/images/clients/palmal-logo.png";
import smuctLogo from "@/assets/images/clients/smuct-logo.gif";




// Partners data
import aeneoiLogo from "@/assets/images/partners/aeneoi-logo.png";
import audacesLogo from "@/assets/images/partners/audaces-logo.png";
import mplusLogo from "@/assets/images/partners/mplus-logo.png";
import bromakLogo from "@/assets/images/partners/bromak-logo.png";
import entaLogo from "@/assets/images/partners/enta-logo.png";
import etonLogo from "@/assets/images/partners/eton-logo.png";
import ozverLogo from "@/assets/images/partners/ozver-logo.png";
import pluviaLogo from "@/assets/images/partners/pluvia-logo.png";
import promanageLogo from "@/assets/images/partners/promanage-logo.png";
import realistLogo from "@/assets/images/partners/realist-logo.png";
import gbosLogo from "@/assets/images/partners/gbos-logo.png";

// Clients data array
const clients = [
  { name: "ABA Group", logo: abagroupLogo },
  { name: "CCKL", logo: ccklLogo },
  { name: "Chorka Textile", logo: chorkaLogo },
  { name: "Epyllion", logo: epyllionLogo },
  { name: "GMS", logo: gmsLogo },
  { name: "Impress", logo: impressLogo },
  { name: "Libas", logo: libasLogo },
  { name: "Lida", logo: lidaLogo },
  { name: "Liz", logo: lizLogo },
  { name: "NewTex", logo: newtexLogo },
  { name: "PalMal", logo: palmalLogo },
  { name: "SMUCT", logo: smuctLogo },
];

const partners = [
  { name: "Aeneoi", logo: aeneoiLogo },
  { name: "Audaces", logo: audacesLogo },
  // { name: "Beneks", logo: beneksLogo },
  { name: "M+", logo: mplusLogo },
  { name: "Bromak", logo: bromakLogo },
  { name: "Enta", logo: entaLogo },
  { name: "Eton", logo: etonLogo },
  { name: "Ozver", logo: ozverLogo },
  { name: "Pluvia", logo: pluviaLogo },
  { name: "Promanage", logo: promanageLogo },
  { name: "Realist", logo: realistLogo },
  { name: "GBOS", logo: gbosLogo },
];

// Events data
const events = [
  {
    id: 1,
    title: "DTG - The 19th Dhaka Int'l Textile & Garments Machinery Exhibition",
    description:
      "Join Prime Automations to redefine efficiency at DTG 2025 Expo...",
    image: "/images/events/dhaka-intl-manf-expo-25.webp",
    delay: 0,
    link: "https://dtg.chanchao.com.tw/News/Detail/4955"
  },
  {
    id: 2,
    title: "DTG - The 18th Dhaka Int'l Textile & Garments Machinery Exhibition",
    description: "Experience innovation and automation excellence with Prime Automations Ltd...",
    image: "/images/events/dhaka-intl-manf-expo-24.webp",
    delay: 100,
    link: "https://www.facebook.com/events/256212867497609",
  },
  {
    id: 3,
    title: "Prime Automations | Realist Washing Machineries at Denim Expo",
    description: "Prime Automations presents eco-friendly denim washing at Expo 2023....",
    image: "/images/events/denim-expo-23.webp",
    delay: 200,
    link: "https://www.facebook.com/events/304086549056088",
  },
];

// Blogs data
const blogs = [
  {
    id: 1,
    title: "Future of Automation",
    description: "Exploring the latest trends in industrial automation.",
    image: "https://picsum.photos/seed/blog1/300/200.jpg",
    delay: 0,
  },
  {
    id: 2,
    title: "AI in Manufacturing",
    description: "How artificial intelligence is transforming manufacturing.",
    image: "https://picsum.photos/seed/blog2/300/200.jpg",
    delay: 100,
  },
  {
    id: 3,
    title: "Sustainable Automation",
    description: "Green solutions for industrial automation.",
    image: "https://picsum.photos/seed/blog3/300/200.jpg",
    delay: 200,
  },
];

// Contact info
const contactInfo = [
  {
    title: "Our Location",
    info: "123 Automation Street, Tech City, TC 12345",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    delay: 0,
  },
  {
    title: "Phone Number",
    info: "+1 (234) 567-890",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    delay: 100,
  },
  {
    title: "Email Address",
    info: "info@primeautomations.com",
    icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    delay: 200,
  },
];

// Enhanced Neural Network Animation with triangular mesh formations
class NeuralNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.nodes = [];
    this.connections = [];
    this.triangles = []; // New: Store triangular connections
    this.mouseX = 0;
    this.mouseY = 0;
    this.animationTime = 0; // New: For pulsing animations
    this.init();
  }

  init() {
    this.resize();
    this.createNodes();
    this.createConnections();
    this.createTriangles(); // New: Create triangular formations
    this.animate();

    window.addEventListener("resize", () => this.resize());
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createNodes() {
    // Increased node density for a richer network
    const nodeCount = Math.floor(
      (this.canvas.width * this.canvas.height) / 8000
    );
    
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.7, // Slightly faster movement
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5, // Slightly larger nodes
        pulsePhase: Math.random() * Math.PI * 2, // For pulsing effect
      });
    }
  }

  createConnections() {
    // Create connections between nearby nodes
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Increased connection distance for more connections
        if (distance < 200) {
          this.connections.push({
            node1: this.nodes[i],
            node2: this.nodes[j],
            maxDistance: 200, // Store max distance for animation
          });
        }
      }
    }
  }

  // New method to create triangular formations
  createTriangles() {
    // Find nodes that can form triangles
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx1 = this.nodes[i].x - this.nodes[j].x;
        const dy1 = this.nodes[i].y - this.nodes[j].y;
        const distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
        
        if (distance1 < 180) {
          for (let k = j + 1; k < this.nodes.length; k++) {
            const dx2 = this.nodes[i].x - this.nodes[k].x;
            const dy2 = this.nodes[i].y - this.nodes[k].y;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            const dx3 = this.nodes[j].x - this.nodes[k].x;
            const dy3 = this.nodes[j].y - this.nodes[k].y;
            const distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
            
            // If all three nodes are close enough, form a triangle
            if (distance2 < 180 && distance3 < 180) {
              this.triangles.push({
                node1: this.nodes[i],
                node2: this.nodes[j],
                node3: this.nodes[k],
                maxDistance: 180,
              });
            }
          }
        }
      }
    }
  }

  animate() {
    // Clear canvas with a dark turquoise background
    this.ctx.fillStyle = "#0d3b47";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Increment animation time for effects
    this.animationTime += 0.01;

    // Update nodes
    this.nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
      
      // Update pulse phase
      node.pulsePhase += 0.02;
    });

    // Draw triangular connections first (background layer)
    this.triangles.forEach((triangle) => {
      const dx1 = triangle.node1.x - triangle.node2.x;
      const dy1 = triangle.node1.y - triangle.node2.y;
      const distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      
      const dx2 = triangle.node2.x - triangle.node3.x;
      const dy2 = triangle.node2.y - triangle.node3.y;
      const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      
      const dx3 = triangle.node3.x - triangle.node1.x;
      const dy3 = triangle.node3.y - triangle.node1.y;
      const distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
      
      // Only draw if all sides are within max distance
      if (distance1 < triangle.maxDistance && 
          distance2 < triangle.maxDistance && 
          distance3 < triangle.maxDistance) {
        
        // Calculate average distance for opacity
        const avgDistance = (distance1 + distance2 + distance3) / 3;
        const opacity = Math.max(0, 1 - avgDistance / triangle.maxDistance);
        
        // Pulsing effect
        const pulse = (Math.sin(this.animationTime * 2) + 1) / 2;
        
        // Draw semi-transparent triangle
        this.ctx.fillStyle = `rgba(16, 185, 129, ${opacity * 0.1 * pulse})`;
        this.ctx.beginPath();
        this.ctx.moveTo(triangle.node1.x, triangle.node1.y);
        this.ctx.lineTo(triangle.node2.x, triangle.node2.y);
        this.ctx.lineTo(triangle.node3.x, triangle.node3.y);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Draw triangle edges
        this.ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.3 * pulse})`;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(triangle.node1.x, triangle.node1.y);
        this.ctx.lineTo(triangle.node2.x, triangle.node2.y);
        this.ctx.lineTo(triangle.node3.x, triangle.node3.y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
    });

    // Draw connections
    this.connections.forEach((connection) => {
      const dx = connection.node1.x - connection.node2.x;
      const dy = connection.node1.y - connection.node2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connection.maxDistance) {
        // Calculate opacity based on distance
        const opacity = 1 - distance / connection.maxDistance;
        
        // Pulsing effect for connections
        const pulse = (Math.sin(this.animationTime * 3 + distance * 0.01) + 1) / 2;
        
        // Draw connection with gradient
        const gradient = this.ctx.createLinearGradient(
          connection.node1.x, connection.node1.y,
          connection.node2.x, connection.node2.y
        );
        gradient.addColorStop(0, `rgba(16, 185, 129, ${opacity * 0.7 * pulse})`);
        gradient.addColorStop(1, `rgba(52, 211, 153, ${opacity * 0.3 * pulse})`);
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(connection.node1.x, connection.node1.y);
        this.ctx.lineTo(connection.node2.x, connection.node2.y);
        this.ctx.stroke();
        
        // Add glow effect to connections
        this.ctx.strokeStyle = `rgba(134, 239, 172, ${opacity * 0.2 * pulse})`;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(connection.node1.x, connection.node1.y);
        this.ctx.lineTo(connection.node2.x, connection.node2.y);
        this.ctx.stroke();
      }
    });

    // Draw nodes on top
    this.nodes.forEach((node) => {
      const mouseDistance = Math.sqrt(
        Math.pow(node.x - this.mouseX, 2) + Math.pow(node.y - this.mouseY, 2)
      );

      // Mouse interaction effect
      const scale = mouseDistance < 150 ? 1 + (150 - mouseDistance) / 150 : 1;
      
      // Pulsing effect for nodes
      const pulse = (Math.sin(node.pulsePhase) + 1) / 2;
      const pulseSize = 0.8 + pulse * 0.4;

      // Draw node glow
      this.ctx.fillStyle = `rgba(16, 185, 129, ${0.2 * pulse})`;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * scale * pulseSize * 4, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw node
      this.ctx.fillStyle = "#10b981";
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * scale * pulseSize, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw inner highlight
      this.ctx.fillStyle = "#d1fae5";
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * scale * pulseSize * 0.3, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
} // Neural Canvas Class Ends
// Carousel control
let carouselPaused = false;

const pauseCarousel = () => {
  carouselPaused = true;
  document.querySelector(".animate-marquee").style.animationPlayState =
    "paused";
};

const resumeCarousel = () => {
  carouselPaused = false;
  document.querySelector(".animate-marquee").style.animationPlayState =
    "running";
};

// Form validation and submission
const validateForm = () => {
  errors.fullName =
    formData.fullName.trim().length < 2
      ? "Name must be at least 2 characters"
      : "";
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ? "Please enter a valid email address"
    : "";
  errors.subject =
    formData.subject.trim().length < 5
      ? "Subject must be at least 5 characters"
      : "";
  errors.message =
    formData.message.trim().length < 10
      ? "Message must be at least 10 characters"
      : "";

  return (
    !errors.fullName && !errors.email && !errors.subject && !errors.message
  );
};

const submitForm = async () => {
  if (!validateForm() || !formData.agree) return;

  isSubmitting.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  alert("Thank you for your message! We will get back to you soon.");

  // Reset form
  Object.keys(formData).forEach((key) => {
    formData[key] = key === "agree" ? false : "";
  });

  isSubmitting.value = false;
};

onMounted(() => {
  // Initialize neural network
  if (neuralCanvas.value) {
    new NeuralNetwork(neuralCanvas.value);
  }

  // Start counters when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counterStore.startCounters();
        observer.unobserve(entry.target);
      }
    });
  });

  const milestonesSection = document.querySelector(
    ".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4"
  );
  if (milestonesSection) {
    observer.observe(milestonesSection);
  }
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.6s both;
}
</style>
