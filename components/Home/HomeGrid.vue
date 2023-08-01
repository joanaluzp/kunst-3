<template>
  <section class="section-home-grid">
    <div class="container-fluid">
      <div class="row">
        <div class="home-grid-menu d-none d-lg-block col-md-3">
          <ul class="menu-list-options d-flex flex-column">
            <li
              :class="{ active: searchType === 'default' }"
              @click="searchType = 'default'"
            >
              <p class="description-text black capitalize big">View all</p>
            </li>
            <li
              :class="{ active: searchType === 'cinema' }"
              @click="searchType = 'cinema'"
            >
              <p class="description-text black capitalize big">cinema</p>
            </li>
            <li
              :class="{ active: searchType === 'concerts' }"
              @click="searchType = 'concerts'"
            >
              <p class="description-text black capitalize big">concerts</p>
            </li>
            <li
              :class="{ active: searchType === 'dance' }"
              @click="searchType = 'dance'"
            >
              <p class="description-text black capitalize big">dance</p>
            </li>
            <li
              :class="{ active: searchType === 'performance' }"
              @click="searchType = 'performance'"
            >
              <p class="description-text black capitalize big">performance</p>
            </li>
            <li
              :class="{ active: searchType === 'exhibitions' }"
              @click="searchType = 'exhibitions'"
            >
              <p class="description-text black capitalize big">exhibitions</p>
            </li>
            <li
              :class="{ active: searchType === 'workshops' }"
              @click="searchType = 'workshops'"
            >
              <p class="description-text black capitalize big">workshops</p>
            </li>
          </ul>
        </div>
        <div class="home-grid-options col-12 offset-lg-3 col-lg-9">
          <Transition
            ><div
              class="home-grid-item"
              v-if="searchType === 'default' || searchType === 'cinema'"
            >
              <div>
                <img src="../../assets/images/kunst_3_kino.jpg" />
              </div>
              <div class="">
                <p>CollettivO CineticO & Alessandro Sciarroni</p>
                <p>Dialogo Terzo: IN A LANDSCAPE</p>
              </div>
              <div class="">
                <p>19/10</p>
                <button>18:00</button>
              </div>
              <div class="">
                <p>19/10</p>
                <button>18:00</button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
  <client-only>
    <AppFooter />
  </client-only>
</template>
<script setup>
const searchType = ref("default");

definePageMeta({
  pageTransition: {
    name: "slide",
  },
});
</script>
