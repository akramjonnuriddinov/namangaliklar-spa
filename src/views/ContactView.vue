<template>
  <div class="container mx-auto px-5 pt-5 pb-24">
    <h1 class="font-medium text-black text-2xl mb-5">Напишите нам</h1>
    <div class="w-full flex justify-between">
      <form class="w-696 mr-2">
        <div class="w-full flex justify-between mb-2">
          <input class="border outline-none py-4 px-5 rounded-xl w-full mr-2" type="text" placeholder="Имя">
          <input class="border outline-none py-4 px-5 rounded-xl w-full" type="text" placeholder="Номер телефона">
        </div>
        <div class="w-full mb-2">
          <input class="border outline-none py-4 px-5 rounded-xl w-full" type="text" placeholder="Электронная почта">
        </div>
        <div class="mb-9">
          <textarea class="border outline-none py-4 px-5 rounded-xl w-full min-h-180" placeholder="Текст" cols="" rows=""></textarea>
        </div>
        <div class="flex justify-center">
          <TheButton title="Отправить" />
        </div>
      </form>
      <div class="bg-f6f6f6 py-10 px-6 w-[494px] h-[310px] rounded-xl">
        <div class="pb-5 border-b">
          <h4 class="text-black font-bold">Электронная почта</h4>
          <p class="text-black text-base">info@namanganliklar24.uz</p>
        </div>
        <div class="border-b py-5">
          <h4 class="text-black font-bold">Номер телефона</h4>
          <p class="text-black text-base">+998 88 522-54-76</p>
        </div>
        <div class="py-5">
          <h4 class="text-black font-bold">Адрес</h4>
          <p class="text-black text-base">Ташкент, площадь Мустакиллик, 6 </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from '../components/TheButton.vue'

</script>