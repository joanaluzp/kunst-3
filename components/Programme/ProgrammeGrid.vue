<template>
  <section class="section-home-grid">
    <div class="container-fluid">
      <div class="row">
        <div class="home-grid-list-wrapper">
          <ul class="home-grid-list-items">
            <li
              :class="{ active: searchType === 'default' }"
              class="home-grid-list-item"
              @click="searchType = 'default'"
            >
              <p class="description-text black capitalize big">View all</p>
            </li>
            <li
              :class="{ active: searchType === 'cinema' }"
              class="home-grid-list-item"
              @click="searchType = 'cinema'"
            >
              <p class="description-text black capitalize big">cinema</p>
            </li>
            <li
              :class="{ active: searchType === 'concerts' }"
              class="home-grid-list-item"
              @click="searchType = 'concerts'"
            >
              <p class="description-text black capitalize big">concerts</p>
            </li>
            <li
              :class="{ active: searchType === 'performance' }"
              class="home-grid-list-item"
              @click="searchType = 'performance'"
            >
              <p class="description-text black capitalize big">performance</p>
            </li>
            <li
              :class="{ active: searchType === 'exhibitions' }"
              class="home-grid-list-item"
              @click="searchType = 'exhibitions'"
            >
              <p class="description-text black capitalize big">exhibitions</p>
            </li>
            <li
              :class="{ active: searchType === 'workshops' }"
              class="home-grid-list-item"
              @click="searchType = 'workshops'"
            >
              <p class="description-text black capitalize big">workshops</p>
            </li>
          </ul>
        </div>
        <!--<Transition>-->
        <div class="home-grid-items-wrapper pt-70 col-12 offset-lg-3 col-lg-9">
          <ProgrammeCard
            :searchType="searchType"
            v-for="(item, index) in programmeData" :key="item.id" :item="item"
          />
        </div>
        <!--</Transition>-->
      </div>
    </div>
  </section>
</template>
<script setup>
import data from "../../database/db.json";
import ProgrammeCard from './ProgrammeCard.vue';
const programmeData = ref([]);
const searchType = ref("default");
const components = defineComponent({
  ProgrammeCard,
});

const scrollToTop = () => {
  let elmGridList = document.querySelectorAll(".home-grid-list-item");
  elmGridList.forEach((elm) => {
    elm.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
};

const gridList = () => {
  const elm = document.querySelector(".home-grid-list-wrapper");
  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;

  if (currentScroll >= scrollableHeight) {
    elm.style.bottom = "120px";
  } else {
    elm.style.bottom = "80px";
  }
};

onMounted(() => {
  programmeData.value = data.programme;
  scrollToTop();
  window.addEventListener("scroll", gridList);
});
</script>
