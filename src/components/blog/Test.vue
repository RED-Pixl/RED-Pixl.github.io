<script></script>

<template>
        <div
                class="fixed m-6 p-4 rounded-full border-y border-b-white/10 border-t-white/15 bg-black/15 shadow-xl shadow-black/30 backdrop-blur-3xl transition-transform hover:scale-110">

                <div class="align-center flex flex-row justify-center">
                        <button @click="$emit('back')"
                                class="flex flex-row w-12 h-12 gap-2 rounded-full p-2 transition hover:bg-white/5 active:scale-95 active:bg-white/10">
                                <img src="/src/assets/icons/back.svg" class="w-6 h-6 m-1">
                        </button>
                </div>
        </div>
        <div class="font-heading font-black tracking-tightest items-center align-center">
                <h1 class="text-5xl text-center font-black flex flex-col w-max pt-40 mx-auto">
                        Test
                </h1>
        </div>
        <p class="m-12 my-6 font-normal text-xl text-neutral-400 drop-shadow-xl text-center">
                Monday, 1st of January, 0000
        </p>

        <div class="2xl:flex 2xl:flex-row justify-center">
                <img src="/src/assets/logo.png"
                        class="w-96 h-96 m-16 2xl:my-auto max-2xl:mx-auto justify-center items-center rounded-3xl bg-cover shadow-xl shadow-black/30 border-y border-b-white/10 border-t-white/15 transition-transform hover:scale-110"></img>

                <div>
                        <p
                                class="m-12 max-2xl:mx-auto w-5/6 max-w-5xl font-normal max-2xl:text-center text-2xl drop-shadow-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam porro nobis
                                sapiente autem nihil voluptas optio! 
                                <br> <br>
                                Cupiditate non eligendi recusandae adipisci
                                incidunt fugiat? Facere laudantium perferendis dignissimos commodi rerum? Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Distinctio, magnam id molestias porro nemo
                                blanditiis accusantium nostrum earum sapiente dignissimos. 
                                <br> <br>
                                Voluptate amet numquam
                                assumenda corrupti ratione labore, quibusdam sapiente sequi.
                        </p>
                </div>
        </div>

        <p class="m-12 mx-auto w-5/6 max-w-[96rem] font-normal max-2xl:text-center text-2xl drop-shadow-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quia illo voluptatum dolor quasi
                repudiandae. Doloremque esse facilis possimus sint illo blanditiis similique magni, voluptate, eaque
                sequi consequatur numquam fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam
                sapiente facere ab, soluta doloribus quis nulla similique exercitationem ex non dolorem, esse, assumenda
                eius qui delectus ducimus tempora minus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere fuga exercitationem, quo officia id sit dolorem delectus illo quam obcaecati adipisci a placeat.
                Aliquid, quaerat voluptatem eaque inventore molestias sint?
        </p>
</template>

<style scoped></style>