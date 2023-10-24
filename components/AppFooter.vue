<template>
  <footer :class="footerVisible ? 'd-block' : 'd-none'">
    <div
      class="d-flex align-items-center justify-content-between footer-wrapper"
    >
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-12 col-md-8 left d-flex">
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                {{ $t('global.footer.info_1') }}
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                {{ $t('global.footer.info_2') }}
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                {{ $t('global.footer.info_3') }}
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                {{ $t('global.footer.info_4') }}
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                {{ $t('global.footer.info_5') }}
              </p></NuxtLink
            >
          </div>
          <div class="col-12 col-md-4 right">
            <p class="description-text font-italic small black">
              © 2023–2023 Kunst 3.  {{ $t('global.footer.info_6') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const props = defineProps({
  footerVisible: {
    type: Boolean,
  },
});
const handleScrollFooter = () => {
  const footer = document.querySelector(".footer-wrapper");
  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;

  if (currentScroll >= scrollableHeight) {
    footer.style.bottom = "0";
  } else {
    footer.style.bottom = "-100px";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollFooter);
});
</script>
