<script setup>
const props = defineProps(['title'])

</script>

<template>
  <button class="bg-accent px-5 py-3 font-medium text-white rounded-xl">{{ title }}</button>
</template>