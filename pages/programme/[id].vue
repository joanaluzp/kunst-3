<template>
  <section class="section-programme-id">
    <div class="programme-id-top">
      <div class="container-fluid id-information-wrapper">
        <div class="row">
          <div class="d-flex align-items-center col-12">
            <NuxtLink to="javascript:window.history.back()">
              <div
                class="description-text uppercase black font-bold d-inline-flex align-items-center"
              >
                {{ "👀 " + $t("global.programme_id.top.btn_go_back") }}
              </div></NuxtLink
            >
          </div>
          <div class="d-flex align-items-center col-12 col-lg-8">
            <marquee Scrollamount="10" class="">
              <h1
                class="description-title text-decoration bigger font-italic black uppercase"
              >
                {{ item.title.main.loc }}
              </h1>
            </marquee>
          </div>
          <div class="d-flex align-items-center col-12 col-lg-4">
            <div
              class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
            >
              {{ item.category.loc }}
            </div>
          </div>
        </div>
      </div>
      <div class="full-width-wrapper">
        <NuxtLink to="" class="btn-ticket-wrapper">
          <div class="btn-ticket d-inline-block">
            <p class="description-title font-italic white uppercase">
              {{ '😨 ' + $t("global.programme_id.top.btn_ticket") + ' 🍰' }}
            </p>
          </div>
        </NuxtLink>
        <marquee Scrollamount="10" class="">
          <h1
            class="description-title bigger text-decoration font-bold-italic black uppercase"
          >
            {{ item.title.main.loc }}
          </h1>
        </marquee>
        <div class="id-img-wrapper">
          <img :src="item.image.loc" />
        </div>
      </div>
    </div>
    <div class="id-description-wrapper container-fluid">
      <div class="row">
        <div class="col-12 col-lg-8 col-xxl-7 left">
          <p
            class="description-title font-fungal big grey-01 capitalize text-right"
          >
            {{ item.description.main.loc }}
          </p>
          <p class="description-text black text-justify">
            {{ item.description.secondary.loc }}
          </p>
        </div>
        <div class="col-12 col-lg-4 offset-xxl-1 right">
          <ul class="id-description-list">
            <li class="id-description-item">
              <p class="description-text font-bold white capitalize">
                {{ $t("global.programme_id.bottom.info_1") }}
              </p>
              <p
                class="description-text font-italic white capitalize"
                v-for="(dateItem, dateIndex) in item.date"
                :key="dateIndex"
              >
                <span class="description-text font-bold-italic d-inline"
                  >{{ dateItem.day.loc }}
                  {{ dateItem.month.loc }}</span
                >
                {{ dateItem.week.loc }} at {{ dateItem.time.loc }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold white capitalize">
                {{ $t("global.programme_id.bottom.info_2") }}
              </p>
              <p class="description-text font-italic white capitalize">
                {{ item.duration.loc }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold white capitalize">
                {{ $t("global.programme_id.bottom.info_3") }}
              </p>
              <p class="description-text font-italic white capitalize">
                {{ item.age_rating.loc }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold white capitalize">
                {{ $t("global.programme_id.bottom.info_4.title") }}
              </p>
              <p class="description-text font-italic white capitalize">
                {{ $t("global.programme_id.bottom.info_4.info_1") }}:
                {{ item.price.presale.loc }}
                {{ $t("global.programme_id.bottom.info_4.info_3") }} /
                {{ $t("global.programme_id.bottom.info_4.info_2") }}:
                {{ item.price.door.loc }}
                {{ $t("global.programme_id.bottom.info_4.info_3") }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold white capitalize">
                {{ $t("global.programme_id.bottom.info_5") }}
              </p>
              <p class="description-text font-italic white capitalize">
                {{ item.support.loc }}
              </p>
            </li>
            <li class="id-description-item" @click="shareOpen = !shareOpen">
              <div
                class="btn description-text uppercase small white font-bold-italic d-inline-flex align-items-center"
              >
                {{ $t("global.programme_id.bottom.info_6.title") }}
              </div>
              <ul class="share-list-wrapper" :class="shareOpen ? 'open' : ''">
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right white"
                    >
                      {{
                        $t("global.programme_id.bottom.info_6.social_media_1")
                      }}
                    </p></NuxtLink
                  >
                </li>
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right white"
                    >
                      {{
                        $t("global.programme_id.bottom.info_6.social_media_2")
                      }}
                    </p></NuxtLink
                  >
                </li>
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right white"
                    >
                      {{
                        $t("global.programme_id.bottom.info_6.social_media_3")
                      }}
                    </p></NuxtLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();
const route = useRoute();
const shareOpen = ref(false);
const id = parseInt(route.params.id);
const item = ref(tm("events.programme").find((item) => item.id === id));
const props = defineProps({
  searchType: {
    type: String,
  },
});
defineI18nRoute({
  paths: {
    en: "/programme/[id]",
    de: "/programm/[id]",
  },
});
</script>
