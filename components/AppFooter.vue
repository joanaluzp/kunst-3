<template>
  <footer>
    <div
      class="d-flex align-items-center justify-content-between footer-wrapper"
    >
      <div class="">
        <NuxtLink to="/"
          ><p class="description-text font-bold big black">
            © 2023–2023 Kunst 3. All rights reserved
          </p></NuxtLink
        >
      </div>
      <div class="">
        <NuxtLink to="/"
          ><p class="description-text font-bold big black">
            contacts
          </p></NuxtLink
        >
        <NuxtLink to="/"
          ><p class="description-text font-bold big black">
            contacts
          </p></NuxtLink
        >
      </div>
    </div>
  </footer>
</template>
<script setup>
const handleScrollFooter = () => {
  const footer = document.querySelector('.footer-wrapper');
  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;

  if (currentScroll >= scrollableHeight) {
    footer.style.bottom = '0';
  } else {
    footer.style.bottom = '-100px';
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollFooter);
});
</script>
