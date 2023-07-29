<template>
  <header>
    <div class="container">
      <div class="row">
        <div
          class="navbar-menu-logo col-4 d-none d-lg-flex align-items-center justify-content-start"
          :style="openMenu ? ['z-index: 6'] : ''"
        >
          <NuxtLink to="/">
            <img
              src="../assets/images/kunst_3_logo.png"
              :style="
                openMenu
                  ? ['opacity: 0.2', 'transition:none']
                  : 'transition: all 0.3s ease-in-out'
              "
          /></NuxtLink>
        </div>
      </div>
    </div>
    <nav class="navbar" :class="openMenu ? 'open' : ''">
      <div class="container">
        <div class="row justify-content-end">
          <div
            class="navbar-menu-list col-12 d-flex align-items-center justify-content-end"
            :style="openMenu ? 'background-color: transparent' : ''"
          >
            <div class="d-flex align-items-center">
              <div
                class="menu-list-icon icon-lang d-none d-md-flex justify-content-center align-items-center"
                :class="openMenu ? 'v-hidden' : 'v-visible'"
                :style="openMenu ? 'transition:none' : ''"
              >
                <i class="fa-solid fa-globe fa-lg"></i>
                <p class="description-text uppercase grey-02">A⇆ü</p>
                <ul class="menu-list-options">
                  <li class="description-text grey-01 capitalize small">
                    <a href="">Language</a>
                  </li>
                  <li class="description-text black option capitalize small">
                    <a href="">English</a>
                  </li>
                  <li class="description-text black option capitalize small">
                    <a href="">Deutsch</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="menu-list-icon icon-help d-none d-md-flex justify-content-center align-items-center"
                :class="openMenu ? 'v-hidden' : 'v-visible'"
                :style="openMenu ? 'transition:none' : ''"
              >
                <i class="fa-regular fa-circle-question fa-lg"></i>
                <p class="description-text uppercase grey-02">HELP</p>
                <ul class="menu-list-options">
                  <li class="description-text grey-01 capitalize small">
                    Help
                  </li>
                  <li class="description-text black option capitalize small">
                    <a href="">how to get here</a>
                  </li>
                  <li class="description-text black option capitalize small">
                    <a href="">FAQ</a>
                  </li>
                  <li class="description-text black option capitalize small">
                    <a href="">support KUNST 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="menu-list-icon icon-search d-none d-md-flex justify-content-center align-items-center"
                :class="openMenu ? 'v-hidden' : 'v-visible'"
                :style="openMenu ? 'transition:none' : ''"
              >
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                <p class="description-text uppercase grey-02">SEARCH</p>
                <div class="menu-list-options search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="search"
                    id="site-search"
                    class="search"
                    name="search"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="menu-list-icon icon-menu d-flex justify-content-center align-items-center"
                @click="openMenu = !openMenu"
                :class="{ open: openMenu }"
              >
                <i
                  class="fa-solid fa-lg"
                  :class="openMenu ? 'fa-xmark' : 'fa-bars'"
                  :style="openMenu ? 'color: #000000' : ''"
                ></i>
                <p class="description-text uppercase grey-02 d-none d-md-block">
                  {{ openMenu ? "CLOSE" : "MENU" }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-menu" :class="openMenu ? 'open' : 'close'">
          <ul class="menu-list-options d-flex flex-column">
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  about us
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  Information for media
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  people
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  partners
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  events
                </p></NuxtLink
              >
            </li>
            <li>
              <p class="description-text black uppercase big font-bold">
                <span>
                  <i class="fa-regular fa-circle-question"></i>
                </span>
                help
              </p>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text grey-01 capitalize">
                  how to get here
                </p></NuxtLink
              >
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text grey-01 capitalize">
                  FAQ
                </p></NuxtLink
              >
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text grey-01 capitalize">
                  support KUNST 3
                </p></NuxtLink
              >
            </li>
            <li>
              <p class="description-text black uppercase big font-bold">
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="search"
                  id="site-search"
                  class="search"
                  name="search"
                  placeholder="search"
                  @keyup.enter="openMenu = false"
                />
              </p>
            </li>
            <li>
              <div class="d-flex justify-content-end">
                <div
                  class="navbar-menu-social d-inline-flex align-items-center"
                >
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="header-background-wrapper"
      :style="openMenu ? 'opacity: 0.2' : ''"
    >
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
          @swiper="setGallerySwiper"
        >
          <SwiperSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="header-background-text col-12">
                  <div class="left col-6 col-lg-4">
                    <h1
                      class="description-title white text-outline text-header font-black uppercase"
                    >
                      Classic Movies
                    </h1>
                    <span
                      class="description-title white text-outline text-header font-italic"
                      >Wednesday(s)</span
                    >
                  </div>
                  <div class="right col-6 col-lg-4">
                    <p class="description-text white text-outline text-right">
                      <span>/ </span>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor molestias ipsam nisi ad animi
                      soluta non unde minima.
                    </p>
                  </div>
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
                  <div class="left col-6 col-sm-4">
                    <h1
                      class="description-title white text-outline text-header font-black uppercase"
                    >
                      if i fall you lose
                    </h1>
                    <span
                      class="description-title white text-outline text-header font-italic"
                      >performance</span
                    >
                  </div>
                  <div class="right col-6 col-sm-4">
                    <p class="description-text white text-outline text-right">
                      <span>/ </span>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor molestias ipsam nisi ad animi
                      soluta non unde minima.
                    </p>
                  </div>
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
                  <div class="left col-6 col-lg-4">
                    <h1
                      class="description-title white text-outline text-header font-black uppercase"
                    >
                      angela schanelec
                    </h1>
                    <span
                      class="description-title white text-outline text-header font-italic"
                    ></span>
                  </div>
                  <div class="right col-6 col-lg-4">
                    <p class="description-text white text-outline text-right">
                      <span>/ </span>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor molestias ipsam nisi ad animi
                      soluta non unde minima.
                    </p>
                  </div>
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
                  <div class="left col-6 col-lg-4">
                    <h1
                      class="description-title white text-outline text-header font-black uppercase"
                    >
                      super 8 workshop
                    </h1>
                    <span
                      class="description-title white text-outline text-header font-italic"
                    >
                      sunday(s)</span
                    >
                  </div>
                  <div class="right col-6 col-lg-4">
                    <p class="description-text white text-outline text-right">
                      <span>/ </span>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor molestias ipsam nisi ad animi
                      soluta non unde minima.
                    </p>
                  </div>
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
        class="slider-arrows-wrapper d-none d-md-flex justify-content-between align-items-center"
      >
        <button type="button" class="arrow-prev arrow-gallery-prev">
          <i class="fa-solid fa-caret-left fa-lg"></i>
        </button>
        <button type="button" class="arrow-prev arrow-gallery-next">
          <i class="fa-solid fa-caret-right fa-lg"></i>
        </button>
        <button type="button" class="arrow-prev arrow-gallery-down">
          <i class="fa-regular fa-hand fa-2x"></i>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
const openMenu = ref(false);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar-menu-list').style.top = "0";
  } else {
    document.querySelector('.navbar-menu-list').style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
