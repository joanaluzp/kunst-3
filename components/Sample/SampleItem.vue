<template>
  <section class="section-programme-item pt-100">
    <div class="container item-content-wrapper">
      <div class="row justify-content-between align-items-end">
        <div
          class="item-content left col-12 col-lg-9 d-flex flex-wrap order-2 order-lg-1"
        >
          <div class="d-flex">
            <div>
              <p class="description-title small black capitalize">
                Nov
                <span class="description-title black text-header font-black"
                  >15</span
                >
              </p>
              <p class="description-text black capitalize">Sunday at 19:00</p>
            </div>
            <div>
              <p class="description-title small black capitalize">
                Nov
                <span class="description-title black text-header font-black"
                  >15</span
                >
              </p>
              <p class="description-text black capitalize">Sunday at 19:00</p>
            </div>
          </div>
          <div class="d-flex justify-content-end flex-column">
            <div class="d-flex flex-column top">
              <NuxtLink to="/programme">
                <div
                  class="btn description-text lowercase small black font-bold-italic d-inline-flex align-items-center"
                >
                  concerts
                </div></NuxtLink
              >
            </div>
            <div class="d-flex flex-column bottom">
              <h1
                class="description-title text-header font-black black uppercase"
              >
                shaman la croix
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-img-wrapper">
      <img
        src="../../assets/images/concerts/krisjanis-kazaks-9P4rglAiMwM-unsplash.jpg"
      />
    </div>
    <div class="container item-description-wrapper">
      <div class="row">
        <div class="col-12 col-lg-8 col-xl-7 left">
          <p class="description-title font-fungal capitalize text-right">
            NEW IN TOWN
          </p>
          <p class="description-text black text-justify">
            I'm baby messenger bag kickstarter microdosing hashtag letterpress
            craft beer poke listicle. Enamel pin drinking vinegar brunch jean
            shorts. Chambray butcher occupy, deep v gorpcore cupping listicle
            plaid skateboard banh mi. <br />Umami lyft fanny pack gatekeep, echo
            park cupping neutral milk hotel offal. Williamsburg before they sold
            out gastropub hashtag. Tilde palo santo bushwick gluten-free pabst
            trust fund. Skateboard fingerstache listicle shaman pok pok cliche
            occupy banh mi direct trade tumeric bushwick. <br />Pinterest cloud
            bread mixtape gastropub, franzen migas etsy. Live-edge gatekeep
            distillery pug sartorial tumeric. Copper mug vape artisan schlitz
            tattooed pabst bicycle rights, flannel meh gorpcore big mood pickled
            shabby chic irony. <br /><br />Cornhole gatekeep vice, cliche
            sriracha typewriter twee heirloom venmo praxis pug neutra offal roof
            party seitan. Sriracha street art activated charcoal quinoa, direct
            trade 90's knausgaard gastropub affogato enamel pin butcher
            shoreditch. Bodega boys kale chips unicorn poke, crucifix pinterest
            hoodie.
          </p>
        </div>
        <div class="col-12 col-lg-3 offset-lg-1 offset-xl-2 right">
          <ul class="item-description-list">
            <li class="item-description-item">
              <p class="description-text font-bold black capitalize">
                duration
              </p>
              <p class="description-text font-italic black capitalize">
                1 hour
              </p>
            </li>
            <li class="item-description-item">
              <p class="description-text font-bold black capitalize">
                age rating
              </p>
              <p class="description-text font-italic black capitalize">
                all ages are welcomed!
              </p>
            </li>
            <li class="item-description-item">
              <p class="description-text font-bold black capitalize">entry</p>
              <p class="description-text font-italic black capitalize">
                Presale: 8 € / 5 € discounted (students, seniors) / Door: 10 € /
                7 € discounted (students, seniors)
              </p>
            </li>
            <li class="item-description-item">
              <p class="description-text font-bold black capitalize">
                with the support of
              </p>
              <p class="description-text font-italic black capitalize">
                PRAHA KULTURE SPACE 4EVERY1
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
</template>
<script setup>
const shareOpen = ref(false);
</script>
