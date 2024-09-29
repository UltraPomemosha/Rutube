<script lang="ts" setup>
import HomeSectionLayout from "./HomeSectionLayout.vue"
import type { ISectionSliderItem } from "./support"

const slider: ISectionSliderItem[] = [
  {
    id: "Интеграция",
    src: (new Image().src = "/src/assets/images/integration.png"),
    title: "Интеграция",
  },
  {
    id: "Гарантия",
    src: (new Image().src = "/src/assets/images/guarantee.png"),
    title: "Гарантия",
  },
  {
    id: "Обмен",
    src: (new Image().src = "/src/assets/images/share.png"),
    title: "Обмен",
  },
  {
    id: "Поддержка",
    src: (new Image().src = "/src/assets/images/support.png"),
    title: "Поддержка",
  },
]
</script>

<template>
  <HomeSectionLayout :slider="slider">
    <template #title> О приложении </template>
  </HomeSectionLayout>
</template>

<style lang="scss" scoped>
/* */
</style>
