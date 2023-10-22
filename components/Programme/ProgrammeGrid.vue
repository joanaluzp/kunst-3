<template>
  <section class="section-programme-grid">
    <div class="container-fluid">
      <div class="row">
        <div
          class="programme-grid-title-wrapper pt-100 col-12 offset-lg-3 col-lg-9"
        >
          <h1 class="description-title white font-bold-italic bigger uppercase">
            {{ $t("global.programme.top.title") }}
            <span class="description-title white lowercase">
              {{ searchType }}</span
            >
          </h1>
        </div>
        <div
          class="programme-grid-list-wrapper"
          :class="gridListHeight ? 'bottom' : ''"
        >
          <ul class="programme-grid-list-items">
            <li
              :class="{
                active:
                  searchType ===
                  $t('global.programme.category.category_default'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('default')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_1") }}
              </p>
            </li>
            <li
              :class="{
                active:
                  searchType === $t('global.programme.category.category_2'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('2')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_2") }}
              </p>
            </li>
            <li
              :class="{
                active:
                  searchType === $t('global.programme.category.category_3'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('3')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_3") }}
              </p>
            </li>
            <li
              :class="{
                active:
                  searchType === $t('global.programme.category.category_4'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('4')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_4") }}
              </p>
            </li>
            <li
              :class="{
                active:
                  searchType === $t('global.programme.category.category_5'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('5')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_5") }}
              </p>
            </li>
            <li
              :class="{
                active:
                  searchType === $t('global.programme.category.category_6'),
              }"
              class="programme-grid-list-item"
              @click="updateCategory('6')"
            >
              <p class="description-text black capitalize big">
                {{ $t("global.programme.category.category_6") }}
              </p>
            </li>
          </ul>
        </div>
        <!--<Transition>-->
        <div class="programme-grid-items-wrapper col-12 offset-lg-3 col-lg-9">
          <ProgrammeCard
            :searchType="searchType"
            v-for="item in $tm('events.programme')"
            :item="item"
            :key="item.id"
          />
        </div>
        <!--</Transition>-->
      </div>
    </div>
    <div
      class="programme-grid-background"
      :class="gridBackground ? 'white' : ''"
    ></div>
  </section>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
/* import data from "../../locales/en.json";
 */ import ProgrammeCard from "./ProgrammeCard.vue";
/* const jsonData = ref([]);
 */ const gridListHeight = ref(false);
const gridBackground = ref(false);
const searchType = ref(t("global.programme.category.category_default"));
const components = defineComponent({
  ProgrammeCard,
});

computed;

function updateCategory(el) {
  searchType.value = t(`global.programme.category.category_${el}`);
}

const scrollToTop = () => {
  let elmGridList = document.querySelectorAll(".programme-grid-list-item");
  elmGridList.forEach((elm) => {
    elm.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
};

const gridList = () => {
  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;
  if (currentScroll >= scrollableHeight) {
    gridListHeight.value = true;
  } else {
    gridListHeight.value = false;
  }
};

const changeBackground = () => {
  const scroll = window.pageYOffset;
  //console.log(scroll)
  if (scroll < 300) {
    gridBackground.value = false;
  }
  if (scroll > 300) {
    gridBackground.value = true;
  }
};

onMounted(() => {
  /*   programmeData.value = jsonData.event.programme; 
  console.log(programmeData.value) */
  /*   jsonData.value = data.events.programme;
  console.log(jsonData.value); */
  console.log(Object.keys(t('events.programme')));
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", gridList);
  window.addEventListener("scroll", scrollToTop);
});
</script>
