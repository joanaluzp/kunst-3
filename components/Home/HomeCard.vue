<template>
  <div class="header-background">
    <Swiper
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
      <SwiperSlide v-for="(item, index) in headerData" :key="item.id">
        <div class="container-fluid">
          <div class="row">
            <div class="header-background-text col-12">
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
    </Swiper>
  </div>
  <div class="slider-arrows-wrapper">
    <button
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
    </button>
    <button type="button" class="arrow-prev arrow-gallery-down">
      <NuxtLink to="/programme"> <img src="/images/sign-next.svg" /></NuxtLink>
    </button>
  </div>
</template>
<script setup>
import data from "../../database/db.json";
const headerData = ref([]);

const hoverEffect = () => {
  let elm = document.querySelector(".swiper");
  if (elm) {
    const height = elm.clientHeight;
    const width = elm.clientWidth;

    elm.addEventListener("mousemove", handleMove);
    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 10 * ((xVal - width / 2) / width);
      const xRotation = -10 * ((yVal - height / 2) / height);
      const cssConvertion =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";
      elm.style.transform = cssConvertion;
    }
    elm.addEventListener("mouseout", function () {
      elm.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
  }
};

onMounted(() => {
  headerData.value = data.header;
  hoverEffect();
});
</script>
