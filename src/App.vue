<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const mode = ref('')
const modeClick = isDark => (mode.value = isDark ? 'dark' : '')
</script>

<template>
  <div :class="[$route.path.replace('/', ''), mode]">
    <NavBar @removeDark="mode = ''" />
    <RouterView @modeClick="modeClick" />
  </div>
</template>

<style scoped></style>
