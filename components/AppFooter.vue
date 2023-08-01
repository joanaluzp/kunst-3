<template>
  <footer>
    <div class="footer-wrapper d-flex">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center">
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
            <NuxtLink to="/"
              ><p class="description-text font-bold big black">
                contacts
              </p></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
let prevScrollpos = window.pageYOffset;

const handleScrollFooter = () => {
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
