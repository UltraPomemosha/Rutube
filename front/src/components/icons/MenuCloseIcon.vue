<script lang="ts" setup>
import type { IconProps } from "./support"

const {size = 30, color = 'var(--base-white-color)'} = defineProps<IconProps>()
</script>

<template>
  <svg :width="size" :height="size" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 21.32L21 3.32001"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M3 3.32001L21 21.32"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
