<script setup>
const hue = defineModel()
</script>

<template>
  <div class="slider">
    <input type="range" min="0" max="360" v-model="hue" :title="hue" />
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
}

input {
  position: relative;
  appearance: none;
  outline: none;
  width: 100%;
  height: 0.7rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: var(--shadow1);
  background: linear-gradient(
    90deg,
    #fc5f5f 0%,
    #fcad5f 8.33%,
    #fcfc5f 16.66%,
    #adfc5f 25%,
    #5ffc5f 33.33%,
    #5ffcad 41.66%,
    #5ffcfc 50%,
    #5fadfc 58.33%,
    #5f5ffc 66.66%,
    #ad5ffc 75%,
    #fc5ffc 83.33%,
    #fc5fad 91.66%,
    #fc5f5f 100%
  );

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: var(--shadow1);
    background: #fff;
    border: 0.4rem solid var(--active-color);
    border-radius: 50%;
  }
}
</style>
