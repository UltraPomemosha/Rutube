<script lang='ts' setup>
import AppContainer from '@/components/app/container/AppContainer.vue';
import TitleIcon from '@/components/icons/TitleIcon.vue';
import UButton from '@/components/ui/UButton.vue';
import USocials from '@/components/ui/u-socials/USocials.vue';
import UTitle from '@/components/ui/u-title/UTitle.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
function toRecommendations() {
  router.push('/recommendations')
}
</script>

<template>
  <main class="auth-page">
    <AppContainer class="auth-page__container">
      <TitleIcon class="auth-page__title"/>
      <input type="text" value="nadin" class="auth-page__input">
      <input type="password" value="1234" class="auth-page__input">

      <UButton @click="toRecommendations" class="auth-page__button">Начать</UButton>

      <section class="auth-page__auth-with auth-with">
        <UTitle tag="h3" class="auth-with__title">Авторизация с помощью</UTitle>
        <USocials class="auth-with__socials"/>
      </section>
    </AppContainer>
  </main>
</template>

<style lang='scss' scoped>
.auth-page {
  padding: 100px 0;

  &__title {
    margin-inline: auto;
    display: block;
  }

  &__input {
    &:first-of-type {
      margin-top: 120px;
    }
    margin-inline: auto;
    margin-top: 20px;
    padding: 10px 20px;

    max-width: 415px;
    width: 100%;
    min-width: 250px;
    display: block;

    border: 1px solid #fff;
    border-radius: 15px;
    color: #fff;
    background-color: transparent;
  }

  &__button {
    margin-inline: auto;
    margin-top: 20px;
    color: #fff;
  }
}

.auth-with {
  margin-inline: auto;
  margin-top: 120px;
  width: max-content;
  &__title {
    color: #fff;
    text-align: center;
  }
  &__socials {
    justify-content: center;
  }
}
</style>

