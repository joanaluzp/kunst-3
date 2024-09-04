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
              <video autoplay loop muted webkit-playsinline playsinline>
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
        <NuxtLink :to="localePath({ name: 'programme' })">
          <div class="arrow-prev arrow-gallery-down">
            <p class="description-text font-italic lowercase">
              {{ $t("global.homepage.link") }}
            </p>
          </div>
        </NuxtLink>
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
