<script lang="ts" setup>
import HomeSectionLayout from "./HomeSectionLayout.vue"
import type { ISectionSliderItem } from "./support"

const slider: ISectionSliderItem[] = [
  {
    id: "ИИ",
    src: (new Image().src = "/src/assets/images/AI.png"),
    title: 'ИИ'
  },
  {
    id: "Скорость",
    src: (new Image().src = "/src/assets/images/speed.png"),
    title: 'Скорость'
  },
  {
    id: "Управление",
    src: (new Image().src = "/src/assets/images/administration.png"),
    title: 'Управление'
  },
  {
    id: "Нейросеть",
    src: (new Image().src = "/src/assets/images/AI-variety.png"),
    title: 'Нейросеть'
  },
]
</script>

<template>
  <HomeSectionLayout :slider="slider">
    <template #title>
      Функции
    </template>
  </HomeSectionLayout>
</template>

<style lang="scss" scoped>
/* */
</style>
