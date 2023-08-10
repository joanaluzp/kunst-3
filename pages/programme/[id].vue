<template>
  <div class="app-page">
    <section class="section-programme-item pt-100">
      <div class="container-fluid item-content-wrapper">
        <div class="row">
          <div class="d-flex col">
            <div v-for="(dateItem, dateIndex) in item.date" :key="dateIndex">
              <p class="description-title small black capitalize">
                {{ dateItem.month }}
                <span class="description-title black bigger font-black">
                  {{ dateItem.day }}</span
                >
              </p>
              <p class="description-text black capitalize">
                {{ dateItem.week }} at {{ dateItem.time }}
              </p>
            </div>
          </div>
          <div class="d-flex col justify-content-end flex-column">
            <div class="d-flex flex-column top">
              <NuxtLink
                to="/programme"
                @click="searchType === `${item.category}`"
              >
                <div
                  class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
                >
                  {{ item.category }}
                </div></NuxtLink
              >
            </div>
          </div>
          <div class="col-12">

          </div>
        </div>
      </div>
      <div class="full-width-wrapper">
        <marquee class="d-flex flex-column bottom" Scrollamount="10">
              <h1
                class="description-title bigger font-bold-italic black uppercase"
              >
                {{ item.title.main }}
              </h1>
            </marquee>
        <img :src="item.image" />
      </div>
      <div class="container-fluid item-description-wrapper">
        <div class="row">
          <div class="col-12 col-lg-8 col-xxl-7 left">
            <p class="description-title font-fungal capitalize text-right">
              {{ item.description.main }}
            </p>
            <p class="description-text black text-justify">
              {{ item.description.secondary }}
            </p>
          </div>
          <div class="col-12 col-lg-3 offset-lg-1 offset-xxl-2 right">
            <ul class="item-description-list">
              <li class="item-description-item">
                <p class="description-text font-bold black capitalize">
                  duration
                </p>
                <p class="description-text font-italic black capitalize">
                  {{ item.duration }}
                </p>
              </li>
              <li class="item-description-item">
                <p class="description-text font-bold black capitalize">
                  age rating
                </p>
                <p class="description-text font-italic black capitalize">
                  {{ item.age_rating }}
                </p>
              </li>
              <li class="item-description-item">
                <p class="description-text font-bold black capitalize">entry</p>
                <p class="description-text font-italic black capitalize">
                  Presale: {{ item.price.presale }} discounted (students,
                  seniors) / Door: {{ item.price.door }} discounted (students,
                  seniors)
                </p>
              </li>
              <li class="item-description-item">
                <p class="description-text font-bold black capitalize">
                  with the support of
                </p>
                <p class="description-text font-italic black capitalize">
                  {{ item.support }}
                </p>
              </li>
              <li class="item-description-item" @click="shareOpen = !shareOpen">
                <div
                  class="btn description-text uppercase small black font-bold-italic d-inline-flex align-items-center"
                >
                  SHARE
                </div>
              </li>
            </ul>
            <ul class="share-list-wrapper" :class="shareOpen ? 'open' : ''">
              <li class="item-description-item">
                <NuxtLink to=""
                  ><p
                    class="description-text lowercase font-bold-italic text-right black"
                  >
                    instagram
                  </p></NuxtLink
                >
              </li>
              <li class="item-description-item">
                <NuxtLink to=""
                  ><p
                    class="description-text lowercase font-bold-italic text-right black"
                  >
                    facebook
                  </p></NuxtLink
                >
              </li>
              <li class="item-description-item">
                <NuxtLink to=""
                  ><p
                    class="description-text lowercase font-bold-italic text-right black"
                  >
                    twitter
                  </p></NuxtLink
                >
              </li>
              <li class="item-description-item">
                <NuxtLink to=""
                  ><p
                    class="description-text lowercase font-bold-italic text-right black"
                  >
                    whatsapp
                  </p></NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import data from "../../database/db.json";
const route = useRoute();
const shareOpen = ref(false);
const props = defineProps({
  searchType: {
    type: String,
  },
});

const id = parseInt(route.params.id);
const item = ref(data.programme.find((item) => item.id === id));
</script>
