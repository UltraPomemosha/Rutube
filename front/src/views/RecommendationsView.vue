<script lang="ts" setup>
import AppContainer from "@/components/app/container/AppContainer.vue";
import USearch from "@/components/ui/u-input/USearch.vue";
import UTitle from "@/components/ui/u-title/UTitle.vue";
import { onMounted, ref } from "vue";

const recommendations = ref<any[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

onMounted(async () => {
  // const data = await fetch('/') as unknown as Promise<never[]>
  // recommendations.value = await data
})
</script>

<template>
  <main class="recommendations-page">
    <AppContainer class="recommendations-page__container">
      <USearch id="recommendations-page-search" name="recommendations-page-search" />
      <article class="recommendations-page__videos">
        <article class="recommendations-page__video" :class="[index < 6 ? 'big': 'small']" v-for="(video, index) in recommendations">
          <div class="video-img"></div>
          <div class="video-footer">
            <UTitle tag="h4">{{video}} Video</UTitle>
            <button class="video-footer__late"></button>
            <div class="video-footer__watch-detect"></div>
          </div>
        </article>
      </article>
    </AppContainer>
  </main>
</template>

<style lang="scss" scoped>
.recommendations-page {
  padding: 40px 0;
  &__videos {
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    row-gap: 60px;
    column-gap: 25px;
  }
  &__video {
    & > .video-img {
      width: 100%;
      aspect-ratio: 1/0.6;

      background-color: var(--second-fill)
    }

    .video-footer {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 10px;

      &__late {
        margin-left: auto;
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
      } 

      &__watch-detect {
        display: block;
        flex: 0 0 13px;
        width: 13px;
        height: 13px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
    &.big {
      flex: 0 0 calc(33% - 25px);
    }
    &.small {
      flex: 0 0 calc(25% - 25px);
    }
  }
}
</style>
