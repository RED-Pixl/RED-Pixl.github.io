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
                                subpage: "main"
                        }
                },
                components: {
                        Card,
                        Tum,
                        SchoolMania,
                        Website
                }
        }
</script>

<template>
        <div v-if="subpage === 'main'" class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl md:text-7xl text-center font-black flex flex-col w-max pt-16 lg:pt-48 mx-auto">
                        My Projects:
                </h1>

                <div class="flex flex-row flex-wrap content-center justify-center w-5/6 mx-auto mt-12">

                        <Card name="Schueler.In.TUM" image="/tum.jpg" class="m-12" @show="subpage = 'tum'"></Card>

                        <Card name="School Mania" image="/schoolMania.jpeg" class="m-12" @show="subpage = 'game'"></Card>

                        <Card name="This Website" image="/website.png" class="m-12" @show="subpage = 'website'"></Card>
                </div>
        </div>

        <Tum v-if="subpage === 'tum'" @back="subpage = 'main'"></Tum>

        <SchoolMania v-if="subpage === 'game'" @back="subpage = 'main'"></SchoolMania>

        <Website v-if="subpage === 'website'" @back="subpage = 'main'"></Website>
</template>

<style scoped></style>