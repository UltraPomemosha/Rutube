<script lang="ts" setup>
import { type TitleProps } from "./support";
const { tag = "h2" } = defineProps<TitleProps>()
</script>

<template>
  <component :is="`${tag}`" :class="[tag, 'title']">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.title {
  color: var(--base-text-color);
}

.h1 {
  @extend .text-16;
}

.h2 {
  @extend .text-40;
}

.h3 {
  @extend .text-24;
}

.h4 {
  @extend .text-16;
}

.h5 {
  @extend .text-16;
}

.h6 {
  @extend .text-16;
}
</style>
