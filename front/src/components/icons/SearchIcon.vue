<script lang="ts" setup>
import {type IconProps} from './support'

const {color = 'var(--base-white-color)', size = 35} = defineProps<IconProps>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 35.0068 35.0068"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs />
    <path
      id="Vector"
      d="M33.33 33.33L25.85 25.84M25.85 25.85C23.19 28.5 19.59 30 15.83 
        30C12.07 30 8.47 28.5 5.81 25.85C3.15 23.19 1.66 19.59 1.66 15.83C1.66 
        12.07 3.15 8.47 5.81 5.81C8.47 3.15 12.07 1.66 15.83 1.66C19.59 1.66 23.19 
        3.15 25.85 5.81C28.5 8.47 30 12.07 30 15.83C30 19.59 28.5 23.19 25.85 25.85Z"
      :stroke="color"
      stroke-opacity="0.220000"
      stroke-width="3.333333"
      stroke-linecap="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
