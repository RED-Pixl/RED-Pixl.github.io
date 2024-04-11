<script>
        export default {
                props: ['name', 'image'],
        }
</script>

<template>
        <div class="w-64 h-64 lg:w-96 lg:h-96 aspect-square justify-center overflow-visible items-center rounded-3xl bg-cover shadow-xl shadow-black/30 transition-transform hover:scale-110 border-y border-b-white/10 border-t-white/15" :style="{backgroundImage: 'url(' + image + ')'}">
                <div
                        class="relative top-[14rem] lg:top-[21rem] w-44 mx-auto p-4 rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl tracking-normal">

                        <div class="font-normal align-center flex flex-row justify-center">
                                <button @click="$emit('show')" class="flex flex-row justify-center w-26 lg:w-40 h-12 gap-2 rounded-xl p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                        <p class="my-auto">{{ this.name }}</p>
                                </button>
                        </div>
                </div>
        </div>
</template>

<style scoped></style>