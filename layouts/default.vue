<template>
  <div class="main">
    <AppNavbar />
    <NuxtPage />
    <AppFooter :footerVisible="footerVisible" />
  </div>
</template>
<script setup>
const route = useRoute();
const footerVisible = ref(true);
const page = computed({
  get: () => route.name.split("_"),
});

const hideFooter = () => {
  if (page.value[0] === "index") {
    footerVisible.value = false;
  } else {
    footerVisible.value = true;
  }
};

watch(route, () => {
  hideFooter();
});

onMounted(() => {
  hideFooter();
});
</script>
