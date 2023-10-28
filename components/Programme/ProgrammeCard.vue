<template>
  <NuxtLink
    :to="localePath({ path: '/programme/' + item.id })"
    class="programme-grid-item-link"
    v-if="
      searchType === $t('global.programme.category.category_default') ||
      searchType === $t(`events.programme.${item.id}.category`)
    "
  >
    <div class="programme-grid-item" :class="gridBackground ? 'border' : ''">
      <div class="grid-item-image">
        <img :src="$t(`events.programme.${item.id}.image`)" />
      </div>
      <div class="grid-item-title">
        <h3 class="description-text font-bold big black capitalize">
          {{ $t(`events.programme.${item.id}.title.main`) }}
        </h3>
        <h4 class="description-text big black capitalize">
          {{ $t(`events.programme.${item.id}.title.secondary`) }}
        </h4>
      </div>
      <div
        class="grid-item-wrapper d-flex justify-content-start align-items-center"
      >
        <p
          class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
        >
          {{ $t(`events.programme.${item.id}.date.full`) }}
        </p>
        <div
          class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
        >
          {{ $t(`events.programme.${item.id}.date.time`) }}
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
    required: true,
  },
});
</script>
