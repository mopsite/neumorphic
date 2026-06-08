<script setup>
import { ref } from 'vue'

const icons = [
  { name: 'fa-facebook', color: '#3b5998' },
  { name: 'fa-twitter', color: '#1da1f2' },
  { name: 'fa-dribbble', color: '#ea4c89' },
  { name: 'fa-linkedin-in', color: '#0077b5' },
  { name: 'fa-get-pocket', color: '#ef4056' },
  { name: 'fa-github', color: '#333' }
]

const activeIndex1 = ref(1)
const activeColor1 = ref('#1da1f2')
const hoverColor1 = ref('')
const btnClick1 = index => {
  activeIndex1.value = index
  activeColor1.value = icons[index].color
}
const btnMouseOver1 = index => (hoverColor1.value = icons[index].color)

const activeIndex2 = ref(4)
const activeColor2 = ref('#ef4056')
const hoverColor2 = ref('')
const btnClick2 = index => {
  activeIndex2.value = index
  activeColor2.value = icons[index].color
}
const btnMouseOver2 = index => (hoverColor2.value = icons[index].color)
</script>

<template>
  <div class="container">
    <div class="main">
      <h1>Neumorphic Social Buttons</h1>
      <div class="buttons">
        <template v-for="(icon, index) in icons">
          <span
            @click="btnClick1(index)"
            @mouseover="btnMouseOver1(index)"
            :class="{ active: activeIndex1 === index }"
          >
            <i class="fab" :class="icon.name"></i>
          </span>
        </template>
      </div>
      <div class="buttons round">
        <template v-for="(icon, index) in icons">
          <span
            @click="btnClick2(index)"
            @mouseover="btnMouseOver2(index)"
            :class="{ active: activeIndex2 === index }"
          >
            <i class="fab" :class="icon.name"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
    padding: 0 1rem 0.5rem;
    font-size: 24px;
    color: #333;
    font-weight: 400;
    text-align: center;
    border-bottom: 2px solid #f06292;
  }

  .buttons {
    margin: 1rem 0;
    display: flex;
    box-shadow: var(--shadow1);
    border-radius: 0.4rem;

    span {
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      aspect-ratio: 1;
      font-size: 1.2rem;
      box-shadow: var(--shadow1);
      border-radius: 0.2rem;
      cursor: pointer;
      transition: color 0.3s ease;

      &.active {
        color: v-bind(activeColor1);
        box-shadow: var(--shadow2);
      }

      @media (pointer: fine) {
        &:hover {
          color: v-bind(hoverColor1);
        }
      }
    }

    &.round span {
      border-radius: 50%;

      &.active {
        color: v-bind(activeColor2);
      }

      @media (pointer: fine) {
        &:hover {
          color: v-bind(hoverColor2);
        }
      }
    }
  }
}
</style>
