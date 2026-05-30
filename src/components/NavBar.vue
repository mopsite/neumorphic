<script setup>
import { useRoute, useRouter } from 'vue-router'

const emit = defineEmits(['removeDark'])

const data = [
  { path: '/toggles', icon: 'fa-home' },
  { path: '/buttons', icon: 'fa-paper-plane' },
  { path: '/google', icon: 'fa-wifi' },
  { path: '/elements', icon: 'fa-alarm-clock' }
]

const router = useRouter()
const route = useRoute()

const itemClick = item => {
  if (route.path === item.path) return
  router.push(item.path)
  emit('removeDark')
}
</script>

<template>
  <div class="navbar">
    <template v-for="item in data">
      <a
        :class="{ active: $route.path === item.path }"
        @click="itemClick(item)"
      >
        <i class="fas" :class="item.icon"></i>
      </a>
    </template>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: var(--bg-color);
  box-shadow: var(--shadow1);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    aspect-ratio: 1;
    margin: 0 10px;
    color: var(--text-color);
    box-shadow: var(--shadow1);
    border-radius: 50%;
    cursor: pointer;

    &.active {
      color: var(--active-color);
      box-shadow: var(--shadow2);
    }

    @media (pointer: fine) {
      &:hover:not(.mode) {
        box-shadow: var(--shadow2);
      }

      &:active:is(.mode) {
        box-shadow: var(--shadow2);
      }
    }
  }
}
</style>
