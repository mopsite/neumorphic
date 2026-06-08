<script setup>
import { ref } from 'vue'

const props = defineProps({
  isPrimary: {
    type: Boolean,
    default: false
  }
})

const textColor = ref('var(--text-color)')
const bgColor = ref('none')
const hoverColor = ref('var(--active-color)')
const activeShadow = ref('var(--shadow2)')

if (props.isPrimary) {
  textColor.value = 'var(--bg-color)'
  bgColor.value =
    'linear-gradient(330deg, hsl(var(--hue), 70%, 42%) 0%, hsl(var(--hue), 75%, 52%) 50%, hsl(var(--hue), 80%, 58%) 100%)'
  hoverColor.value = '#fff'
  activeShadow.value =
    'inset 0.2rem 0.2rem 1rem hsl(var(--hue), 89%, 49%), inset -0.2rem -0.2rem 1rem hsl(var(--hue), 100%, 77%)'
}
</script>

<template>
  <div class="button">Button</div>
</template>

<style scoped>
.button {
  width: 11rem;
  height: 3.2rem;
  line-height: 3.2rem;
  color: v-bind(textColor);
  font-size: 1.2rem;
  text-align: center;
  background: v-bind(bgColor);
  box-shadow: var(--shadow1);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (pointer: fine) {
    &:hover {
      color: v-bind(hoverColor);
    }

    &:active {
      box-shadow: v-bind(activeShadow);
    }
  }
}
</style>
