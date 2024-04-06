<script setup>
        import Home from './components/Home.vue'
        import About from './components/About.vue'
        import Projects from './components/Projects.vue'
        import Contact from './components/Contact.vue'
        import Blog from './components/Blog.vue'
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
                Contact,
                Blog
        }
}
</script>

<template>
        <div class="bg-fixed bg-cover min-h-screen width-full m-0 text-gray-100"
                style="background-image: url('/src/assets/background.jpg')">
                <div class="min-h-screen">
                        <div
                                class="fixed my-6 p-4 left-[50%] translate-x-[-50%] rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110 z-50">
                                <div class="font-normal align-center flex flex-row justify-center">
                                        <button @click="page = 'home'"
                                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                                <img src="/src/assets/icons/home.svg" class="w-6 h-6 my-auto"
                                                        v-if="page === 'home'">
                                                <p class="my-auto">Home</p>
                                        </button>
                                        <button @click="page = 'about'"
                                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                                <img src="/src/assets/icons/about.svg" class="w-6 h-6 my-auto"
                                                        v-if="page === 'about'">
                                                <p class="my-auto">About</p>
                                        </button>
                                        <button @click="page = 'projects'"
                                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                                <img src="/src/assets/icons/projects.svg" class="w-6 h-6 my-auto"
                                                        v-if="page === 'projects'">
                                                <p class="my-auto">Projects</p>
                                        </button>
                                        <button @click="page = 'contact'"
                                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                                <img src="/src/assets/icons/contact.svg" class="w-6 h-6 my-auto"
                                                        v-if="page === 'contact'">
                                                <p class="my-auto">Contact</p>
                                        </button>
                                        <button @click="page = 'blog'"
                                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                                <img src="/src/assets/icons/blog.svg" class="w-6 h-6 my-auto"
                                                        v-if="page === 'blog'">
                                                <p class="my-auto">Blog</p>
                                        </button>
                                </div>
                        </div>

                        <Home v-if="page === 'home'" />

                        <About v-if="page === 'about'" />

                        <Projects v-if="page === 'projects'" />

                        <Contact v-if="page === 'contact'" />

                        <Blog v-if="page === 'blog'" />

                </div>

                <footer class="bg-neutral-950 text-center text-gray-100 text-normal mt-24">
                        <div class="flex items-center justify-center p-6 lg:justify-between max-w-6xl mx-auto">
                                <div class="me-12 hidden lg:block">
                                        <span>Get connected with me on social networks:</span>
                                </div>
                                <div class="flex justify-center">
                                        <a href="https://bsky.app/profile/redpixl.bsky.social" class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/bluesky.svg" alt="Bluesky">
                                        </a>
                                        <a href="discord://@me/users/876474389300912188" class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/discord.svg" alt="Discord">
                                        </a>
                                        <a href="https://github.com/RED-Pixl" class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/github.svg" alt="Github">
                                        </a>
                                        <a href="https://www.instagram.com/red.pixl/" class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/instagram.svg" alt="Instagram">
                                        </a>
                                        <a href="https://www.threads.net/@red.pixl" class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/threads.svg" alt="Threads">
                                        </a>
                                        <a href="https://www.youtube.com/@red-Pixl" class="[&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/src/assets/icons/youtube.svg" alt="Youtube">
                                        </a>
                                </div>
                        </div>

                        <!--Copyright section-->
                        <div class="p-6 text-normal text-center">
                                <span>© 2024 Copyright: </span>
                                <a class="font-semibold" href="https://red-pixl.github.io/">Simon / RedPixl</a>
                        </div>
                </footer>
        </div>
</template>

<style scoped></style>
