<script setup></script>

<template>
  <div class="text">
    <input type="text" placeholder="Type anything..." />
  </div>
</template>

<style scoped>
.text {
  input {
    width: 16rem;
    height: 3.2rem;
    padding-left: 1.2rem;
    color: var(--text-color);
    font-size: 1rem;
    outline: none;
    border: none;
    background: none;
    box-shadow: var(--shadow2);
    border-radius: 0.8rem;

    &::placeholder {
      color: var(--text-color);
    }

    &:focus {
      color: var(--active-color);
      font-size: 1.1rem;
      box-shadow: var(--shadow1);
    }
  }
}
</style>
