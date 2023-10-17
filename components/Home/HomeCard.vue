<template>
  <div class="homepage-background">
    <!--     <Swiper
      v-if="homepageData.length > 0"
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
      <SwiperSlide v-for="(item, index) in homepageData" :key="item.id">
        <div class="container-fluid">
          <div class="row">
            <div class="homepage-background-text col-12">
              <h1
                class="description-title red font-bold-italic bigger uppercase"
              >
                {{ item.description }}
              </h1>
            </div>
          </div>
        </div>
        <video autoplay muted loop>
          <source :src="item.video" type="video/mp4" />
          {{ item.alt }}
        </video>
      </SwiperSlide>
    </Swiper> -->
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
      <NuxtLink to="/programme"> <img src="/images/sign-next.svg" /></NuxtLink>
    </button>
  </div>
</template>
<script setup>
/* import data from "../../database/db.json";
const homepageData = ref([]);
 */
onMounted(() => {
  /*   homepageData.value = data.homepage;
   */
  /* hoverEffect(); */
});
</script>
