<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const mode = ref('')
const modeClick = isDark => (mode.value = isDark ? 'dark' : '')

const hue = ref(275)
const changeHue = newHue => (hue.value = newHue)
</script>

<template>
  <div :class="[$route.path.replace('/', ''), mode]">
    <NavBar @removeDark="mode = ''" />
    <RouterView
      v-slot="{ Component }"
      @modeClick="modeClick"
      @changeHue="changeHue"
    >
      <KeepAlive include="Elements">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>

<style scoped>
.elements {
  --hue: v-bind(hue);
}
</style>
