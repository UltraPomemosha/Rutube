<script lang="ts" setup>
import { type IconProps } from "./support"

const { size = 30, color = "var(--base-white-color)" } = defineProps<IconProps>()
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 
          2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 
          100-2H2a1 1 0 100 2h16z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
