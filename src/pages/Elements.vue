<script setup>
import { ref, watch } from 'vue'
import Switch from '@/components/elements/Switch.vue'
import Checkbox from '@/components/elements/Checkbox.vue'
import Radio from '@/components/elements/Radio.vue'
import Button from '@/components/elements/Button.vue'
import Clock from '@/components/elements/Clock.vue'
import LCD from '@/components/elements/LCD.vue'
import Card from '@/components/elements/Card.vue'
import Tab from '@/components/elements/Tab.vue'
import Search from '@/components/elements/Search.vue'
import Text from '@/components/elements/Text.vue'
import Icon from '@/components/elements/Icon.vue'
import Slider from '@/components/elements/Slider.vue'

const hue = ref(275)
const emit = defineEmits(['changeHue'])

watch(hue, newHue => {
  emit('changeHue', newHue)
})
</script>

<template>
  <div class="container">
    <div class="main el">
      <div class="switch-el">
        <Switch :switch-id="'switch1'" />
        <Switch :switch-id="'switch2'" :is-checked="true" />
      </div>
      <div class="checkbox-el">
        <Checkbox :checkbox-id="'checkbox1'" />
        <Checkbox :checkbox-id="'checkbox2'" :is-checked="true" />
      </div>
      <div class="radio-el">
        <Radio :radio-id="'radio1'" />
        <Radio :radio-id="'radio2'" :is-checked="true" />
      </div>
      <div class="button-el">
        <Button :is-primary="true" />
        <Button />
      </div>
      <div class="clock-el">
        <Clock />
      </div>
      <div class="lcd-el">
        <LCD />
      </div>
      <div class="card-el">
        <Card />
      </div>
      <div class="tab-el">
        <Tab />
      </div>
      <div class="search-el">
        <Search />
      </div>
      <div class="text-el">
        <Text />
      </div>
      <div class="icon-el">
        <Icon />
        <Icon name="user" />
        <Icon name="cog" />
      </div>
      <div class="slider-el">
        <Slider v-model="hue" />
      </div>
    </div>
  </div>
</template>

<style>
.main.el {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5rem;
  grid-row-gap: 2.5rem;
  padding: 3rem;
  box-shadow: var(--shadow1);
  border-radius: 3rem;

  .switch-el {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .checkbox-el {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .radio-el {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .switch-el,
  .checkbox-el,
  .radio-el {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .button-el {
    grid-column: 1/2;
    grid-row: 4/6;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
  }

  .clock-el {
    grid-column: 2/3;
    grid-row: 1/3;
    justify-self: center;
  }

  .lcd-el {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  .card-el {
    grid-column: 2/3;
    grid-row: 4/6;
  }

  .tab-el {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  .search-el {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  .text-el {
    grid-column: 3/4;
    grid-row: 3/4;
  }

  .icon-el {
    grid-column: 3/4;
    grid-row: 4/5;
    display: flex;
    justify-content: space-between;
  }

  .slider-el {
    grid-column: 3/4;
    grid-row: 5/6;
    align-self: center;
  }
}
</style>
