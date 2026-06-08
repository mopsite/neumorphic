<script setup>
import { ref } from 'vue'

const translateX = ref('translateX(0)')
const tabClick = i => (translateX.value = `translateX(${(i - 1) * 96}%)`)
</script>

<template>
  <div class="tab">
    <template v-for="i in 3">
      <input type="radio" :id="`tab-${i}`" name="tab" :checked="i === 1" />
      <label :for="`tab-${i}`" @click="tabClick(i)">Tab {{ i }}</label>
    </template>
    <div class="border"></div>
  </div>
</template>

<style scoped>
.tab {
  position: relative;
  display: flex;
  align-items: center;
  width: 16rem;
  height: 3.2rem;
  padding: 0.2rem;
  box-shadow: var(--shadow1);
  border-radius: 0.8rem;

  input {
    display: none;

    &:checked + label {
      color: var(--active-color);
    }
  }

  label {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (pointer: fine) {
      &:hover {
        color: var(--active-color);
      }
    }
  }

  .border {
    position: absolute;
    height: 2.8rem;
    width: 33.33%;
    box-shadow: var(--shadow2);
    border-radius: 0.8rem;
    pointer-events: none;
    transform: v-bind(translateX);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
