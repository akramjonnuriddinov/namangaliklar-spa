<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <div class="container px-5 pb-5 mx-auto mb-10 border-b pt-7">
      <ul class="flex items-center justify-between">
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Главное</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/list">Интересное</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/eko">Экономика</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Политика</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Общество</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Технологии</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Спорт</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Культура</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Происшествия</RouterLink>
        </li>
        <li class="text-lg font-medium text-link">
          <RouterLink to="/">Наука</RouterLink>
        </li>
      </ul>
    </div>
    <RouterView />

  </main>
</template>

<style scoped>

</style>
