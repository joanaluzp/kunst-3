<template>
  <div v-if="loading" id="loader">
  <p>ola</p>
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

const mouseEffect = () => {
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

watch(() => {
  if (page.value[0] === "programme" || page.value[0] === "programme-id") {
    footerVisible.value = true;
  } else {
    footerVisible.value = false;
  }
});

onBeforeMount(() => {
  loading.value = false;
});

onMounted(() => {
  mouseEffect();
});
</script>
