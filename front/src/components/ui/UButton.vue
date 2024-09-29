<script lang="ts" setup></script>

<template>
  <button class="button">
    <div class="button__container">
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  display: block;

  position: relative;
  background-color: var(--accent-red-color);

  &__container {
    height: 100%;
    @extend .text-16;

    position: relative;
    z-index: 3;
    color: var(--second-gray-color);

    transition: color 0.2s linear;
  }

  &::before {
    content: "";
    width: 100%;
    height: 0;

    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: var(--third-text-color);

    transition: height 0.3s cubic-bezier(1,.52,.95,.72);
  }

  &:hover {
    .button__container {
      color: var(--accent-red-color);
    }

    &::before {
      height: 100%;
    }
  }
}
</style>
