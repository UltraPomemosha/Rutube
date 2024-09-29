<script lang="ts" setup>
import NextPrevIcon from "@/components/icons/NextPrevIcon.vue";
import UButton from "@/components/ui/UButton.vue";
import { computed, ref } from "vue";
import { getWidthSumWithGap } from "./support";

interface Props {
  contentRef: HTMLElement[] | null
  ids: string[]
}

const props = defineProps<Props>()

const activeIndex = ref<number>(0)

const showButtons = computed(() => ({
  showPrev: activeIndex.value > 0,
  showNext: activeIndex.value < Number(props.contentRef?.length) - 1,
}))

const translateValue = computed<string>(() => {
  const activeEl = props.contentRef?.find((el) => el?.id === props.ids[activeIndex.value])
  const passedElsIds = props.ids.slice(1, activeIndex.value + 1)
  const passedEls = props.contentRef?.filter((el) => passedElsIds.includes(el.id))
  if (activeEl) {
    const value = `${getWidthSumWithGap(24, passedEls || [])}`
    return value
  } else return "0"
})

function previous() {
  if (showButtons.value.showPrev) {
    activeIndex.value--
  }
}

function next() {
  if (showButtons.value.showNext) {
    activeIndex.value++
  }
}
</script>

<template>
  <div class="slider">
    <UButton v-if="showButtons.showPrev" @click="previous" class="slider__button _previous">
      <NextPrevIcon class="icon" />
    </UButton>
    <div class="slider__content">
      <slot></slot>
    </div>
    <UButton v-if="showButtons.showNext" @click="next" class="slider__button _next">
      <NextPrevIcon class="icon" />
    </UButton>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  --translate: v-bind(translateValue);
  position: relative;
  overflow-x: hidden;

  &__content {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 24px;
    transform: translateX(calc(var(--translate) * -1px));

    :slotted(*) {
      flex: 1 1 25%;
    }
  }

  &__button {
    padding: 8px;
    display: block;
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);

    background-color: var(--base-fill);
    border: 1px solid var(--accent-gray-color);
    box-shadow: 0 -5px 10px var(--base-fill);

    &::before {
      background-color: var(--second-fill);
    }

    &:hover::before {
      background-color: var(--second-fill);
    }

    & .icon {
      display: block;
      width: max-content;
      height: max-content;
      margin: auto;
      transform: rotate(90deg);
    }

    &._previous {
      left: 18px;
      transform: translateY(-50%) rotate(90deg);
    }

    &._next {
      right: 0;
      transform: translateY(-50%) rotate(-90deg);
    }
  }
}
</style>
