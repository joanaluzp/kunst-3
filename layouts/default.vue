<template>
  <div class="app-page">
    <div class="custom-cursor"></div>
    <AppNavbar />
    <div class="main">
      <NuxtPage />
    </div>
    <AppFooter :footerVisible="footerVisible" />
  </div>
</template>
<script setup>
const route = useRoute();
const footerVisible = ref(false);
const page = computed({
  get: () => route.name.split("_"),
});

const mouseEffect = () => {
  const cursor = document.querySelector(".custom-cursor");
  const links = document.querySelectorAll("a");

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.pageX - 2) + "px";
    cursor.style.top = (e.pageY - 2) + "px";
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5) translate(-50%, -50%)";
    });

    link.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1) translate(-50%, -50%)";
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

onMounted(() => {
  mouseEffect();
});
</script>
