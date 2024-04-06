<script>
        export default {
                data() {
                        return {
                                courses: [
                                        ["EidI", 6], 
                                        ["PGdP", 6], 
                                        ["GAD", 6], 
                                        ["LAInfo", 8],
                                        ["DS", 8],
                                        ["ERA", 8],
                                        ["Theo", 8],
                                        ["FPV", 5],
                                        ["DWT", 6]
                                ]
                        }
                },
                methods: {
                        calcPercentage() {
                                let sum = 0
                                for (let i = 0; i < this.courses.length; i++) {
                                        sum += this.courses[i][1]
                                }
                                return Math.round((sum / 180) * 10) * 10;
                        }
                }
        }
</script>

<template>
        <div
                class="fixed m-6 p-4 rounded-full border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">

                <div class="align-center flex flex-row justify-center">
                        <button @click="$emit('back')" class="flex flex-row w-12 h-12 gap-2 rounded-full p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/src/assets/icons/back.svg" class="w-6 h-6 m-1">
                        </button>
                </div>
        </div>
        <div class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl text-center font-black flex flex-col w-max pt-40 mx-auto">
                        Schueler.In.TUM
                </h1>
        </div>

        <div class="2xl:flex 2xl:flex-row justify-center">
                <img src="/src/assets/tum.jpg" class="w-96 h-96 m-16 2xl:my-auto max-2xl:mx-auto justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                <div>
                        <p class="m-12 max-2xl:mx-auto w-5/6 max-w-5xl font-normal max-2xl:text-center text-4xl drop-shadow-xl">
                                Since the Wintersemester of 22/23, I've been studying Computersciene at TUM simultaniously to school thanks to Schueler.In.TUM. I took many different courses during the last semesters, e.g. EidI (2.3), PGdP (2.7) or ERA (1.7).
                                <br> <br>
                                Currently, I'm done with around {{ calcPercentage() }}% of my bachelors degree.
                        </p>
                </div>
        </div>

        <p class="m-12 mx-auto w-5/6 max-w-[96rem] font-normal max-2xl:text-center text-4xl drop-shadow-xl">
                If you are interested, you can visit the <a href="https://www.schueler.in.tum.de/" class="">Schueler.In.Tum-homepage</a> or contact me if you want to know more about my personal expirience.
        </p>
</template>

<style scoped></style>