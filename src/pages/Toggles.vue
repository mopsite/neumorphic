<script setup>
import { ref } from 'vue'

const emit = defineEmits(['modeClick'])

const data = [
  { icon: 'fa-home', text: 'Home', color: '#e57373' },
  { icon: 'fa-phone', text: 'Phone', color: '#ffb74d' },
  { icon: 'fa-alarm-clock', text: 'Alarm', color: '#81c784' },
  { icon: 'fa-calculator', text: 'Counter', color: '#9575cd' },
  { icon: 'fa-cog', text: 'Setting', color: '#c0ca33' },
  { icon: 'fa-code', text: 'Code', color: '#ff8a65' },
  { icon: 'fa-power-off', text: 'Power', color: '#ffca28' },
  { icon: 'fa-sun', text: 'Light', color: '#64b5f6' },
  { icon: 'fa-paper-plane', text: 'Send', color: '#4fc3f7' },
  { icon: 'fa-link', text: 'Link', color: '#ba68c8' },
  { icon: 'fa-plane', text: 'Flight', color: '#9ccc65' },
  { icon: 'fa-snowflake', text: 'Cold', color: '#4db6ac' },
  { icon: 'fa-truck', text: 'Traffic', color: '#fdd835' },
  { icon: 'fa-volume', text: 'Volume', color: '#4dd0e1' },
  { icon: 'fa-shopping-cart', text: 'Shopping', color: '#f06292' },
  { icon: 'fa-wifi', text: 'Wifi', color: '#7986cb' }
]

const activeItems = ref(new Array(data.length).fill(false))
activeItems.value[0] = true
activeItems.value[6] = true
activeItems.value[9] = true
activeItems.value[15] = true

const isDark = ref(false)
const itemClick = (item, index) => {
  activeItems.value[index] = !activeItems.value[index]
  if (item.icon === 'fa-moon' || item.icon === 'fa-sun') {
    isDark.value = !isDark.value
    emit('modeClick', isDark.value)
    if (item.icon === 'fa-sun') {
      item.icon = 'fa-moon'
      item.text = 'Dark'
    } else if (item.icon === 'fa-moon') {
      item.icon = 'fa-sun'
      item.text = 'Light'
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="main">
      <template v-for="(item, index) in data">
        <div
          class="item"
          :class="{ active: activeItems[index] }"
          :style="{ '--item-color': item.color }"
          @click="itemClick(item, index)"
        >
          <i class="far" :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow1);
  border-radius: 0.5rem;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    aspect-ratio: 1;
    font-size: 14px;
    font-weight: 700;
    box-shadow: var(--shadow1);
    border-radius: 1.3rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;

    i {
      margin: 0.5rem 0;
      font-size: 1.3rem;
      transition: all 0.2s ease;
    }

    &.active {
      color: var(--item-color);
      box-shadow: var(--shadow2);
      transform: translateY(1px);
    }
  }
}
</style>
