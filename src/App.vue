<script>
        export default {
                data() {
                        return {
                                page: 'home'
                        }
                }
        }
</script>

<template>
        <div class="bg-fixed bg-cover min-h-screen width-full m-0 h-96 text-gray-100"
                style="background-image: url('/src/assets/background.png')">
                <div
                        class="fixed my-6 p-4 left-[50%] translate-x-[-50%] max-xl:bottom-2 rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl">
                        <div class="max-xl:hidden xl:visible align-center flex flex-row justify-center">
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
                                <button class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <p class="my-auto">Bluesky</p>
                                </button>
                                <button class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <p class="my-auto">Youtube</p>
                                </button>
                                <button class="flex flex-row justify-center w-32 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <p class="my-auto">Threads</p>
                                </button>
                        </div>
                </div>
        </div>
</template>

<style scoped></style>
