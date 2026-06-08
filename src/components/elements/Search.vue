<script setup></script>

<template>
  <div class="search">
    <input type="text" placeholder="Search..." />
    <i class="fas fa-search"></i>
  </div>
</template>

<style scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    margin-left: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
  }

  input {
    width: 16rem;
    height: 3.2rem;
    padding-left: 2.8rem;
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

      & + i {
        color: var(--active-color);
      }
    }
  }
}
</style>
