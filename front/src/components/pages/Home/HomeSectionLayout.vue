<script lang="ts" setup>
import ULink from "@/components/ui/u-link/ULink.vue"
import USlider from "@/components/ui/u-slider/USlider.vue"
import UTitle from "@/components/ui/u-title/UTitle.vue"
import { computed, useTemplateRef, type ShallowRef } from "vue"
import type { ISectionSliderItem } from "./support"

interface Props {
  slider: ISectionSliderItem[]
}

const props = defineProps<Props>()

const slidersRef = useTemplateRef("sliders") as unknown as ShallowRef<HTMLElement[] | null>

const slidersIds = computed(() => props.slider.map((el) => el.id))
</script>

<template>
  <section class="section-layout">
    <UTitle class="section-layout__title">
      <slot name="title"></slot>
    </UTitle>
    <ULink href="#" class="section-layout__show-more"> Посмотреть ещё </ULink>
    <USlider class="section-layout__slider" :content-ref="slidersRef" :ids="slidersIds">
      <article
        :id="id"
        class="section-layout__slider-item"
        v-for="{ id, src, title } in props.slider"
        :key="title"
        ref="sliders"
      >
        <img :src="src" :alt="title" />
        <UTitle tag="h3">{{ title }}</UTitle>
      </article>
    </USlider>
  </section>
</template>

<style lang="scss" scoped>
.section-layout {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  align-items: center;
  gap: 20px;

  &__show-more {
    justify-self: end;
    color: var(--base-text-color);
    &::before {
      background-color: var(--base-text-color);
    }
  }

  &__slider {
    grid-column: 1/3;
    grid-row: 2/2;
    
    :deep(.slider__content) {
      align-items: stretch;
    }

    &-item {
      max-width: max-content;
      min-width: 100px;

      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      color: var(--second-text-color);

      > img {
        flex: 0 0 auto;
        margin: auto 0;
        width: clamp(100px, 100%, 242px);
        display: block;

        transform: scale(1);
        transition: transform 0.3s linear;
      }

      > *:last-child {
        flex: 0 0 auto;
      }

      &:hover {
        cursor: pointer;
        > img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
