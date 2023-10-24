<template>
  <div class="homepage-background">
    <Swiper
      v-if="$tm('events.homepage').length > 0"
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :speed="1000"
      :loop="true"
      :autoplay="{
        delay: 5000,
      }"
      :navigation="{
        nextEl: '.arrow-gallery-next',
        prevEl: '.arrow-gallery-prev',
      }"
    >
      <SwiperSlide
        v-for="item in $tm('events.homepage')"
        :item="item"
        :key="item.id"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="homepage-background-text col-12">
              <h1
                class="description-title red font-italic bigger uppercase"
              >
                {{ item.description.loc.source }}
              </h1>
            </div>
          </div>
        </div>
        <video autoplay muted loop>
          <source :src="item.video.loc.source" type="video/mp4" />
          {{ item.alt.loc.source }}
        </video>
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="slider-arrows-wrapper">
    <!--     <button
          type="button"
          class="d-none d-md-block arrow-prev arrow-gallery-prev"
        >
          <i class="fa-solid fa-caret-left fa-lg"></i>
        </button>
        <button
          type="button"
          class="d-none d-md-block arrow-prev arrow-gallery-next"
        >
          <i class="fa-solid fa-caret-right fa-lg"></i>
        </button> -->
    <button type="button" class="arrow-prev arrow-gallery-down">
      <NuxtLink :to="localePath({ name: 'programme' })">
        <img src="/images/sign-next.svg"
      /></NuxtLink>
    </button>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();
/* import data from "../../database/db.json";
const homepageData = ref([]);
 */
onMounted(() => {
  /*   homepageData.value = data.homepage;
   */
  /* hoverEffect(); */
});
</script>
