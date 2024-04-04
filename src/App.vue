<script setup>
        import Home from './components/Home.vue'
        import About from './components/About.vue'
        import Projects from './components/Projects.vue'
        import Contact from './components/Contact.vue'
</script>

<script>
        export default {
                data() {
                        return {
                                page: 'home'
                        }
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
        <div class="bg-fixed bg-cover min-h-screen width-full m-0 text-gray-100"
                style="background-image: url('/src/assets/background.png')">
                <div
                        class="fixed my-6 p-4 left-[50%] translate-x-[-50%] max-xl:bottom-2 rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">
                        <div class="font-normal align-center flex flex-row justify-center">
                                <button @click="page = 'home'" class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <img src="/src/assets/icons/home.svg" class="w-6 h-6 my-auto" v-if="page === 'home'">
                                        <p class="my-auto">Home</p>
                                </button>
                                <button @click="page = 'about'" class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <img src="/src/assets/icons/about.svg" class="w-6 h-6 my-auto" v-if="page === 'about'">
                                        <p class="my-auto">About</p>
                                </button>
                                <button @click="page = 'projects'" class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <img src="/src/assets/icons/projects.svg" class="w-6 h-6 my-auto" v-if="page === 'projects'">
                                        <p class="my-auto">Projects</p>
                                </button>
                                <button @click="page = 'contact'" class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <img src="/src/assets/icons/contact.svg" class="w-6 h-6 my-auto" v-if="page === 'contact'">
                                        <p class="my-auto">Contact</p>
                                </button>
                                <a class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10" href="https://bsky.app/profile/redpixl.bsky.social">
                                        <p class="my-auto">Bluesky</p>
                                </a>
                                <a class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10" href="https://www.youtube.com/@red-Pixl">
                                        <p class="my-auto">Youtube</p>
                                </a>
                        </div>
                </div>

                <Home v-if="page === 'home'"/>

                <About v-if="page === 'about'"/>

                <Projects v-if="page === 'projects'"/>

                <Contact v-if="page === 'contact'"/>
        </div>
</template>

<style scoped></style>
