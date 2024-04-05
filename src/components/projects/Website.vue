<script></script>

<template>
        <div
                class="fixed m-6 p-4 rounded-full border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">

                <div class="align-center flex flex-row justify-center">
                        <button @click="$emit('back')" class="flex flex-row w-12 h-12 gap-2 rounded-full p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/src/assets/icons/back.svg" class="w-6 h-6 m-1">
                        </button>
                </div>
        </div>
        <div class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl text-center font-black flex flex-col w-max pt-40 mx-auto">
                        This Website
                </h1>
        </div>

        <div class="flex flex-row justify-center">
                <img src="/src/assets/website.png" class="w-96 h-96 m-16 justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                <div>
                        <p class="m-12 w-5/6 max-w-7xl font-normal text-4xl drop-shadow-xl">
                                Well, since you are already here, I don't need to talk much about the content and the visuals of this website.
                        </p>
                </div>
        </div>
</template>

<style scoped></style>