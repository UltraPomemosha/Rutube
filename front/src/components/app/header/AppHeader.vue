<script lang="ts" setup>
import LogoIcon from "@/components/icons/LogoIcon.vue"
import ULink from "@/components/ui/u-link/ULink.vue"
import USocials from "@/components/ui/u-socials/USocials.vue"
import UButton from "@/components/ui/UButton.vue"
import { useRouter } from "vue-router"
import AppContainer from "../container/AppContainer.vue"
import HeaderMobileMenu from "./HeaderMobileMenu.vue"

const router = useRouter()
function onBeginClick() {
  router.push('/auth')
}
</script>

<template>
  <header class="header">
    <AppContainer class="header__container">
      <HeaderMobileMenu class="_mobile" />
      <ULink href="/">
        <LogoIcon />
      </ULink>
      <nav class="header__list _desktop">
        <ULink class="header__link" href="/recommendations">Рекомендации</ULink>
        <ULink class="header__link" href="#">Функции</ULink>
        <ULink class="header__link" href="#">О приложении</ULink>
        <ULink class="header__link" href="#">Фичи</ULink>
        <ULink class="header__link" href="#">Цены</ULink>
      </nav>
      <ULink class="header__link _desktop" href="tel:898888888888">8(988)888-88-888</ULink>
      <UButton @click="onBeginClick" class="header__button"> Начать </UButton>
      <USocials />
    </AppContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: $d-header-padding-block 0;
  background-color: transparent;
  $gap: 8px;

  ._mobile {
    display: none;
  }

  &__container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $gap;

    & > *:last-child {
      margin-left: auto;
    }
  }
  &__list {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $gap;
  }
  &__link {
    color: var(--third-text-color);
    &::before {
      background-color: var(--third-text-color);
    }
  }

  &__button {
    color: var(--base-text-color);
  }

  @media screen and (width <= $bp-890) {
    & {
      padding: $m-header-padding-block 0;
    }
    ._desktop {
      display: none;
    }
    ._mobile {
      display: flex;
    }
  }
}
</style>
