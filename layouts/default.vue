<template>
  <div class="app-page">
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

const hideFooter = () => {

};

watch(() => {
  if (page.value[0] === "programme" || page.value[0] === "programme-id") {
    footerVisible.value = true;
  } else {
    footerVisible.value = false;
  }
});

</script>
