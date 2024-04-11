<script setup>
import Navbar from './components/Navbar.vue'
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
                        page: 'home',
                        scTimer: 0,
                        scY: 0,
                }
        },
        components: {
                Navbar,
                Home,
                About,
                Projects,
                Contact,
                Blog
        },
        mounted() {
                window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
                handleScroll: function () {
                        if (this.scTimer) return;
                        this.scTimer = setTimeout(() => {
                                this.scY = window.scrollY;
                                clearTimeout(this.scTimer);
                                this.scTimer = 0;
                        }, 100);
                },
                toTop: function () {
                        window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                        });
                },
        },
}
</script>

<template>
        <div class="bg-fixed bg-cover width-full m-0 text-gray-100" style="background-image: url('/background.jpg')">
                <div class="min-h-[100svh]">

                        <Navbar @home="page = 'home'; toTop()" @about="page = 'about'; toTop()" @projects="page = 'projects'; toTop()"
                                @contact="page = 'contact'; toTop()" @blog="page = 'blog'; toTop()"></Navbar>

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
                                        <a href="https://bsky.app/profile/redpixl.bsky.social"
                                                class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/bluesky.svg" alt="Bluesky">
                                        </a>
                                        <a href="discord://@me/users/876474389300912188"
                                                class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/discord.svg" alt="Discord">
                                        </a>
                                        <a href="https://github.com/RED-Pixl"
                                                class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/github.svg" alt="Github">
                                        </a>
                                        <a href="https://www.instagram.com/red.pixl/"
                                                class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/instagram.svg" alt="Instagram">
                                        </a>
                                        <a href="https://www.threads.net/@red.pixl"
                                                class="me-6 [&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/threads.svg" alt="Threads">
                                        </a>
                                        <a href="https://www.youtube.com/@red-Pixl"
                                                class="[&>img]:h-6 [&>img]:w-6 transition-transform hover:scale-110">
                                                <img src="/icons/youtube.svg" alt="Youtube">
                                        </a>
                                </div>
                        </div>

                        <!--Copyright section-->
                        <div class="p-6 max-lg:pb-32 text-normal text-center">
                                <span>© 2024 Copyright: </span>
                                <a class="font-semibold" href="https://red-pixl.github.io/">Simon / RedPixl</a>
                        </div>
                </footer>
        </div>
</template>

<style scoped></style>
