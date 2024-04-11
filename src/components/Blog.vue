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
                        <div @click="subpage = post[0]; toTop()" class="flex flex-row justify-center my-24">
                                <img :src="'/' + post[0] + '.png'"
                                        class="w-96 h-96 m-16 2xl:my-auto max-2xl:mx-auto mr-[-4rem] justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                                <div
                                        class="h-64 w-5/6 max-w-5xl my-auto rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl">
                                        <h1 class="m-12 mb-6 font-bold font-normal text-5xl drop-shadow-xl">
                                                {{ post[1] }}
                                        </h1>
                                        <p class="m-12 my-6 font-normal text-xl text-neutral-400 drop-shadow-xl">
                                                {{ post[2] }}
                                        </p>
                                        <p class="m-12 my-6 font-normal text-3xl truncate drop-shadow-xl">
                                                {{ post[3] }}
                                        </p>
                                </div>
                        </div>
                </div>
        </div>

        <Test v-if="subpage === posts[0][0]" @back="subpage = 'main'; toTop()"></Test>
</template>

<style scoped></style>