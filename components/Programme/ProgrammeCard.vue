<template>
  <Pixelate />
  <NuxtLink
    :to="'/programme/' + item.id"
    class="programme-grid-item-link"
    v-if="
      searchType === $t('global.programme.category.category_default') ||
      searchType === `${item.category.loc.source}`
    " >
    <div class="programme-grid-item">
      <div class="grid-item-image">
        <img :src="item.image.loc.source" />
      </div>
      <div class="grid-item-title">
        <h3 class="description-text font-bold big black capitalize">
          {{ item.title.main.loc.source ? item.title.main.loc.source : " " }}
        </h3>
        <h4 class="description-text big black capitalize">
          {{ item.title.secondary.loc.source ? item.title.secondary.loc.source : " " }}
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
          {{ dateItem.full.loc.source }}
        </p>
        <div
          class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
        >
          {{ dateItem.time.loc.source }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
import Pixelate from "../Fx/Pixelate.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();


const props = defineProps({
  searchType: {
    type: String,
  },
  item: {
    type: Object,
  },
});
</script>
