<script lang="ts" setup>
import ULink from "@/components/ui/u-link/ULink.vue"
import ClassmatesIcon from "@/components/icons/ClassmatesIcon.vue"
import VKIcon from "@/components/icons/VKIcon.vue"
import YandexIcon from "@/components/icons/YandexIcon.vue"
</script>

<template>
  <div class="socials">
    <ULink class="socials__link" href="#">
      <ClassmatesIcon />
    </ULink>
    <ULink class="socials__link" href="#">
      <YandexIcon />
    </ULink>
    <ULink class="socials__link" href="#">
      <VKIcon />
    </ULink>
  </div>
</template>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;

  & > *::before {
    background-color: var(--base-text-color);
  }
}
</style>
