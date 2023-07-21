<template>
  <header>
    <div class="container">
      <div class="row">
        <div
          class="navbar-menu-logo col-4 d-flex align-items-center justify-content-start"
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
        <div class="row">
          <div
            class="navbar-menu-list col-12 d-flex align-items-center justify-content-end"
          >
            <div
              class="menu-list-icon d-none d-md-flex flex-column justify-content-center align-items-center"
              :class="openMenu ? 'v-hidden' : 'v-visible'"
              :style="
                openMenu
                  ? 'transition: none'
                  : 'transition: all 0.3s ease-in-out'
              "
            >
              <i class="fa-solid fa-globe fa-xl"></i>
              <p class="description-text uppercase grey-02">A⇆ü</p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize small">
                  Language
                </li>
                <li class="description-text black option capitalize small">
                  English
                </li>
                <li class="description-text black option capitalize small">
                  Deutsch
                </li>
              </ul>
            </div>
            <div
              class="menu-list-icon d-none d-md-flex flex-column justify-content-center align-items-center"
              :class="openMenu ? 'v-hidden' : 'v-visible'"
              :style="
                openMenu
                  ? 'transition: none'
                  : 'transition: all 0.3s ease-in-out'
              "
            >
              <i class="fa-regular fa-circle-question fa-xl"></i>
              <p class="description-text uppercase grey-02">HELP</p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize small">Help</li>
                <li class="description-text black option capitalize small">
                  how to get here
                </li>
                <li class="description-text black option capitalize small">
                  FAQ
                </li>
                <li class="description-text black option capitalize small">
                  support KUNST 3
                </li>
              </ul>
            </div>
            <div
              class="menu-list-icon d-none d-md-flex flex-column justify-content-center align-items-center"
              :class="openMenu ? 'v-hidden' : 'v-visible'"
              :style="
                openMenu
                  ? 'transition: none'
                  : 'transition: all 0.3s ease-in-out'
              "
            >
              <i class="fa-solid fa-magnifying-glass fa-xl"></i>
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
            <div
              class="menu-list-icon d-flex flex-column justify-content-center align-items-center"
              @click="openMenu = !openMenu"
              :class="{ open: openMenu }"
            >
              <i
                class="fa-solid fa-xl"
                :class="openMenu ? 'fa-xmark' : 'fa-bars'"
                :style="openMenu ? ['color: #000000'] : ''"
              ></i>
              <p class="description-text uppercase grey-02 d-none d-md-block">
                {{ openMenu ? "CLOSE" : "MENU" }}
              </p>
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
      <div class="header-logo">
        <img src="../assets/images/kunst_3_logo2.png" alt="logo" />
      </div>
      <div class="header-background">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :speed="1000"
          :loop="true"
          style="height: 100vh"
          :navigation="{
            nextEl: '.arrow-gallery-next',
            prevEl: '.arrow-gallery-prev',
          }"
          @swiper="setGallerySwiper"
        >
          <SwiperSlide>
            <picture>
              <source
                media="(min-width: 768px)"
                src="../assets/images/kunst_3_dance.jpg"
                alt="background"
                title=""
              />
              <img
                src="../assets/images/kunst_3_dance.jpg"
                alt="background"
                title=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                media="(min-width: 768px)"
                src="../assets/images/kunst_3_kino.jpg"
                alt="background"
                title=""
              />
              <img
                src="../assets/images/kunst_3_kino.jpg"
                alt="background"
                title=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                media="(min-width: 768px)"
                src="../assets/images/kunst_3_performance.jpg"
                alt="background"
                title=""
              />
              <img
                src="../assets/images/kunst_3_performance.jpg"
                alt="background"
                title=""
              />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        class="slider-arrows-wrapper d-none d-md-flex justify-content-between align-items-center"
      >
        <button type="button" class="arrow-prev arrow-gallery-prev">
          <i class="fa-solid fa-circle-arrow-left fa-2x"></i>
        </button>
        <button type="button" class="arrow-prev arrow-gallery-next">
          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
const openMenu = ref(false);

const logoHover = () => {
  const logo = document.querySelector('.header-logo img');
  window.addEventListener('scroll', () => {
    logo.style.transform = "rotateZ(40deg) scale(7)";
    setTimeout(
    function() {
      logo.style.transform = "rotateZ(0) scale(1)";
    }, 1000);
  })
};


onMounted(() => {
  logoHover();
})
</script>
