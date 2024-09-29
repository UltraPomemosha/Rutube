<script lang="ts" setup>
import HomeSectionLayout from "./HomeSectionLayout.vue"
import type { ISectionSliderItem } from "./support"

const slider: ISectionSliderItem[] = [
  { id: "Аниме", src: new Image().src = '/src/assets/images/anime.png', title: "Аниме" },
  { id: "Музыка", src: new Image().src = '/src/assets/images/music.png', title: "Музыка" },
  { id: "Кино", src: new Image().src = '/src/assets/images/cinema.png', title: "Кино" },
  { id: "Обучение", src: new Image().src = '/src/assets/images/learning.png', title: "Обучение" },
] 
</script>

<template>
  <HomeSectionLayout :slider="slider">
    <template #title>Рекомендации</template>
  </HomeSectionLayout>
</template>

<style lang="scss" scoped>
/* */
</style>
