<template>
  <section class="section-home-grid">
    <div class="container-fluid">
      <div class="row">
        <div class="home-grid-list-wrapper d-none d-lg-block">
          <ul class="home-grid-list-items d-flex flex-column">
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
        <div class="home-grid-items-wrapper col-12 offset-lg-3 col-lg-9">
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/amin-hasani-6MtgrhSeil4-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                palo santo kinfolk JOMO
              </h3>
              <h4 class="description-text big black capitalize">
                kitsch disrupt edison bulb
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                28/11 wednesday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                22:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/angela1028.png" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Music (2023)
              </h3>
              <h4 class="description-text big black capitalize">
                Angela Schanelec
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                12/11 sunday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                30/11 monday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/australian_experimental_vocalist_kusum_normoyle_wh_4d81b10590.jpeg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                banjo ramps
              </h3>
              <h4 class="description-text big black capitalize">
                Sartorial vegan put a bird on it irony. Hoodie hexagon next
                level, tousled tilde schlitz 90's cronut
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                20/11 friday
              </p>
              <button
                class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
              >
                20:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/krisjanis-kazaks-9P4rglAiMwM-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                shaman la croix
              </h3>
              <h4 class="description-text big black capitalize">
                8-bit mixtape scenester listicle
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                15/11 sunday
              </p>
              <button
                class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'workshops'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/workshops/Super-8-wedding-film-02.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Super 8
              </h3>
              <h4 class="description-text big black capitalize">
                Fashion axe small batch bitters keffiyeh bodega boys, solarpunk
                raclette farm-to-table selvage man braid
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                sunday(s)
              </p>
              <button
                class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
              >
                10:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/qamarul-azman-Sz-VrzkfrI4-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Cronut vexillologist meggings fashion axe
              </h3>
              <h4 class="description-text big black capitalize">
                Celiac dreamcatcher meditation
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                5/1 saturday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                22:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/images-288.png" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                The Bitter Tears of Petra von Kant (1972)
              </h3>
              <h4 class="description-text big black capitalize">
                Rainer Werner Fassbinder
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                9/10 wednesday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/maksim-zhashkevych-WKPFLcrkcKA-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                raw denim ugh
              </h3>
              <h4 class="description-text big black capitalize">
                yes plz XOXO photo booth
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                1/11 friday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'performance'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/performance/unnamed.png" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Hexagon raw denim +1
              </h3>
              <h4 class="description-text big black capitalize">
                disrupt iceland ramps yuccie
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                28/10 wednesday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                18:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                10/10 thuesday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                18:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'performance'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/performance/romain-virtuel-2nftXhfdN_o-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                chillwave fingerstache blog skateboard blue bottle
              </h3>
              <h4 class="description-text big black capitalize">
                craft beer letterpress
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                20/11 friday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                23/10 thuesday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                18:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/nachmittag5.jpg" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Nachmittag (2007)
              </h3>
              <h4 class="description-text big black capitalize">
                Angela Schanelec
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                21/10 thursday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                30/11 thuesday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/glenn-van-de-wiel-8CnFAXypYdw-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                shaman la croix
              </h3>
              <h4 class="description-text big black capitalize">
                8-bit mixtape scenester listicle
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                10/11 saturday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                22:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'performance'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/performance/andrea-puglisi-BI4hAEE3cdw-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                farm-to-table selvage man braid
              </h3>
              <h4 class="description-text big black capitalize">
                belly copper mug
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                26/11 friday
              </p>
              <button
                class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
              >
                20:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/a67233.jpg" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                mein langsames leben (2001)
              </h3>
              <h4 class="description-text big black capitalize">
                Angela Schanelec
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                12/11 thursday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                3/11 monday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'exhibitions'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/exhibitions/0j2228282.jpg" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Cred flannel hashtag seitan shabby chic
              </h3>
              <h4 class="description-text big black capitalize">
                Truffaut marxism dreamcatcher, knausgaard blackbird spyplane
                hella waistcoat
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                19/10 friday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                18:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                30/11 saturday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/18181.jpg" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Aelita: the Queen of Mars (1924)
              </h3>
              <h4 class="description-text big black capitalize">
                Yakov Protazanov
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                17/11 wednesday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/images-original.png" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Possession (1981)
              </h3>
              <h4 class="description-text big black capitalize">
                Andrzej Żuławski
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                1/10 wednesday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'concerts'"
          >
            <div class="grid-item-image">
              <img
                src="../../assets/images/concerts/nguy-n-hi-p-_tj3yDueIck-unsplash.jpg"
              />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Pickled praxis lumbersexual aesthetic big mood meggings
                knausgaard
              </h3>
              <h4 class="description-text big black capitalize">
                gochujang cornhole organic yes plz. Lo-fi humblebrag beard
                cornhole, fingerstache actually drinking vinegar etsy succulents
                biodiesel raw denim ugh fit
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                8/12 saturday
              </p>
              <button
                class="btn description-text small black lowercase font-bold-italic d-inline-flex align-items-center"
              >
                21:30
              </button>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/programme/sample"
            class="home-grid-item"
            v-if="searchType === 'default' || searchType === 'cinema'"
          >
            <div class="grid-item-image">
              <img src="../../assets/images/cinema/91817.png" />
            </div>
            <div class="grid-item-title">
              <h3 class="description-text font-bold big black capitalize">
                Marseille (2004)
              </h3>
              <h4 class="description-text big black capitalize">
                Angela Schanelec
              </h4>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                22/10 monday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                21:00
              </button>
            </div>
            <div
              class="grid-item-wrapper d-flex justify-content-start align-items-center"
            >
              <p
                class="grid-item-info description-text lowercase small black font-bold-italic d-inline-flex"
              >
                30/10 thuesday
              </p>
              <button
                class="btn description-text small lowercase black font-bold-italic d-inline-flex align-items-center"
              >
                19:00
              </button>
            </div>
          </NuxtLink>
        </div>
        <!--</Transition>-->
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

const scrollToTop = () => {
  let elmGridList = document.querySelectorAll(".home-grid-list-item");
  elmGridList.forEach((elm) => {
    elm.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
};

onMounted(() => {
  scrollToTop();
});
</script>
