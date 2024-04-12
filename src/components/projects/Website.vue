<script></script>

<template>
        <div
                class="fixed m-6 p-4 rounded-full border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110 z-50">

                <div class="align-center flex flex-row justify-center">
                        <button @click="$emit('back')"
                                class="flex flex-row w-12 h-12 gap-2 rounded-full p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/icons/back.svg" class="w-6 h-6 m-1">
                        </button>
                </div>
        </div>
        <div class="font-heading font-black tracking-semitightest items-center align-center">
                <h1 class="text-3xl lg:text-5xl text-center font-black flex flex-col w-max pt-40 mx-auto">
                        This Website
                </h1>
        </div>

        <div class="2xl:flex 2xl:flex-row justify-center my-12 lg:m-12">
                <img src="/website.png"
                        class="w-2/3 h-2/3 lg:w-96 lg:h-96 mx-auto 2xl:m-16 justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                <div class="my-auto">
                        <p
                                class="m-12 w-5/6 max-w-5xl font-normal max-2xl:text-center max-2xl:mx-auto text-2xl lg:text-4xl drop-shadow-xl">
                                This site is built with Vue.js, a popular JavaScript framework I picked up along my
                                coding journey. While Vue wasn't the only option, it provided a familiar starting point
                                to bring this website to life. Tailwind CSS handles the styling, offering a
                                utility-based approach that keeps the code clean and efficient.
                        </p>
                </div>
        </div>
</template>

<style scoped></style>