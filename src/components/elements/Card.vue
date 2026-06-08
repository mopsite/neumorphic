<script setup></script>

<template>
  <div class="card">
    <i class="fab fa-twitter"></i>
    <p>
      Twitter is a social media network based on short posts limited to 280
      characters.
    </p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 9.8rem;
  padding: 0 1rem;
  box-shadow: var(--shadow1);
  border-radius: 0.8rem;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.8rem;
    color: var(--active-color);
    font-size: 1.5rem;
    box-shadow: var(--shadow2);
    border-radius: 50%;
  }

  p {
    margin: 0 0.5rem;
    font-size: 0.8rem;
    line-height: 1.5;
    text-align: justify;
  }
}
</style>
