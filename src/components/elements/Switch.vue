<script setup>
defineProps({
  switchId: {
    type: String,
    default: ''
  },
  isChecked: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="switch">
    <input type="checkbox" :id="switchId" :checked="isChecked" />
    <label :for="switchId"></label>
  </div>
</template>

<style scoped>
.switch {
  width: 5.6rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;

    &:checked ~ label::before {
      opacity: 1;
    }

    &:checked ~ label::after {
      left: 58%;
      background: var(--bg-color);
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: var(--shadow1);
    border-radius: 1.5rem;
    cursor: pointer;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(
        330deg,
        hsl(var(--hue), 70%, 42%) 0%,
        hsl(var(--hue), 75%, 52%) 50%,
        hsl(var(--hue), 80%, 58%) 100%
      );
      opacity: 0;
      transition: all 0.4s ease;
    }

    &::after {
      content: '';
      position: absolute;
      left: 5%;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: var(--text-color);
      transition: 0.4s ease;
    }
  }
}
</style>
