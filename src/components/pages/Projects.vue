<script setup>
</script>

<script>
export default {
      data() {
            return {
                  page: 'home',
                  projects: [
                        ["EliminationCraft", "/eliminationcraft.png", "Mai 2023 - AoWork, RedPixl", "https://elimination-craft.de/"],
                        ["Skillcraft Studio", "/skillcraft studio main.png", "März 2022 - Lord SimonRab, AoWork, RedPixl", ""],
                        ["DiaWars S1", "/diawars season 1 rift.png", "Januar 2022 - Nono, AoWork, Lord SimonRab, RedPixl", "https://diawars.de/"],
                        ["Plot 2 TJC-Team", "/plot 2 main.png", "Herbst 2021 - RedPixl", "Mein zweites Plot für die Bewerbung beim TJC-Team, vorgegeben war der Stil \"Modern\". Innerhalb von 2 Wochen entstand die Forschungseinrichtung auf einer tropischen Insel."],
                        ["Plot 1 TJC-Team", "/plot 1 full.png", "Sommer 2021 - RedPixl", "Mein Plot aus der ersten Builder-Bewerbungsphase des TJC-Teams, es war kein bestimmter Stil. Die Bauzeit betrug einen Monat."]
                  ]
            }
      },
      methods: {
            
      },
}
</script>

<template>
      <div v-if="this.page = 'home'">
            <h1 class="text-center w-full my-6 text-9xl font-semibold montserrat-superbold">Projekte</h1>
            <div v-for="project in this.projects" class="w-3/5 mx-auto my-24 flex flex-row justify-start">
                  <img class="w-2/5 max-w-[32rem] my-auto mr-32 rounded-lg shadow-md transition-all hover:scale-125 hover:shadow-xl" :src="project[1]" alt="">
                  <h3 class="w-full my-auto text-6xl font-semibold montserrat-superbold"> 
                        {{ project[0] }} 
                        <p class="mt-8 text-lg font-normal montserrat-regular">
                              {{ project[2] }}
                        </p>
                        <p class="mt-4 text-2xl font-normal montserrat-regular">
                              {{ project[3] }}
                        </p>
                  </h3>
            </div>
      </div>
</template>

<style scoped></style>
