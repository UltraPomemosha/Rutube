<script setup lang="ts">
import AppFooter from "@/components/app/footer/AppFooter.vue";
import AppHeader from "@/components/app/header/AppHeader.vue";
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>
<template>
  <AppHeader />
  <img v-if="isHome" class="img" src="@/assets/images/welcome.jpg"/>
  <RouterView />
  <AppFooter />
</template>

<style lang="scss">
body {
  background-color: var(--base-fill);
}
.img {
  width: 100%;
  height: 772px + $d-header-padding-block * 2;
  display: block;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--accent-gray-color);

  @media screen and (width <= $bp-890) {
    height: 772px + $m-header-padding-block * 2;
  }
}
</style>
