<script setup>
import Test from './blog/Test.vue'
</script>

<script>
export default {
        data() {
                return {
                        posts: [
                                ["logo", "Test", "Monday, 1st of January, 0000", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
                        ],
                        subpage: "main",
                        scTimer: 0,
                        scY: 0,
                }
        },
        components: {
                Test
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
        <div v-if="subpage === 'main'">
                <div class="font-heading font-black tracking-tightest items-center align-center">
                        <h1 class="text-5xl md:text-7xl text-center font-black flex flex-col w-max pt-16 lg:pt-48 mx-auto">
                                My Blog
                        </h1>
                </div>
                <div v-for="post in posts">
                        <div @click="subpage = post[0]; toTop()" class="lg:flex lg:flex-row justify-center my-24">
                                <img :src="'/' + post[0] + '.png'"
                                        class="w-96 h-96 max-lg:h-2/3 max-lg:w-2/3 m-16 max-lg:mx-auto lg:mr-0 lg:my-auto justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                                <div
                                        class="max-lg:w-5/6 lg:w-1/2 xl:w-2/3 max-w-5xl m-16 max-lg:mx-auto max-lg:mt-[-6rem] lg:my-auto ml-[-6rem] rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl">
                                        <h1 class="p-12 pb-3 font-bold font-normal text-5xl drop-shadow-xl">
                                                {{ post[1] }}
                                        </h1>
                                        <p class="p-12 py-3 font-normal text-xl text-neutral-400 drop-shadow-xl">
                                                {{ post[2] }}
                                        </p>
                                        <p class="p-12 pt-3 font-normal text-3xl truncate drop-shadow-xl">
                                                {{ post[3] }}
                                        </p>
                                </div>
                        </div>
                </div>
        </div>

        <Test v-if="subpage === posts[0][0]" @back="subpage = 'main'; toTop()"></Test>
</template>

<style scoped></style>