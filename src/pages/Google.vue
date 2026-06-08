<script setup>
import { ref } from 'vue'

const logo = [
  { text: 'G', color: '#4285f4' },
  { text: 'o', color: '#ea4335' },
  { text: 'o', color: '#fbbc05' },
  { text: 'g', color: '#4285f4' },
  { text: 'l', color: '#34a853' },
  { text: 'e', color: '#ea4335' }
]

const icons1 = ['fa-envelope', 'fa-bars', 'fa-user']
const icons2 = ['fa-plus', 'fa-image', 'fa-map-marker-alt', 'fa-smile']

const activeIndex1 = ref(2)
const activeIndex2 = ref(1)
const iconClick1 = index => (activeIndex1.value = index)
const iconClick2 = index => (activeIndex2.value = index)
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="nav icons">
        <span
          v-for="(icon, index) in icons1"
          :class="{ active: activeIndex1 === index }"
          @click="iconClick1(index)"
        >
          <i class="fas" :class="icon"></i>
        </span>
      </div>
      <h1 class="logo">
        <span v-for="item in logo" :style="{ color: item.color }">
          {{ item.text }}
        </span>
      </h1>
      <div class="search">
        <i class="far fa-search"></i>
        <input type="text" placeholder="Search Google or type a URL" />
        <img src="../images/google_mic.png" />
      </div>
      <div class="icons">
        <span
          v-for="(icon, index) in icons2"
          :class="{ active: activeIndex2 === index }"
          @click="iconClick2(index)"
        >
          <i class="far" :class="icon"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  padding: 1rem 2rem;
  box-shadow: var(--shadow1);
  border-radius: 0.8rem;

  .nav {
    align-self: flex-end;
  }

  .icons {
    display: flex;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.8rem;
      width: 2.4rem;
      aspect-ratio: 1;
      box-shadow: var(--shadow1);
      border-radius: 50%;
      cursor: pointer;
      transition: color 0.3s ease;

      @media (pointer: fine) {
        &:hover {
          color: var(--active-color);
        }
      }

      &.active {
        color: var(--active-color);
        box-shadow: var(--shadow2);
      }
    }
  }

  .logo {
    display: flex;
    margin: 2.5rem 0;
    font-size: 4.2rem;
    text-shadow: var(--shadow1);
  }

  .search {
    display: flex;
    align-items: center;
    width: 28rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    padding: 0 1.2rem;
    box-shadow: var(--shadow2);
    border-radius: 3rem;

    .fa-search {
      cursor: pointer;
      transition: color 0.3s ease;

      @media (pointer: fine) {
        &:hover {
          color: var(--active-color);
        }
      }
    }

    input {
      width: 100%;
      margin: 0 1rem;
      outline: none;
      border: none;
      color: var(--active-color);
      font-size: 0.9rem;
      background: transparent;
    }

    img {
      height: 1.6rem;
      cursor: pointer;
    }

    &:focus-within {
      box-shadow: var(--shadow1);

      .fa-search {
        font-size: 1.1rem;
      }

      img {
        height: 1.7rem;
      }
    }
  }
}
</style>
