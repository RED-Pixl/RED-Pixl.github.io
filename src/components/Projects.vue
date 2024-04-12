<script setup>
import Card from './Card.vue'
import Tum from './projects/Tum.vue'
import SchoolMania from './projects/SchoolMania.vue'
import Website from './projects/Website.vue'
</script>

<script>
export default {
        data() {
                return {
                        subpage: "main",
                        scTimer: 0,
                        scY: 0,
                }
        },
        components: {
                Card,
                Tum,
                SchoolMania,
                Website
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
        <div v-if="subpage === 'main'" class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl md:text-7xl text-center font-black flex flex-col w-max pt-16 lg:pt-48 mx-auto">
                        My Projects:
                </h1>

                <div class="flex flex-row flex-wrap content-center justify-center w-5/6 mx-auto mt-12">

                        <Card name="Schueler.In.TUM" image="/tum.jpg" class="m-12" @show="subpage = 'tum'; toTop()">
                        </Card>

                        <Card name="School Mania" image="/schoolMania.jpeg" class="m-12"
                                @show="subpage = 'game'; toTop()"></Card>

                        <Card name="This Website" image="/website.png" class="m-12"
                                @show="subpage = 'website'; toTop()">
                        </Card>
                </div>
        </div>

        <Tum v-if="subpage === 'tum'" @back="subpage = 'main'; toTop()"></Tum>

        <SchoolMania v-if="subpage === 'game'" @back="subpage = 'main'; toTop()"></SchoolMania>

        <Website v-if="subpage === 'website'" @back="subpage = 'main'; toTop()"></Website>
</template>

<style scoped></style>