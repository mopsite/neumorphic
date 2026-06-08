<script setup>
defineProps({
  radioId: {
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
  <div class="radio">
    <input type="radio" :id="radioId" name="radio" :checked="isChecked" />
    <label :for="radioId"></label>
  </div>
</template>

<style scoped>
.radio {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;

    &:checked ~ label {
      box-shadow: var(--shadow2);

      &::before {
        background: var(--active-color);
      }
    }
  }

  label {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--shadow1);
    border-radius: 50%;
    cursor: pointer;

    &::before {
      content: '';
      width: 1.1rem;
      height: 1.1rem;
      background: var(--text-color);
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    @media (pointer: fine) {
      &:hover {
        &::before {
          background: var(--active-color);
        }
      }
    }
  }
}
</style>
