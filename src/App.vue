<script setup>
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';
</script>

<script>
export default {
      data() {
            return {
                  page: 'home',
            }
      },
      methods: {
            toTop: function () {
                  console.log("called")
            },
      },
      components: {
            Home,
            About,
            Projects,
            Contact
      }
}
</script>

<template>
      <div class="md:flex md:flex-row">
            <img class="w-[40%] max-md:max-w-[15rem] mx-auto my-4 md:w-32 md:m-8 rounded-full shadow-xl" src="/logo.png" alt=""></img>
            <h1 class="text-center w-full my-4 md:my-0 md:mx-0 md:text-left text-6xl font-semibold montserrat-superbold md:mt-16">RedPixl</h1>
            <div class="max-md:justify-center max-md:mb-[4vh] flex flex-row-reverse w-full m-18 mr-6 2xl:mr-12">
                  <img class="w-1/12 md:w-12 m-[1.5vw] 2xl:m-6 md:m-3 transition-all hover:scale-125"
                        src="/icons/contact.svg" alt="" @click="page = 'contact'">
                  <img class="w-1/12 md:w-12 m-[1.5vw] 2xl:m-6 md:m-3 transition-all hover:scale-125"
                        src="/icons/blog.svg" alt="" @click="page = 'projects'">
                  <img class="w-1/12 md:w-12 m-[1.5vw] 2xl:m-6 md:m-3 transition-all hover:scale-125"
                        src="/icons/about.svg" alt="" @click="page = 'about'">
                  <img class="w-1/12 md:w-12 m-[1.5vw] 2xl:m-6 md:m-3 transition-all hover:scale-125"
                        src="/icons/home.svg" alt="" @click="page = 'home'">
            </div>
      </div>

      <Home v-if="page === 'home'"></Home>
      
      <About v-if="page === 'about'"></About>

      <Projects v-if="page === 'projects'"></Projects>

      <Contact v-if="page === 'contact'"></Contact>
</template>

<style scoped></style>
