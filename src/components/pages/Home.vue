<script setup>
</script>

<script>
export default {
      data() {
            return {
                  animationID: setInterval(() => { this.updateTrack(); }, 15),
                  animationFactor: 1.0,
                  track: 0,
                  horizontal: window.innerWidth > window.innerHeight,
                  showText: 0,
                  images: [
                        ["Plot 1 TJC-Team", "/plot 1 hänsel und gretel.png", 1],
                        ["Plot 2 TJC-Team", "/plot 2 büro.png", 13],
                        ["DiaWars S1", "/diawars season 1 banner.png", 2],
                        ["EliminationCraft", "/eliminationcraft.png", 19],
                        ["Plot 2 TJC-Team", "/plot 2 grill.png", 14],
                        ["Skillcraft Studio", "/skillcraft studio viewer.png", 3],
                        ["Plot 2 TJC-Team", "/plot 2 main.png", 18],
                        ["Plot 1 TJC-Team", "/plot 1 der glöckner.png", 4],
                        ["Skillcraft Studio", "/skillcraft island.png", 5],
                        ["Plot 2 TJC-Team", "/plot 2 helikopter.png", 15],
                        ["Plot 1 TJC-Team", "/plot 1 schöne und das biest.png", 6],
                        ["EliminationCraft", "/eliminationcraft pit.png", 20],
                        ["DiaWars S1", "/diawars season 1 bridge.png", 7],
                        ["Skillcraft Studio", "/skillcraft studio main.png", 8],
                        ["Plot 2 TJC-Team", "/plot 2 insel hinten.png", 16],
                        ["Plot 1 TJC-Team", "/plot 1 rapunzel.png", 9],
                        ["DiaWars S1", "/diawars season 1 rift.png", 10],
                        ["Plot 2 TJC-Team", "/plot 2 interior.png", 17],
                        ["Plot 1 TJC-Team", "/plot 1 full.png", 11],
                        ["Skillcraft S1", "/skillcraft studio top.png", 12],
                  ]
            }
      },
      methods: {
            toTop: function () {
                  console.log("called")
            },
            updateTrack: function () {
                  this.track = (this.track - this.animationFactor * 0.005) % 50
            },
            startRotation: function () {
                  if (this.animationFactor < 1.0) {
                        this.animationFactor = this.animationFactor + 0.005
                        setTimeout(() => { this.startRotation() }, 10)
                  }
            },
            stopRotation: function () {
                  if (this.animationFactor > 0.0) {
                        this.animationFactor = this.animationFactor - 0.01
                        setTimeout(() => { this.stopRotation() }, 10)
                  }
            },
            onResize: function () {
                  this.horizontal = window.innerWidth > window.innerHeight
            }
      },
      mounted() {
            this.$nextTick(() => {
                  window.addEventListener('resize', this.onResize)
            })
      },
      beforeDestroy() {
            window.removeEventListener('resize', this.onResize)
            clearInterval(this.animationID)
      },
}
</script>

<template>
      <div class="w-screen mt-10" v-if="horizontal">
            <div class="slide-track flex flex-row overflow-visible w-[3200vh]">
                  <div v-for="image in this.images" class="m-[-1px] overflow-visible w-2/5 transition-all hover:scale-125 hover:translate-y-[8%]" @mouseenter="stopRotation(); showText = image[2]"
                        @mouseleave="startRotation(); showText = 0">
                        <img class="transition-all hover:rounded-lg hover:shadow-xl"
                              :src="image[1]" alt="">
                        <h2 v-if="showText === image[2]" class="transition-all text-[3vw] md:text-6xl font-semibold montserrat-superbold ml-8 mt-[-8vh] text-white pointer-events-none" style="text-shadow: 0px 8px 20px rgba(0,0,0,0.7);"> {{ image[0] }} </h2></img>
                  </div>

                  <div v-for="image in this.images" class="m-[-1px] overflow-visible w-2/5 transition-all hover:scale-125 hover:translate-y-[8%]" @mouseenter="stopRotation(); showText = image[2]"
                        @mouseleave="startRotation(); showText = 0">
                        <img class="transition-all hover:rounded-lg hover:shadow-xl"
                              :src="image[1]" alt="">
                        <h2 v-if="showText === image[2]" class="transition-all text-[3vw] md:text-6xl font-semibold montserrat-superbold ml-8 mt-[-8vh] text-white pointer-events-none" style="text-shadow: 0px 8px 20px rgba(0,0,0,0.7);"> {{ image[0] }} </h2></img>
                  </div>
            </div>
      </div>

      <div class="w-screen mt-[3vw]" v-else>
            <div class="slide-track flex flex-row overflow-visible w-[2700vw]">
                  <div v-for="image in images" class="m-[-1px] overflow-visible w-2/5 transition-all hover:scale-125 hover:translate-y-[8%]" @mouseenter="stopRotation(); showText = image[2]"
                        @mouseleave="startRotation(); showText = 0">
                        <img class="transition-all hover:rounded-lg hover:shadow-xl"
                              :src="image[1]" alt="">
                        <h2 v-if="showText === image[2]" class="transition-all text-[5vw] md:text-6xl font-semibold montserrat-superbold ml-[4vw] mt-[-10vw] text-white pointer-events-none drop-shadow-2xl"> {{ image[0] }} </h2></img>
                  </div>

                  <div v-for="image in images" class="m-[-1px] overflow-visible w-2/5 transition-all hover:scale-125 hover:translate-y-[8%]" @mouseenter="stopRotation(); showText = image[2]"
                        @mouseleave="startRotation(); showText = 0">
                        <img class="transition-all hover:rounded-lg hover:shadow-xl"
                              :src="image[1]" alt="">
                        <h2 v-if="showText === image[2]" class="transition-all text-[5vw] md:text-6xl font-semibold montserrat-superbold ml-[4vw] mt-[-10vw] text-white pointer-events-none drop-shadow-2xl"> {{ image[0] }} </h2></img>
                  </div>
            </div>
      </div>

      <p class="montserrat-regular w-full absolute bottom-8 text-center">© 2024 Copyright: Simon / RedPixl</p>
</template>

<style scoped>
.slide-track {
      transform: translateX(v-bind(track + '%'));
}
</style>
