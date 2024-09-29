<script lang="ts" setup>
import USearch from "@/components/ui/u-input/USearch.vue"
import HomeAbout from "./HomeAbout.vue"
import HomeFeatures from "./HomeFeatures.vue"
import HomeFooter from "./HomeFooter.vue"
import HomeFunctions from "./HomeFunctions.vue"
import HomeRecommendations from "./HomeRecommendations.vue"
import HomeWelcome from "./HomeWelcome.vue"
</script>

<template>
  <HomeWelcome />
  <USearch id="global-search" name="global-search" class="search" />
  <HomeRecommendations />
  <HomeFunctions class="section" />
  <HomeAbout class="section" />
  <HomeFeatures class="section" />
  <HomeFooter class="section" />
</template>

<style lang="scss" scoped>
.search {
  margin: 18px 0;
}
.section {
  margin-top: 80px;
  &:last-child {
    margin-bottom: 80px;
  }

  @media screen and (width <= $bp-890) {
    & {
      margin-top: 40px;
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
</style>
