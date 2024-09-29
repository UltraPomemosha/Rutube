<script lang="ts" setup>
import MenuCloseIcon from "@/components/icons/MenuCloseIcon.vue";
import MenuOpenIcon from "@/components/icons/MenuOpenIcon.vue";
import ULink from "@/components/ui/u-link/ULink.vue";
import { ref, useAttrs } from "vue";

const attrs = useAttrs()
const isOpen = ref(false)
</script>

<template>
  <nav v-bind="attrs" v-show="isOpen" class="mobile-list">
    <MenuCloseIcon class="mobile-list__icon" @click="isOpen = !isOpen" />
    <ULink class="mobile-list__link" href="#">Рекомендации</ULink>
    <ULink class="mobile-list__link" href="#">Функции</ULink>
    <ULink class="mobile-list__link" href="#">О приложении</ULink>
    <ULink class="mobile-list__link" href="#">Фичи</ULink>
    <ULink class="mobile-list__link" href="#">Цены</ULink>
  </nav>
  <MenuOpenIcon class="mobile-list__open" @click="isOpen = !isOpen" />
</template>

<style lang="scss" scoped>
.mobile-list {
  padding: 25px 5px;
  width: 100dvw;
  height: 100dvh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
  gap: 8px;

  background-color: var(--second-fill);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  &__icon {
    align-self: start;
  }

  &__open {
    display: none;

    @media screen and (width <= $bp-890) {
      & {
        display: block;
      }
    }
  }

  &__link {
    color: var(--third-text-color);
    @extend .text-24;
    &::before {
      background-color: var(--third-text-color);
    }
  }
}
</style>
