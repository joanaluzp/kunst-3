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
                support K3
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                partners
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                faq
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                privacy & cookies
              </p></NuxtLink
            >
            <NuxtLink to=""
              ><p class="description-text lowercase font-bold-italic grey-01">
                contacts
              </p></NuxtLink
            >
          </div>
          <div class="col-12 col-md-4 right">
            <p class="description-text small black">
              © 2023–2023 Kunst 3. All rights reserved
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
