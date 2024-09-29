<script lang="ts" setup>
import type { LinkProps } from "./support";

const props = defineProps<LinkProps>()
</script>

<template>
  <a :href="props.href" class="link">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
.link {
  $default-color: var(--accent-gray-color);
  padding: 5px;
  display: block;

  color: $default-color;
  position: relative;
  @extend .text-16;

  &::before {
    content: '';
    width: 0%;
    height: 2px;
    display: block;

    background-color: $default-color;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    transition: width 0.3s linear;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
}
</style>
