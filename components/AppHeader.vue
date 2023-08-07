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
          style="height: 100vh"
          :navigation="{
            nextEl: '.arrow-gallery-next',
            prevEl: '.arrow-gallery-prev',
          }"
        >
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-content col-12">
                  <h1
                    class="description-title text-outline white text-header font-black uppercase"
                  >
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
                <div class="header-background-content col-12">
                  <h1
                    class="description-title text-outline white text-header font-black uppercase"
                  >
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
                <div class="header-background-content col-12">
                  <h1
                    class="description-title white text-outline text-header font-black uppercase"
                  >
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
                <div class="header-background-content col-12">
                  <h1
                    class="description-title text-outline white text-header font-black uppercase"
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
            <i class="fa-regular fa-hand fa-2x"></i
          ></NuxtLink>
        </button>
      </div>
    </div>
  </header>
</template>
