<template>
  <header class="header">
    <section class="homepage-background-wrapper">
      <div class="homepage-background">
        <Swiper
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
          <SwiperSlide
            v-for="(item, index) in homepageData"
            :item="item"
            :key="item.id"
          >
            <NuxtLink
              :to="
                localePath({
                  path:
                    '/programme/' +
                    $tm(`events.homepage.${item.id}.programme_id`),
                })
              "
            >
              <div class="container-fluid">
                <div class="row">
                  <div class="homepage-background-text col-12">
                    <h1
                      class="description-title red font-italic bigger uppercase"
                    >
                      {{ $t(`events.homepage.${item.id}.description`) }}
                    </h1>
                  </div>
                </div>
              </div>
              <video autoplay muted playsinline loop>
                <source
                  :src="$t(`events.homepage.${item.id}.video`)"
                  type="video/mp4"
                />
                {{ $t(`events.homepage.${item.id}.alt`) }}
              </video></NuxtLink
            >
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="slider-arrows-wrapper">
        <button type="button" class="arrow-prev arrow-gallery-down">
          <NuxtLink :to="localePath({ name: 'programme' })">
            <img src="/images/sign-next.svg"
          /></NuxtLink>
        </button>
      </div>
      <div class="homepage-background big">
        <Swiper
          v-if="homepageData.length > 0"
          class="big"
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
            v-for="(item, index) in homepageData"
            :item="item"
            :key="item.id"
          >
            <div class="container-fluid">
              <div class="row">
                <div class="homepage-background-text col-12">
                  <h1
                    class="description-title red font-fungal uppercase"
                  >
                    {{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}{{ $t(`events.homepage.${item.id}.description`) }}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </header>
</template>
<script setup>
import data from "../ids/id.json";
const homepageData = ref([]);
const localePath = useLocalePath();
onMounted(() => {
  homepageData.value = data.homepage;
});
</script>
