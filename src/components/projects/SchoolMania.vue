<script></script>

<template>
        <div
                class="absolute m-6 p-4 rounded-full border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">

                <div class="align-center flex flex-row justify-center">
                        <button @click="$emit('back')" class="flex flex-row w-12 h-12 gap-2 rounded-full p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/src/assets/icons/back.svg" class="w-6 h-6 m-1">
                        </button>
                </div>
        </div>
        <div class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl text-center font-black flex flex-col w-max pt-40 mx-auto">
                        School Mania
                </h1>
        </div>
</template>

<style scoped></style>