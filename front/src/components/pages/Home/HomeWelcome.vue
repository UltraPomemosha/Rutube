<script lang="ts" setup>
import AppContainer from "@/components/app/container/AppContainer.vue";
import UTitle from "@/components/ui/u-title/UTitle.vue";
import UButton from "@/components/ui/UButton.vue";
</script>

<template>
  <section class="welcome">
    <AppContainer class="welcome__container">
      <UTitle class="welcome__title">Откройте мир контента RuTube</UTitle>
      <p class="welcome__description text-24">Персонализированные рекомендации для новых пользователей видеохостинга</p>
      <UButton class="welcome__button text-24">Попробуйте бесплатно</UButton>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  padding: 40px 0;
  max-height: 832px - 110px;
  height: 100%;
  min-height: 832px - 110px;
  display: flex;
  flex-flow: row nowrap;
  align-items: end;
  &__container {
    display: grid;
    grid-template-columns: 33% max-content;
    grid-template-rows: max-content 1fr;
    justify-content: space-between;
    align-items: end;
    row-gap: 100px;
  }
  &__title {
    grid-column: 1/3;
    grid-row: 1/1;
  }
  &__description {
    color: var(--base-text-color);
  }
  &__button {
    color: var(--base-text-color);
  }

  @media screen and (width <= $bp-590) {
    &__container {
      row-gap: 20px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, max-content);
      justify-content: center;
    }

    &__title {
      grid-column: unset;
      grid-row: unset;
      text-align: center;
    }

    &__description {
      text-align: center;
    }
    &__button {
      width: max-content;
      margin: 0 auto;
    }
  }
}
</style>
