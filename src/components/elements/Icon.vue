<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    default: 'home'
  }
})

const isActive = ref(false)
</script>

<template>
  <div class="icon" :class="{ active: isActive }" @click="isActive = !isActive">
    <i :class="`fas fa-${name}`"></i>
  </div>
</template>

<style scoped>
.icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow1);
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.3s ease;

  i {
    font-size: 1.5rem;
  }

  @media (pointer: fine) {
    &:hover {
      color: var(--active-color);
    }
  }

  &.active {
    color: var(--active-color);
    box-shadow: var(--shadow2);
  }
}
</style>
