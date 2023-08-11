<template>
  <section class="section-programme-grid">
    <div class="container-fluic">
      <div class="row">
        <div
          class="programme-grid-title-wrapper pt-100 col-12 offset-lg-3 col-lg-9"
        >
          <h1 class="description-title white font-bold-italic bigger uppercase">
            programme
            <span class="description-title white lowercase"> {{ searchType }}</span>
          </h1>
        </div>
        <div class="programme-grid-list-wrapper">
          <ul class="programme-grid-list-items">
            <li
              :class="{ active: searchType === 'all of it! enjoy :-)' }"
              class="programme-grid-list-item"
              @click="searchType = 'all of it! enjoy :-)'"
            >
              <p class="description-text black capitalize big">View all</p>
            </li>
            <li
              :class="{ active: searchType === 'cinema' }"
              class="programme-grid-list-item"
              @click="searchType = 'cinema'"
            >
              <p class="description-text black capitalize big">cinema</p>
            </li>
            <li
              :class="{ active: searchType === 'concerts' }"
              class="programme-grid-list-item"
              @click="searchType = 'concerts'"
            >
              <p class="description-text black capitalize big">concerts</p>
            </li>
            <li
              :class="{ active: searchType === 'performance' }"
              class="programme-grid-list-item"
              @click="searchType = 'performance'"
            >
              <p class="description-text black capitalize big">performance</p>
            </li>
            <li
              :class="{ active: searchType === 'exhibitions' }"
              class="programme-grid-list-item"
              @click="searchType = 'exhibitions'"
            >
              <p class="description-text black capitalize big">exhibitions</p>
            </li>
            <li
              :class="{ active: searchType === 'workshops' }"
              class="programme-grid-list-item"
              @click="searchType = 'workshops'"
            >
              <p class="description-text black capitalize big">workshops</p>
            </li>
          </ul>
        </div>
        <!--<Transition>-->
        <div class="programme-grid-items-wrapper col-12 offset-lg-3 col-lg-9">
          <ProgrammeCard
            :searchType="searchType"
            v-for="(item, index) in programmeData"
            :key="item.id"
            :item="item"
          />
        </div>
        <!--</Transition>-->
      </div>
    </div>
    <div class="programme-grid-background"></div>
  </section>
</template>
<script setup>
import data from "../../database/db.json";
import ProgrammeCard from "./ProgrammeCard.vue";
const programmeData = ref([]);
const searchType = ref("all of it! enjoy :-)");
const components = defineComponent({
  ProgrammeCard,
});

const scrollToTop = () => {
  let elmGridList = document.querySelectorAll(".programme-grid-list-item");
  elmGridList.forEach((elm) => {
    elm.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
};

const gridList = () => {
  const elm = document.querySelector(".programme-grid-list-wrapper");
  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;

  if (currentScroll >= scrollableHeight) {
    elm.style.bottom = "120px";
  } else {
    elm.style.bottom = "80px";
  }
};

const changeBackground = () => {
  const gridBackground = document.querySelector(".programme-grid-background");
  window.onscroll = () => {
    const scroll = window.pageYOffset;
    console.log(scroll)
    if (scroll < 300) {
      gridBackground.style.backgroundColor = "#4c45fa";
    }
    if (scroll > 300) {
      gridBackground.style.backgroundColor = "#FFFFFF";
    }
  };
};

onMounted(() => {
  programmeData.value = data.programme;
  scrollToTop();
  changeBackground();
  window.addEventListener("scroll", gridList);
});
</script>
