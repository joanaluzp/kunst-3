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
  let prevScrollpos = window.pageYOffset;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector(".footer-wrapper").style.display = "flex";
  } else {
    document.querySelector(".footer-wrapper").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};
onMounted(() => {
  window.addEventListener("scroll", handleScrollFooter);
});
</script>
