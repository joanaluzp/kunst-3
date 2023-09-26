<template>
  <div class="main">
    <client-only> <AppNavbar /></client-only>
    <NuxtPage />
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
  if (page.value[0] === "programme" || page.value[0] === "programme-id") {
    footerVisible.value = true;
  } else {
    footerVisible.value = false;
  }
};

watch(route, () => {
  hideFooter();
});


onMounted(() => {
  hideFooter();
});
</script>
