<script>
export default {
        data() {
                return {
                        page: 'home'
                }
        },
}</script>

<template>
        <div
                class="hidden lg:block fixed p-4 left-[50%] top-6 translate-x-[-50%] rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110 z-50">
                <div class="font-normal align-center flex flex-row justify-center">
                        <button @click="page = 'home'; $emit('home')"
                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/home.svg" class="w-6 h-6 my-auto" v-if="page === 'home'">
                                <p class="my-auto">Home</p>
                        </button>
                        <button @click="page = 'about'; $emit('about')"
                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/about.svg" class="w-6 h-6 my-auto" v-if="page === 'about'">
                                <p class="my-auto">About</p>
                        </button>
                        <button @click="page = 'projects'; $emit('projects')"
                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/projects.svg" class="w-6 h-6 my-auto" v-if="page === 'projects'">
                                <p class="my-auto">Projects</p>
                        </button>
                        <button @click="page = 'contact'; $emit('contact')"
                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/contact.svg" class="w-6 h-6 my-auto" v-if="page === 'contact'">
                                <p class="my-auto">Contact</p>
                        </button>
                        <button @click="page = 'blog'; $emit('blog')"
                                class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/blog.svg" class="w-6 h-6 my-auto" v-if="page === 'blog'">
                                <p class="my-auto">Blog</p>
                        </button>
                </div>
        </div>

        <div class="lg:hidden fixed p-4 left-[50%] bottom-6 translate-x-[-50%] rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110 z-50">
                <div class="font-normal align-center flex flex-row justify-center">
                        <button @click="page = 'home'; $emit('home')"
                                class="flex flex-row justify-center w-12 h-12 gap-2 rounded-xl mr-1 transition hover:bg-white/5 active:scale-95 active:bg-white/10"
                                v-bind:class="{'bg-white/5': page === 'home'}">
                                <img src="/icons/home.svg" class="w-6 h-6 my-auto">
                        </button>
                        <button @click="page = 'about'; $emit('about')"
                                class="flex flex-row justify-center w-12 h-12 gap-2 rounded-xl mx-1 transition hover:bg-white/5 active:scale-95 active:bg-white/10"
                                v-bind:class="{'bg-white/5': page === 'about'}">
                                <img src="/icons/about.svg" class="w-6 h-6 my-auto">
                        </button>
                        <button @click="page = 'projects'; $emit('projects')"
                                class="flex flex-row justify-center w-12 h-12 gap-2 rounded-xl mx-1 transition hover:bg-white/5 active:scale-95 active:bg-white/10"
                                v-bind:class="{'bg-white/5': page === 'projects'}">
                                <img src="/icons/projects.svg" class="w-6 h-6 my-auto">
                        </button>
                        <button @click="page = 'contact'; $emit('contact')"
                                class="flex flex-row justify-center w-12 h-12 gap-2 rounded-xl mx-1 transition hover:bg-white/5 active:scale-95 active:bg-white/10"
                                v-bind:class="{'bg-white/5': page === 'contact'}">
                                <img src="/icons/contact.svg" class="w-6 h-6 my-auto">
                        </button>
                        <button @click="page = 'blog'; $emit('blog')"
                                class="flex flex-row justify-center w-12 h-12 gap-2 rounded-xl ml-1 transition hover:bg-white/5 active:scale-95 active:bg-white/10"
                                v-bind:class="{'bg-white/5': page === 'blog'}">
                                <img src="/icons/blog.svg" class="w-6 h-6 my-auto">
                        </button>
                </div>
        </div>
</template>

<style scoped></style>