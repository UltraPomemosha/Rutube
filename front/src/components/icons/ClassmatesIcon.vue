<script lang="ts" setup>
import type { IconProps } from "./support";

const { size = 30, color = "var(--base-white-color)" } = defineProps<IconProps>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip1_14">
        <rect
          rx="0.500000"
          width="29.000000"
          height="29.000000"
          transform="translate(0.500000 0.500000)"
          :fill="color"
          fill-opacity="0"
        />
      </clipPath>
    </defs>
    <rect
      rx="0.500000"
      width="29.000000"
      height="29.000000"
      transform="translate(0.500000 0.500000)"
      :fill="color"
      fill-opacity="0"
    />
    <g clip-path="url(#clip1_14)">
      <path
        d="M22.28 15.92C21.93 15.21 20.95 14.61 19.63 15.62C17.84 17.04 14.99 17.04 14.99 
          17.04C14.99 17.04 12.14 17.04 10.36 15.62C9.04 14.61 8.06 15.21 7.71 15.92C7.08 
          17.17 7.78 17.78 9.37 18.79C10.73 19.67 12.59 20 13.79 20.12L12.79 21.12C11.37 
          22.53 9.99 23.9 9.06 24.85C8.49 25.42 8.49 26.33 9.06 26.87L9.23 27.07C9.79 27.63 
          10.72 27.63 11.28 27.07L14.99 23.35C16.43 24.76 17.79 26.12 18.74 27.07C19.31 27.63 
          20.22 27.63 20.79 27.07L20.96 26.87C21.53 26.33 21.53 25.42 20.96 24.85L17.23 21.12L16.24 
          20.11C17.43 20 19.27 19.66 20.62 18.79C22.21 17.78 22.91 17.17 22.28 15.92ZM14.99 5.71C16.72 
          5.71 18.12 7.11 18.12 8.82C18.12 10.55 16.72 11.93 14.99 11.93C13.27 11.93 11.87 10.55 
          11.87 8.82C11.87 7.11 13.27 5.71 14.99 5.71ZM14.99 15.15C18.49 15.15 21.32 12.32 21.32 
          8.82C21.32 7.14 20.65 5.53 19.47 4.35C18.28 3.16 16.67 2.5 14.99 2.5C13.32 2.5 11.71 
          3.16 10.52 4.35C9.34 5.53 8.67 7.14 8.67 8.82C8.67 12.32 11.49 15.15 14.99 15.15Z"
        :fill="color"
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
