<script>
        export default {
                props: ['name', 'image'],
        }
</script>

<template>
        <div class="w-64 h-64 justify-center items-center rounded-xl bg-cover shadow-xl shadow-black/30 transition-transform hover:scale-110" :style="{backgroundImage: 'url(' + image + ')'}">
                <div
                        class="relative top-52 mx-8 p-4 rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl">

                        <div class="font-normal align-center flex flex-row justify-center">
                                <button @click="$emit('show')" class="flex flex-row justify-center w-40 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <p class="my-auto">{{ this.name }}</p>
                                </button>
                        </div>
                </div>
        </div>
</template>

<style scoped></style>