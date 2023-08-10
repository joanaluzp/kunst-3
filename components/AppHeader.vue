<template>
  <header>
    <div class="header-background-wrapper">
      <div class="header-background">
        <HomeCard />
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
            <img src="/images/sign-next.svg"
          /></NuxtLink>
        </button>
      </div>
      <div class="header-marquee">
        <marquee class="d-none"></marquee>
        <marquee class="marquee" direction="down" behavior="alternate">
          <marquee behavior="alternate"
            ><p class="description-title font-bold-italic">K3</p></marquee
          >
        </marquee>
      </div>
    </div>
  </header>
</template>
<script setup>

</script>
