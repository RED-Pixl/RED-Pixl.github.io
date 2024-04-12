<script>
export default {
        data() {
                return {
                        contact: [
                                ["/icons/mail.svg", "Email", "red.pixl123@gmail.com", "mailto:red.pixl123@gmail.com"],
                                ["/icons/discord.svg", "Discord", "red.pixl", "discord://@me/users/876474389300912188"],
                                ["/icons/instagram.svg", "Instagram", "red.pixl", "https://www.instagram.com/red.pixl/"],
                                ["/icons/threads.svg", "Threads", "red.pixl", "https://www.threads.net/@red.pixl"],
                                ["/icons/youtube.svg", "Youtube", "@red-Pixl", "https://www.youtube.com/@red-Pixl"],
                                ["/icons/bluesky.svg", "Bluesky", "@redpixl.bsky.social", "https://bsky.app/profile/redpixl.bsky.social"],
                                ["/icons/github.svg", "Github", "RED-Pixl", "https://github.com/RED-Pixl"]
                        ]
                }
        }
}
</script>

<template>
        <div class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl md:text-7xl text-center font-black flex flex-col w-max pt-16 lg:pt-48 mx-auto">
                        Contact me:
                </h1>
        </div>
        <div class="flex flex-row flex-wrap content-center justify-center w-5/6 mx-auto mt-12">
                <a v-for="item in contact" :href="item[3]"
                        class="flex flex-col w-96 m-6 p-4 rounded-3xl border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">
                        <img :src="item[0]" class="w-12 h-12 m-4 mx-auto">
                        <h1 class="text-2xl text-center font-normal w-max m-2 mx-auto">
                                {{ item[1] }}
                        </h1>
                        <p class="text-xl text-center font-normal flex flex-col w-max m-2 mx-auto">
                                {{ item[2] }}
                        </p>
                </a>
        </div>
</template>

<style scoped></style>