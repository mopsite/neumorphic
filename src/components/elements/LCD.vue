<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeString = ref('')
let timer = null

const getTime = () => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours} : ${minutes} : ${seconds}`
}

onMounted(() => {
  timeString.value = getTime()
  timer = setInterval(() => {
    timeString.value = getTime()
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="lcd">{{ timeString }}</div>
</template>

<style scoped>
.lcd {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3.5rem;
  padding: 0 1.5rem;
  color: var(--active-color);
  font-family: Consolas, 'Roboto Mono', 'SF Mono', 'Courier New', monospace;
  font-size: 1.8rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  box-shadow: var(--shadow2);
  border-radius: 0.8rem;
}
</style>
