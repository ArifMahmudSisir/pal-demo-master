<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-24 md:py-32"
    >
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <!-- Subtitle with animation -->
          <p
            class="text-sm md:text-base font-medium uppercase tracking-wider mb-4 text-white text-opacity-80"
            data-aos="fade-down"
          >
            Contact Us
          </p>

          <!-- Main heading with animation -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
          >
            Get In Touch
          </h1>

          <!-- Decorative line -->
          <div
            class="w-24 h-1 bg-white bg-opacity-50 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>

          <!-- Subheading with animation -->
          <p
            class="text-xl md:text-2xl text-white text-opacity-90 mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>

          <!-- CTA Button with animation -->
            <button
            @click="scrollToForm"
            class="bg-white text-prime-green px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-prime-green hover:to-deep-sea-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-prime-green focus:ring-offset-2"
            data-aos="fade-up"
            data-aos-delay="400"
            >
            Contact Us
            </button>
        </div>

        <!-- Scroll indicator -->
        <div
          class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Contact Form and Info Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="w-full">
          <!-- Contact Form -->
          <div class="w-full" data-aos="fade-right">
            <div
              class="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
            >
              <h2 class="text-3xl font-bold text-green-600 mb-6">
                Let's Connect...
              </h2>

              <!-- Success/Failure Messages -->
              <div
                v-if="formStatus.message"
                :class="[
                  'mb-6 p-4 rounded-lg text-center transition-all duration-300',
                  formStatus.success
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                ]"
              >
                {{ formStatus.message }}
              </div>

              <form @submit.prevent="submitForm">
                <!-- Honeypot Field for Spam Protection -->
                <input
                  v-model="formData.honeypot"
                  type="text"
                  name="honeypot"
                  class="hidden"
                  tabindex="-1"
                  autocomplete="off"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <!-- Full Name (Required) -->
                  <div>
                    <label
                      for="fullName"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Full Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      v-model="formData.fullName"
                      type="text"
                      required
                      maxlength="100"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green focus:border-transparent transition-all duration-300"
                      :class="{ 'border-red-500': errors.fullName }"
                      placeholder="Your name"
                    />
                    <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">
                      {{ errors.fullName }}
                    </p>
                  </div>

                  <!-- Email (Required) -->
                  <div>
                    <label
                      for="email"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green focus:border-transparent transition-all duration-300"
                      :class="{ 'border-red-500': errors.email }"
                      placeholder="Your email"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                      {{ errors.email }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <!-- Phone (Optional) -->
                  <div>
                    <label
                      for="phone"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>

                  <!-- Subject (Optional) -->
                  <div>
                    <label
                      for="subject"
                      class="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      v-model="formData.subject"
                      type="text"
                      maxlength="200"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green focus:border-transparent transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <!-- Message (Required) -->
                <div class="mb-6">
                  <label
                    for="message"
                    class="block text-gray-700 font-medium mb-2"
                  >
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    maxlength="1000"
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green focus:border-transparent transition-all duration-300 resize-none"
                    :class="{ 'border-red-500': errors.message }"
                    placeholder="Your message"
                  ></textarea>
                  <div class="flex justify-between mt-1">
                    <p v-if="errors.message" class="text-red-500 text-sm">
                      {{ errors.message }}
                    </p>
                    <p class="text-gray-500 text-sm">
                      {{ formData.message.length }}/1000
                    </p>
                  </div>
                </div>

                <!-- Data Collection Consent -->
                <div class="mb-6">
                  <label class="flex items-start">
                    <input
                      v-model="formData.agree"
                      type="checkbox"
                      class="mt-1 mr-3 w-4 h-4 text-prime-green border-gray-300 rounded focus:ring-prime-green focus:ring-2"
                    />
                    <span class="text-gray-700 text-sm">
                      I agree that my submitted data is being collected and
                      stored.
                      <router-link
                        to="/privacy-policy"
                        class="text-prime-green hover:text-deep-sea-green font-medium underline transition-colors duration-300"
                      >
                        Learn more
                      </router-link>
                    </span>
                  </label>
                  <p v-if="errors.agree" class="text-red-500 text-sm mt-1">
                    {{ errors.agree }}
                  </p>
                </div>

                <!-- reCAPTCHA -->
                <div class="mb-6">
                  <div
                    id="recaptcha-container"
                    class="g-recaptcha"
                    data-sitekey="your-recaptcha-site-key"
                  ></div>
                  <p v-if="errors.recaptcha" class="text-red-500 text-sm mt-1">
                    {{ errors.recaptcha }}
                  </p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting || !formData.agree"
                  class="w-full bg-prime-green hover:bg-deep-sea-green text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {{ isSubmitting ? "Sending..." : "Send Message" }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Location Section -->
  <section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <!-- Section Title -->
    <div class="text-center mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-green-600 mb-3">
        Our Offices
      </h2>
      <i class="text-gray-700 max-w-xl mx-auto text-sm md:text-base">
        Visit our offices for personalized consultations and live automation demonstrations.
      </i>
    </div>

    <!-- Office Cards Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      data-aos="fade-up"
    >
      <!-- Registered Office - PAL  -->
      <div
        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col h-full"
        data-aos="fade-up"
      >
        <!-- Image -->
        <div class="h-44 overflow-hidden relative">
          <img
            src="https://picsum.photos/seed/office-building1/800/600.jpg"
            alt="Office Building"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-grow text-center">
          <h3 class="text-lg md:text-xl font-bold text-green-500 mb-2">
            Registered Office
          </h3>
          
          <div class="space-y-3 mb-5 flex-grow">
            <div>
              <h4 class="font-semibold text-md text-green-600">Address</h4>
              <p class="text-gray-600 text-sm mt-1 leading-relaxed">
                Akash Plaza, Room#501<br />
                Plot#21, Road#7/D,<br />
                Dhaka Mymensingh Road, sector: 9, Uttara, Dhaka-1230
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Contact</h4>
              <p class="text-gray-600 text-sm mt-1">
                <a href="tel:+8801769093465" class="hover:text-green-600 transition-colors">
                  +880 17-6909-3465
                </a>
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Hours</h4>
              <p class="text-gray-600 text-sm mt-1">
                Mon - Fri: 9:00 AM - 6:00 PM<br />Closed on weekends
              </p>
            </div>
          </div>

          <button
            @click="scrollToForm"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg text-xs transition-all duration-300 flex items-center justify-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Visit
          </button>
        </div>
      </div>

      <!-- Corporate Office - PAL -->
      <div
        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col h-full"
        data-aos="fade-up"
      >
        <div class="h-44 overflow-hidden relative">
          <img
            src="https://picsum.photos/seed/office-building2/800/600.jpg"
            alt="Office Building"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow text-center">
          <h3 class="text-lg md:text-xl font-bold text-green-500 mb-2">
            Corporate Office
          </h3>
          
          <div class="space-y-3 mb-5 flex-grow">
            <div>
              <h4 class="font-semibold text-md text-green-600">Address</h4>
              <p class="text-gray-600 text-sm mt-1 leading-relaxed">
                Suvastu Warda (5th floor),<br />
                House #20, Road #7/D,<br />
                Shahjalal Avenue, Sector #4,<br />
                Uttara, Dhaka-1230
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Contact</h4>
              <p class="text-gray-600 text-sm mt-1">
                <a href="tel:+8801769093465" class="hover:text-green-600 transition-colors">
                  +880 1769093465
                </a>
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Hours</h4>
              <p class="text-gray-600 text-sm mt-1">
                Mon - Fri: 9:00 AM - 6:00 PM<br />Closed weekends
              </p>
            </div>
          </div>
          <button
            @click="scrollToForm"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg text-xs transition-all duration-300 flex items-center justify-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Visit
          </button>
        </div>
      </div>

      <!-- Chattagram Office -->
      <div
        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col h-full"
        data-aos="fade-up"
      >
        <div class="h-44 overflow-hidden relative">
          <img
            src="https://picsum.photos/seed/office-building3/800/600.jpg"
            alt="Office Building"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow text-center">
          <h3 class="text-lg md:text-xl font-bold text-green-500 mb-2">
            Chattagram Office
          </h3>
          
          <div class="space-y-3 mb-5 flex-grow">
            <div>
              <h4 class="font-semibold text-md text-green-600">Address</h4>
              <p class="text-gray-600 text-sm mt-1 leading-relaxed">
                Will update soon
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Contact</h4>
              <p class="text-gray-600 text-sm mt-1">
                <a href="tel:+8801822498947" class="hover:text-green-600 transition-colors">
                  +880 1822-498947
                </a>
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-md text-green-600">Hours</h4>
              <p class="text-gray-600 text-sm mt-1">
                Saturday to Thursday: 9:00 AM - 6:00 PM<br />Closed Friday
              </p>
            </div>
          </div>
          <button
            @click="scrollToForm"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg text-xs transition-all duration-300 flex items-center justify-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
    
    <!-- Social Media Links Section -->
    <div class="text-center mt-16" data-aos="fade-up">
      <h3 class="text-2xl font-bold text-green-600 mb-6">Follow Us</h3>
      <div class="flex justify-center space-x-4">
        <ul class="flex space-x-4">
          <li v-for="link in socialLinks" :key="link.name">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-12 h-12 rounded-full bg-prime-green hover:bg-deep-sea-green transition-colors duration-300"
              :aria-label="link.name"
            >
              <svg
                class="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="link.icon"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import AOS from "aos";

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Load reCAPTCHA script
  loadRecaptcha();
});

// Load reCAPTCHA script
const loadRecaptcha = () => {
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

// Form data
const formData = reactive({
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  honeypot: "", // For spam protection
  agree: false,
});

// Form errors
const errors = reactive({
  fullName: "",
  email: "",
  message: "",
  recaptcha: "",
  ageree: "",
});

// Form status
const formStatus = reactive({
  success: false,
  message: "",
});

// Submitting state
const isSubmitting = ref(false);

// Scroll to contact form
const scrollToForm = () => {
  const formElement = document.querySelector("form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Validate form
const validateForm = () => {
  // Reset errors
  errors.fullName = "";
  errors.email = "";
  errors.message = "";
  errors.recaptcha = "";
  errors.agree = "";

  // Validate full name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate message
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  // Validate data collection consent
  if (!formData.agree) {
    errors.agree = "You must agree to the data collection and storage policty";
  }

  // Validate reCAPTCHA
  const recaptchaResponse = window.grecaptcha
    ? window.grecaptcha.getResponse()
    : "";
  if (!recaptchaResponse) {
    errors.recaptcha = "Please complete the reCAPTCHA";
  }

  // Return true if no errors
  return (
    !errors.fullName &&
    !errors.email &&
    !errors.message &&
    !errors.recaptcha &&
    !errors.agree
  );
};

// Submit form
const submitForm = async () => {
  // Check honeypot (spam protection)
  if (formData.honeypot) {
    // This is likely a bot submission
    formStatus.success = false;
    formStatus.message = "Something went wrong. Please try again.";
    return;
  }

  // Validate form
  if (!validateForm()) {
    return;
  }

  // Set submitting state
  isSubmitting.value = true;

  try {
    // Get reCAPTCHA response
    const recaptchaResponse = window.grecaptcha.getResponse();

    // Simulate API call (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate successful submission
    formStatus.success = true;
    formStatus.message =
      "Thank you for your message! We will get back to you soon.";

    // Reset form
    formData.fullName = "";
    formData.email = "";
    formData.phone = "";
    formData.subject = "";
    formData.message = "";
    formData.honeypot = "";
    formData.agree = false;

    // Reset reCAPTCHA
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  } catch (error) {
    // Handle error
    formStatus.success = false;
    formStatus.message = "Failed to send message. Please try again later.";
  } finally {
    // Reset submitting state
    isSubmitting.value = false;

    // Scroll to status message
    setTimeout(() => {
      const statusElement = document.querySelector(
        '[class*="bg-green-100"], [class*="bg-red-100"]'
      );
      if (statusElement) {
        statusElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }
};

// Social Media Links & Icons
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/primeautomationsltd",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/Prime_ltd_bd",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/primeautomationsltd/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/8801769093465",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@primeutomationsltd",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];
</script>
