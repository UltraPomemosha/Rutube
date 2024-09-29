<script lang="ts" setup>
import LogoIcon from "@/components/icons/LogoIcon.vue";
import ULink from "@/components/ui/u-link/ULink.vue";
import USocials from "@/components/ui/u-socials/USocials.vue";
import AppContainer from "../container/AppContainer.vue";
</script>

<template>
  <footer class="footer">
    <AppContainer class="footer__container">
      <LogoIcon :size="100" />

      <ul class="footer__list">
        <li>
          <ULink class="footer__link" href="#">О приложении</ULink>
        </li>
        <li>
          <ULink class="footer__link" href="#">Функции</ULink>
        </li>
        <li>
          <ULink class="footer__link" href="#">Как это работает</ULink>
        </li>
        <li>
          <ULink class="footer__link" href="#">Отзывы</ULink>
        </li>
        <li>
          <ULink class="footer__link" href="#">Цены</ULink>
        </li>
      </ul>

      <ul class="footer__list">
        <li>
          <ULink class="footer__link" href="tel:">8(988)888-88-888</ULink>
        </li>
        <li>
          <ULink class="footer__link" href="mailto:">admin@rutube.ru</ULink>
        </li>
      </ul>

      <div class="footer__about-us">
        <p class="footer__copyright text-16">© Хакатонщики3000.РФ</p>
        <USocials />
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  background-color: var(--second-fill);
  &__container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: 80px;
    row-gap: 5px;

    @media screen and (width <= $bp-890) {
      column-gap: 40px;
    }
  }

  &__list {
    align-self: start;
    & > * {
      width: max-content;
    }
    & > *:not(:first-child) {
      margin-top: 5px;
    }
  }

  &__link {
    color: var(--third-text-color);
    &::before {
      background-color: var(--third-text-color);
    }
  }

  &__about-us {
    flex: 0 0 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &__copyright {
    color: var(--base-text-color);
  }

  @media screen and (width <= $bp-450) {
    &__container {
      align-items: start;
      gap: 15px;
      justify-content: center;
    }
    &__list:first-of-type {
      order: -1;
    }
    &__list:last-of-type {
      flex: 0 0 50%;
      > li {
        width: 100%;
        text-align: center;
      }
    }
    &__about-us {
      flex: 1 1 auto;
      flex-flow: column nowrap;
    }
    &__copyright {
      order: 1;
    }
  }
}
</style>
