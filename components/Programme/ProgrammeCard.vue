<template>
  <Pixelate />
  <NuxtLink
    :to="'/programme/' + item.id"
    class="programme-grid-item-link"
    v-if="
      searchType === $t('global.programme.category.category_default') ||
      searchType === `${item.category}`
    "
  >
    <div class="programme-grid-item">
      <div class="grid-item-image">
        <img :src="item.image" />
      </div>
      <div class="grid-item-title">
        <h3 class="description-text font-bold big black capitalize">
          {{ item.title.main ? item.title.main : " " }}
        </h3>
        <h4 class="description-text big black capitalize">
          {{ item.title.secondary ? item.title.secondary : " " }}
        </h4>
      </div>
      <div
        class="grid-item-wrapper d-flex justify-content-start align-items-center"
        v-for="(dateItem, dateIndex) in item.date"
        :key="dateIndex"
      >
        <p
          class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
        >
          {{ dateItem.full }}
        </p>
        <div
          class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
        >
          {{ dateItem.time }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
import Pixelate from "../Fx/Pixelate.vue";

const props = defineProps({
  searchType: {
    type: String,
  },
  item: {
    type: Object,
  },
});
</script>
