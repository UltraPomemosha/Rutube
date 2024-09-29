<script lang="ts" setup>
import UButton from "@/components/ui/UButton.vue"
</script>

<template>
  <footer class="footer">
    <p class="footer__title text-40">Подписка от 99 р.</p>
    <UButton class="footer__button">Попробовать бесплатно</UButton>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &__title {
    color: var(--base-text-color);
  }

  &__button {
    color: var(--base-text-color);
  }
}
</style>
