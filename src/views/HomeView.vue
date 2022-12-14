<script setup>
import TheButton from '../components/TheButton.vue';

</script>

<template>
  <div class="container px-5 mx-auto">
    <img class="mb-12" src="../assets/img/adv.jpg" alt="">
    <ul class="flex flex-wrap -mb-2 -mr-2">
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
      <li class="w-full px-4 pt-5 pb-4 mb-2 mr-2 bg-f6f6f6 max-w-394 rounded-2xl">
        <h3 class="mb-2 text-xl font-medium text-black">Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного соглашения</h3>
        <p class="mb-4">Лидер Социал-демократической партии Германии (СДПГ) и кандидат на должность...</p>
        <img class="mb-4" src="../assets/img/image1.png" alt="">
        <div class="flex">
          <img class="mr-2" src="../assets/img/icon1.png" alt="">
          <p>ИА Красная Весна <span>15:55</span></p>
        </div>
      </li>
    </ul>
    <div class="flex justify-between w-full py-6 pr-16 mx-auto mt-10 bg-orange-100 max-w-1050 mb-14 px-7 rounded-xl">
      <h2 class="w-full text-xl font-medium text-black max-w-404">Хотите быть в курсе свежих новостей?  Включите уведомления!</h2>
      <TheButton class="bg-orange-500" title="Включит " />
    </div>
    <div>
      <h2 class="mb-5 text-2xl font-medium text-black">В мире</h2>
      <ul class="">
        <li v-for="i in 4" class="flex items-center w-full p-5 pl-4 mb-2 bg-gray-100 rounded-2xl max-w-797">
          <img class="mr-4" src="../assets/img/v-mir-image1.png" alt="">
          <div>
            <h3 class="mb-2 text-xl font-medium text-black">Китайский Чунцин запустил чартерный рейс для студентов до Британии</h3>
            <p class="mb-4">Чартерный рейс с 244 китайскими студентами вылетел из города центрального подчинения Чунцина на юго-западе Китая в британский Манчестер...</p>
            <div class="flex items-center">
              <img class="mr-2" src="../assets/img/icon1.png" alt="">
              <span class="text-xs">ИА Красная Весна 12:25</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>