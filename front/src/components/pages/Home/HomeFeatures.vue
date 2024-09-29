<script lang="ts" setup>
import HomeSectionLayout from "./HomeSectionLayout.vue"
import type { ISectionSliderItem } from "./support"

const slider: ISectionSliderItem[] = [
  {
    id: "Быстрый поиск",
    src: (new Image().src = "/src/assets/images/fast-search.png"),
    title: "Быстрый поиск",
  },
  {
    id: "Вдохновение",
    src: (new Image().src = "/src/assets/images/inspiration.png"),
    title: "Вдохновение",
  },
  {
    id: "Экономия",
    src: (new Image().src = "/src/assets/images/saving.png"),
    title: "Экономия",
  },
  {
    id: "Мультифункционал",
    src: (new Image().src = "/src/assets/images/multifunctional.png"),
    title: "Мультифункционал",
  },
]
</script>

<template>
  <HomeSectionLayout :slider="slider">
    <template #title> Фичи </template>
  </HomeSectionLayout>
</template>

<style lang="scss" scoped>
/* */
</style>
