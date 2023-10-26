<template>
  <div id="loader">
    <div class="loader-img-wrapper">
      <img src="/images/kunst-3-logo.png" />
    </div>
  </div>
  <div class="app-page">
    <div v-if="!loading" class="custom-cursor"></div>
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

const cursor = () => {
  const cursor = document.querySelector(".custom-cursor");
  const links = document.querySelectorAll("a");

  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(0.8)";
    });

    link.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
    });
  });
};

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

onMounted(() => {
  cursor();
});
</script>
