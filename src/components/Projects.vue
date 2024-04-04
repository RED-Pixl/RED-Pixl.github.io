<script setup>
        import Card from './Card.vue'
</script>

<script>
        export default {
                data() {
                        return {
                                subpage: "main"
                        }
                },
                components: {
                        Card
                }
        }
</script>

<template>
        <div v-if="subpage === 'main'" class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-7xl text-center font-black flex flex-col w-max pt-48 mx-auto">
                        My Projects:
                </h1>

                <div class="flex flex-row my-16 tracking-normal justify-center">

                        <Card name="Schueler.In.TUM" image="/src/assets/tum.jpg" class="m-12" @show="subpage = 'tum'"></Card>

                        <Card name="School Mania" image="/src/assets/game.png" class="m-12" @show="subpage = 'game'"></Card>

                        <Card name="TJC-Team" image="/src/assets/tjc.jpg" class="m-12" @show="subpage = 'tjc'"></Card>
                </div>
        </div>
</template>

<style scoped></style>