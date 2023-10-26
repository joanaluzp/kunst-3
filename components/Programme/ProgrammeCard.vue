<template>
  <NuxtLink
    :to="localePath({ path: '/programme/' + item.id })"
    class="programme-grid-item-link"
    v-if="
      searchType === $t('global.programme.category.category_default') ||
      searchType === `${item.category.loc}`
    "
  >
    <div class="programme-grid-item" :class="gridBackground ? 'border' : ''">
      <div class="grid-item-image">
        <img
          :src="item.image.loc"
        />
      </div>
      <div class="grid-item-title">
        <h3 class="description-text font-bold big black capitalize">
          {{ item.title.main.loc ? item.title.main.loc : " " }}
        </h3>
        <h4 class="description-text big black capitalize">
          {{
            item.title.secondary.loc
              ? item.title.secondary.loc
              : " "
          }}
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
          {{ dateItem.full.loc }}
        </p>
        <div
          class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
        >
          {{ dateItem.time.loc }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const localePath = useLocalePath();
const props = defineProps({
  searchType: {
    type: String,
  },
  gridBackground: {
    type: Boolean,
  },
  item: {
    type: Object,
  },
});
</script>
