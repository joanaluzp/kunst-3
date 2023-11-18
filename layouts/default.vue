<template>
  <div id="loader">
    <div class="loader-img-wrapper">
      <img src="/images/kunst-3-logo.png" />
    </div>
  </div>
  <div class="app-page">
    <LazyAppNavbar />
    <main class="main">
      <NuxtPage />
    </main>
    <LazyAppFooter :footerVisible="footerVisible" />
  </div>
</template>
<script setup>
const route = useRoute();
const footerVisible = ref(false);
const loading = ref(true);
const page = computed({
  get: () => route.name.split("_"),
});

const hideLoader = () => {
  const loader = document.querySelector("#loader");
  loader.classList.add("hidden");
};

watch(() => {
  if (page.value[0] === "programme" || page.value[0] === "programme-id") {
    footerVisible.value = true;
  } else {
    footerVisible.value = false;
  }
});

onBeforeMount(() => {
  loading.value = false;
  setTimeout(() => {
    hideLoader();
  }, 500);
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>