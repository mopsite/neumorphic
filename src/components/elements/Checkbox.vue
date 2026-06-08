<script setup>
defineProps({
  checkboxId: {
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
  <div class="checkbox">
    <input type="checkbox" :id="checkboxId" :checked="isChecked" />
    <label :for="checkboxId"><i class="fas fa-check"></i></label>
  </div>
</template>

<style scoped>
.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;

    &:checked ~ label {
      color: var(--active-color);
      box-shadow: var(--shadow2);
    }
  }

  label {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--shadow1);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (pointer: fine) {
      &:hover {
        color: var(--active-color);
      }
    }
  }
}
</style>
