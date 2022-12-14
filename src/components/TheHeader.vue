<template>
  <div class="bg-header-bg">
    <div class="container mx-auto border-red-500 py-5 flex items-center">
      <a class="mr-9" href="#">
        <img src="../assets/img/NAMANGANLIKLAR 24.svg" alt="">
      </a>
      <div class="flex items-center mr-10">
        <span class="mr-6 text-cl-555">
          <span class="text-price-cl font-bold">$</span> 10137.2
        </span>
        <span class="text-cl-555">
          <span class="text-price-cl font-bold">P</span> 138.26
        </span>
      </div>
      <div class="ml-auto flex items-center">
        <input class="bg-white rounded-full outline-none px-4 py-3 w-275 mr-6" type="text" placeholder="Поиск">
        <div class="bg-lang p-1 pr-4 flex items-center rounded-full mr-6">
          <span class="bg-white rounded-full p-2 mr-2 w-7 h-7 flex items-center justify-center cursor-pointer">УЗ</span>
          <span class="text-lang-disable cursor-pointer">РУ</span>
        </div>
        <RouterLink to="/contact">
          <TheButton title="Войти" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from './TheButton.vue'

</script>

<style>

</style>