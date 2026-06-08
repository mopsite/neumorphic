<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hands = ['hour', 'minute', 'second']
const transformHour = ref('')
const transformMinute = ref('')
const transformSecond = ref('')

let timer = null

onMounted(() => {
  clock()
  timer = setInterval(clock, 30)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function clock() {
  const now = new Date()
  let h =
    (now.getHours() % 12) + now.getMinutes() / 60 + now.getSeconds() / 3600
  let m = now.getMinutes() + now.getSeconds() / 60
  let s = now.getSeconds() + now.getMilliseconds() / 1000
  h *= 30
  m *= 6
  s *= 6
  transformHour.value = `rotate(${h}deg)`
  transformMinute.value = `rotate(${m}deg)`
  transformSecond.value = `rotate(${s}deg)`
}
</script>

<template>
  <div class="clock">
    <div class="point"></div>
    <div v-for="item in hands" class="hand" :class="item"></div>
    <div class="marker">
      <span v-for="i in 4" :class="`marker-${i}`"></span>
    </div>
  </div>
</template>

<style scoped>
.clock {
  position: relative;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow1);
  border-radius: 50%;

  .point {
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    background-color: var(--active-color);
    border-radius: 50%;
    z-index: 300;
  }

  .hand {
    position: absolute;
    bottom: 5rem;
    border-radius: 0.2rem;
    z-index: 200;
    transform-origin: bottom;
  }

  .hour {
    width: 0.3rem;
    height: 2.6rem;
    background: hsl(var(--hue), 32%, 76%);
    transform: v-bind(transformHour);
  }

  .minute {
    width: 0.2rem;
    height: 3.8rem;
    background: var(--text-color);
    transform: v-bind(transformMinute);
  }

  .second {
    width: 0.1rem;
    height: 4.3rem;
    background: var(--active-color);
    transform: v-bind(transformSecond);
  }

  .marker {
    position: relative;
    width: 93%;
    height: 93%;
    box-shadow: var(--shadow2);
    border-radius: inherit;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 70%;
      box-shadow: var(--shadow3);
      border-radius: inherit;
      filter: blur(1px);
    }

    span {
      position: absolute;
      box-shadow: var(--shadow3);
      border-radius: 0.1rem;
    }

    .marker-1,
    .marker-2 {
      width: 0.3rem;
      height: 0.8rem;
      left: 4.5rem;
    }

    .marker-3,
    .marker-4 {
      width: 0.8rem;
      height: 0.3rem;
      top: 4.5rem;
    }

    .marker-1 {
      top: 2%;
    }

    .marker-2 {
      top: 98%;
      transform: translateY(-0.8rem);
    }

    .marker-3 {
      left: 2%;
    }

    .marker-4 {
      left: 98%;
      transform: translateX(-0.8rem);
    }
  }
}
</style>
