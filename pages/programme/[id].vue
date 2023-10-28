<template>
  <section class="section-programme-id">
    <div class="section-wrapper" :class="modalOpen ? 'modal-open' : ''">
      <div class="programme-id-top">
        <div class="container-fluid id-information-wrapper">
          <div class="row">
            <div class="d-flex align-items-center col-12">
              <NuxtLink :to="localePath({ path: '/programme/' })">
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
                  {{ $t(`events.programme.${item.id}.title.main`) }}
                </h1>
              </marquee>
            </div>
            <div class="d-flex align-items-center col-12 col-lg-4">
              <div
                class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
              >
                {{ $t(`events.programme.${item.id}.category`) }}
              </div>
            </div>
          </div>
        </div>
        <div class="full-width-wrapper">
          <div class="btn-ticket-wrapper">
            <div
              class="btn-ticket d-inline-block"
              @click="modalOpen = !modalOpen"
            >
              <p class="description-title font-italic white uppercase">
                {{ "😨 " + $t("global.programme_id.top.btn_ticket") + " 🍰" }}
              </p>
            </div>
          </div>
          <marquee Scrollamount="10" class="">
            <h1
              class="description-title bigger text-decoration font-italic black uppercase"
            >
              {{ $t(`events.programme.${item.id}.title.main`) }}
            </h1>
          </marquee>
          <div class="id-img-wrapper">
            <img :src="$t(`events.programme.${item.id}.image`)" />
          </div>
        </div>
      </div>
      <div class="id-description-wrapper container-fluid">
        <div class="row">
          <div class="col-12 col-lg-8 col-xxl-7 left">
            <p
              class="description-title font-fungal grey-01 capitalize text-right"
            >
              {{ $t(`events.programme.${item.id}.description.main`) }}
            </p>
            <p class="description-text black text-justify">
              {{ $t(`events.programme.${item.id}.description.secondary`) }}
            </p>
          </div>
          <div class="col-12 col-lg-4 offset-xxl-1 right">
            <ul class="id-description-list">
              <li class="id-description-item">
                <p class="description-text font-bold white capitalize">
                  {{ $t("global.programme_id.bottom.info_1") }}
                </p>
                <p class="description-text font-italic white capitalize">
                  <span class="description-text font-bold-italic d-inline"
                    >{{ $t(`events.programme.${item.id}.date.day`) }}
                    {{ $t(`events.programme.${item.id}.date.month`) }}</span
                  >
                  {{ $t(`events.programme.${item.id}.date.week`) }} at
                  {{ $t(`events.programme.${item.id}.date.time`) }}
                </p>
              </li>
              <li class="id-description-item">
                <p class="description-text font-bold white capitalize">
                  {{ $t("global.programme_id.bottom.info_2") }}
                </p>
                <p class="description-text font-italic white capitalize">
                  {{ $t(`events.programme.${item.id}.duration`) }}
                </p>
              </li>
              <li class="id-description-item">
                <p class="description-text font-bold white capitalize">
                  {{ $t("global.programme_id.bottom.info_3") }}
                </p>
                <p class="description-text font-italic white capitalize">
                  {{ $t(`events.programme.${item.id}.age_rating`) }}
                </p>
              </li>
              <li class="id-description-item">
                <p class="description-text font-bold white capitalize">
                  {{ $t("global.programme_id.bottom.info_4.title") }}
                </p>
                <p class="description-text font-italic white capitalize">
                  {{ $t("global.programme_id.bottom.info_4.info_1") }}:
                  {{ $t(`events.programme.${item.id}.price.presale`) }}
                  {{ $t("global.programme_id.bottom.info_4.info_3") }} /
                  {{ $t("global.programme_id.bottom.info_4.info_2") }}:
                  {{ $t(`events.programme.${item.id}.price.door`) }}
                  {{ $t("global.programme_id.bottom.info_4.info_3") }}
                </p>
              </li>
              <li class="id-description-item">
                <p class="description-text font-bold white capitalize">
                  {{ $t("global.programme_id.bottom.info_5") }}
                </p>
                <p class="description-text font-italic white capitalize">
                  {{ $t(`events.programme.${item.id}.support`) }}
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
    </div>
    <TicketModal
      v-if="modalOpen"
      :modalOpen="modalOpen"
      :itemId="item.id"
      @handleCloseModal="handleCloseModal"
    />
  </section>
</template>
<script setup>
import { ref } from "vue";
import TicketModal from "~/components/Modal/TicketModal.vue";
import data from "../../ids/id.json";
const route = useRoute();
const localePath = useLocalePath();
const shareOpen = ref(false);
const modalOpen = ref(false);
const id = parseInt(route.params.id);
const item = ref(data.programme.find((item) => item.id === id));
const props = defineProps({
  searchType: {
    type: String,
  },
});
const components = defineComponent({
  TicketModal,
});
const handleCloseModal = () => {
  modalOpen.value = false;
};
const scrollToTop = () => {
  const elmModalBtn = document.querySelector(".btn-ticket-wrapper .btn-ticket");
  elmModalBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

defineI18nRoute({
  paths: {
    en: "/programme/[id]",
    de: "/programm/[id]",
  },
});

onMounted(() => {
  window.addEventListener("scroll", scrollToTop);
});
</script>
