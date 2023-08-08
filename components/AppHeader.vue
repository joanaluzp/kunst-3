<template>
  <header>
    <div class="header-background-wrapper">
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
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-text col-12">
                  <h1 class="description-title red font-black uppercase">
                    Classic Movies every wednesday
                  </h1>
                </div>
              </div>
            </div>
            <video autoplay muted loop>
              <source
                src="../assets/videos/kunst_3_video_cinema.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-text col-12">
                  <h1 class="description-title red font-black uppercase">
                    if i fall you lose (performance)
                  </h1>
                </div>
              </div>
            </div>
            <video autoplay muted loop>
              <source
                src="../assets/videos/kunst_3_video_performance.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-text col-12">
                  <h1 class="description-title red font-black uppercase">
                    angela schanelec: all the movies
                  </h1>
                </div>
              </div>
            </div>
            <picture>
              <source
                media="(min-width: 768px)"
                src="../assets/images/kunst_3_angela_schanelec.png"
                alt="background"
                title=""
              />
              <img
                src="../assets/images/kunst_3_angela_schanelec.png"
                alt="background"
                title=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-text col-12">
                  <h1
                    class="description-title red text-header font-black uppercase"
                  >
                    super 8 workshop every sunday
                  </h1>
                </div>
              </div>
            </div>
            <video autoplay muted loop>
              <source
                src="../assets/videos/kunst_3_video_super8mm.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        class="slider-arrows-wrapper justify-content-between align-items-center"
      >
        <button
          type="button"
          class="d-none d-md-flex arrow-prev arrow-gallery-prev"
        >
          <i class="fa-solid fa-caret-left fa-lg"></i>
        </button>
        <button
          type="button"
          class="d-none d-md-flex arrow-prev arrow-gallery-next"
        >
          <i class="fa-solid fa-caret-right fa-lg"></i>
        </button>
        <button type="button" class="arrow-prev arrow-gallery-down">
          <NuxtLink to="/programme">
            <img src="../assets/images/sign-next.svg"
          /></NuxtLink>
        </button>
      </div>
      <div class="header-marquee" data-text="K3">
        <p class="d-inline-block description-title font-bold-italic">K3</p>
        <p class="d-inline-block description-title font-bold-italic">K3</p>

      </div>
    </div>
  </header>
</template>
<script setup>
const hover3dEffect = () => {
  let elm = document.querySelector(".swiper");
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
};

onMounted(() => {
  hover3dEffect();
});
</script>
