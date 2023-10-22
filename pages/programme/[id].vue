<template>
  <section class="section-programme-id">
    <div class="programme-id-top">
      <div class="container-fluid id-information-wrapper">
        <div class="row">
          <div class="d-flex align-items-center col-12">
            <NuxtLink to="javascript:window.history.back()">
              <div
                class="description-text uppercase white font-bold d-inline-flex align-items-center"
              >
                {{ $t("global.programme_id.top.btn_go_back") }}
              </div></NuxtLink
            >
          </div>
          <div class="d-flex align-items-center col-12 col-lg-8">
            <marquee Scrollamount="10" class="">
              <h1
                class="description-title bigger font-bold-italic white uppercase"
              >
                {{ item.title.main.loc.source }}
              </h1>
            </marquee>
          </div>
          <div class="d-flex align-items-center col-12 col-lg-4">
            <div
              class="btn description-text lowercase small white font-bold-italic d-inline-flex align-items-center"
            >
              {{ item.category.loc.source }}
            </div>
          </div>
        </div>
      </div>
      <div class="full-width-wrapper">
        <div class="btn-ticket-wrapper">
          <NuxtLink to="">
            <div class="btn-ticket">
              <p class="description-title font-italic white uppercase">
                {{ $t("global.programme_id.top.btn_ticket") }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <marquee Scrollamount="10" class="">
          <h1 class="description-title bigger font-bold-italic white uppercase">
            {{ item.title.main.loc.source }}
          </h1>
        </marquee>
        <img :src="item.image.loc.source" />
      </div>
    </div>
    <div class="id-description-wrapper container-fluid">
      <div class="row">
        <div class="col-12 col-lg-8 col-xxl-7 left">
          <p class="description-title font-fungal capitalize text-right">
            {{ item.description.main.loc.source }}
          </p>
          <p class="description-text black text-justify">
            {{ item.description.secondary.loc.source }}
          </p>
        </div>
        <div class="col-12 col-lg-4 offset-xxl-1 right">
          <ul class="id-description-list">
            <li class="id-description-item">
              <p class="description-text font-bold black capitalize">
                {{ $t("global.programme_id.bottom.info_1") }}
              </p>
              <p
                class="description-text font-italic black capitalize"
                v-for="(dateItem, dateIndex) in item.date"
                :key="dateIndex"
              >
                <span class="description-text font-bold-italic d-inline"
                  >{{ dateItem.day.loc.source }} {{ dateItem.month.loc.source }}</span
                >
                {{ dateItem.week.loc.source }} at {{ dateItem.time.loc.source }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold black capitalize">
                {{ $t("global.programme_id.bottom.info_2") }}
              </p>
              <p class="description-text font-italic black capitalize">
                {{ item.duration.loc.source }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold black capitalize">
                {{ $t("global.programme_id.bottom.info_3") }}
              </p>
              <p class="description-text font-italic black capitalize">
                {{ item.age_rating.loc.source }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold black capitalize">{{ $t("global.programme_id.bottom.info_4.title") }}</p>
              <p class="description-text font-italic black capitalize">
                {{ $t("global.programme_id.bottom.info_4.info_1") }}: {{ item.price.presale.loc.source }} {{ $t("global.programme_id.bottom.info_4.info_3") }}
                / {{ $t("global.programme_id.bottom.info_4.info_2") }}: {{ item.price.door.loc.source }} {{ $t("global.programme_id.bottom.info_4.info_3") }}
              </p>
            </li>
            <li class="id-description-item">
              <p class="description-text font-bold black capitalize">
                {{ $t("global.programme_id.bottom.info_5") }}
              </p>
              <p class="description-text font-italic black capitalize">
                {{ item.support.loc.source }}
              </p>
            </li>
            <li class="id-description-item" @click="shareOpen = !shareOpen">
              <div
                class="btn description-text uppercase small black font-bold-italic d-inline-flex align-items-center"
              >
              {{ $t("global.programme_id.bottom.info_6.title") }}
              </div>
              <ul class="share-list-wrapper" :class="shareOpen ? 'open' : ''">
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right black"
                    >
                    {{ $t("global.programme_id.bottom.info_6.social_media_1") }}
                    </p></NuxtLink
                  >
                </li>
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right black"
                    >
                    {{ $t("global.programme_id.bottom.info_6.social_media_2") }}
                    </p></NuxtLink
                  >
                </li>
                <li class="share-item">
                  <NuxtLink to=""
                    ><p
                      class="description-text lowercase font-bold-italic text-right black"
                    >
                    {{ $t("global.programme_id.bottom.info_6.social_media_3") }}
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
const props = defineProps({
  searchType: {
    type: String,
  },
});

const id = parseInt(route.params.id);
const item = ref(tm('events.programme').find((item) => item.id === id)); 
defineI18nRoute({
  paths: {
    en: '/programme/:slug',
    de: '/programm/:slug'
  }
})
</script>
