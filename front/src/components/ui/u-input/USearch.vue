<script lang="ts" setup>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import UButton from "../UButton.vue";
import { type SearchProps } from "./support";

const props = defineProps<SearchProps>()
</script>

<template>
  <label :for="props.id" class="search-label">
    <UButton class="search-button">
      <SearchIcon class="search-icon" />
    </UButton>
    <input :id="props.id" :name="props.name" placeholder="Поиск" type="search" class="search-input" />
  </label>
</template>

<style lang="scss" scoped>
.search-input {
  display: block;
  width: 100%;
  height: 100%;
  @extend .text-16;
  color: rgba(255, 255, 255, 0.18);

  background-color: transparent;
  &::placeholder {
    all: inherit;
  }
}

.search-label {
  padding: 0 20px;
  height: 58px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  border: 1px solid var(--accent-gray-color);
  border-radius: 10px;

  @media screen and (width <= $bp-890) {
    padding: 0 10px;
    height: 38px;
  }
}

.search-icon {
  vertical-align: middle;
  width: 15px;
  height: 15px;
}

.search-button {
  padding: 3px 5px;
  background-color: transparent;
  &::before {
    background-color: transparent;
  }

  &:hover::before {
    background-color: transparent;
  }

  &:hover .search-icon :deep(path) {
    stroke-opacity: 1;
  }
}
</style>
