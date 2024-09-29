<script lang="ts" setup>
import type { IconProps } from "./support"

const { size = 18, color = "var(--accent-gray-color)" } = defineProps<IconProps>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" fill="none" viewBox="0 0 18 18">
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M15.75 9a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 .75-.75"
      clip-rule="evenodd"
    ></path>
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M15.53 9.53a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 1 0-1.06 1.06L13.94 9l-3.97 3.97a.75.75 0 1 0 1.06 1.06l4.5-4.5"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
