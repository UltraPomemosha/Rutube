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
      <clipPath id="clip1_37">
        <rect
          id="gravity-ui:logo-yandex"
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
      id="gravity-ui:logo-yandex"
      rx="0.500000"
      width="29.000000"
      height="29.000000"
      transform="translate(0.500000 0.500000)"
      :fill="color"
      fill-opacity="0"
    />
    <g clip-path="url(#clip1_37)">
      <path
        id="Vector"
        d="M25.31 15C25.31 17.73 24.22 20.35 22.29 22.29C20.35 24.22 17.73 25.31 15 25.31C12.26 25.31 9.64 24.22 7.7 22.29C5.77 20.35 4.68 17.73 4.68 15C4.68 12.26 5.77 9.64 7.7 7.7C9.64 5.77 12.26 4.68 15 4.68C17.73 4.68 20.35 5.77 22.29 7.7C24.22 9.64 25.31 12.26 25.31 15ZM28.12 15C28.12 18.48 26.74 21.81 24.28 24.28C21.81 26.74 18.48 28.12 15 28.12C11.51 28.12 8.18 26.74 5.71 24.28C3.25 21.81 1.87 18.48 1.87 15C1.87 11.51 3.25 8.18 5.71 5.71C8.18 3.25 11.51 1.87 15 1.87C18.48 1.87 21.81 3.25 24.28 5.71C26.74 8.18 28.12 11.51 28.12 15ZM11.5 9.56C11.3 9.25 10.99 9.02 10.62 8.94C10.26 8.85 9.88 8.92 9.56 9.12C9.25 9.31 9.02 9.63 8.94 9.99C8.85 10.36 8.92 10.74 9.12 11.05L12.95 17.18C13.37 17.85 13.59 18.63 13.59 19.42L13.59 21.56C13.59 21.93 13.74 22.29 14 22.55C14.26 22.82 14.62 22.96 15 22.96C15.37 22.96 15.73 22.82 15.99 22.55C16.25 22.29 16.4 21.93 16.4 21.56L16.4 19.42C16.4 18.1 16.03 16.81 15.33 15.69L11.5 9.56ZM20.88 11.05C21.07 10.74 21.14 10.36 21.05 9.99C20.97 9.63 20.74 9.31 20.43 9.12C20.11 8.92 19.73 8.85 19.37 8.94C19 9.02 18.69 9.25 18.49 9.56L16.44 12.84C16.24 13.16 16.18 13.54 16.26 13.91C16.34 14.27 16.57 14.58 16.89 14.78C17.2 14.98 17.58 15.04 17.95 14.96C18.31 14.88 18.63 14.65 18.82 14.34L20.88 11.05Z"
        :fill="color"
        fill-opacity="1.000000"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
