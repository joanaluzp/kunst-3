<template>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <div
          class="navbar-menu-list col-12 d-flex align-items-center justify-content-end"
        >
          <div class="d-flex align-items-center">
            <NuxtLink to="/">
              <div
                class="menu-list-logo d-none d-md-flex justify-content-center align-items-center"
              >
                <img src="/images/kunst_3_logo.png" /></div
            ></NuxtLink>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-lang d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                {{ $t("global.nav.lang.title") }}
              </p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize">
                  {{ $t("global.nav.lang.sub_title") }}
                </li>
                <li
                  class="description-text black option capitalize small lang"
                  v-for="{ code, name } in locales"
                  :key="code"
                >
                  <NuxtLink :to="switchLocalePath(code)">{{ name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-help d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                {{ $t("global.nav.help.title") }}
              </p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize">
                  {{ $t("global.nav.help.sub_title") }}
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">{{ $t("global.nav.help.info_1") }}</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">{{ $t("global.nav.help.info_2") }}</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">{{ $t("global.nav.help.info_3") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-search d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                {{ $t("global.nav.search.title") }}
              </p>
              <div class="menu-list-options search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="search"
                  id="site-search"
                  class="search"
                  name="search"
                  :placeholder="$t('global.nav.search.title')"
                />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-menu d-flex justify-content-center align-items-center"
              @click="openMenu(event)"
            >
              <p
                class="description-text uppercase big text-center color-03 toggle"
              >
                {{ $t("global.nav.menu.title") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="navbar-menu pt-70 col-12">
          <ul class="menu-list-options d-flex flex-column">
            <div
              class="menu-list-logo d-inline-flex d-md-none justify-content-start align-items-center"
            >
              <NuxtLink to="/">
                <img src="/images/kunst_3_logo.png"
              /></NuxtLink>
            </div>
            <li>
              <NuxtLink to=""
                ><p class="description-text black uppercase big font-bold">
                  {{ $t("global.nav.menu.info_1") }}
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/programme"
                ><p class="description-text black uppercase big font-bold">
                  {{ $t("global.nav.menu.info_2") }}
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to=""
                ><p class="description-text black uppercase big font-bold">
                  {{ $t("global.nav.menu.info_3") }}
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to=""
                ><p class="description-text black uppercase big font-bold">
                  {{ $t("global.nav.menu.info_4") }}
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to=""
                ><p class="description-text black uppercase big font-bold">
                  {{ $t("global.nav.menu.info_5") }}
                </p></NuxtLink
              >
            </li>
            <li>
              <p
                class="description-text black uppercase big font-bold icon-help"
              >
                <span>
                  <i class="fa-regular fa-circle-question"></i>
                </span>
                {{ $t("global.nav.help.title") }}
              </p>
              <NuxtLink to="" class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  {{ $t("global.nav.help.info_1") }}
                </p></NuxtLink
              >
              <NuxtLink to="" class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  {{ $t("global.nav.help.info_2") }}
                </p></NuxtLink
              >
              <NuxtLink to="" class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  {{ $t("global.nav.help.info_3") }}
                </p></NuxtLink
              >
            </li>
            <li class="search">
              <p class="description-text black uppercase big font-bold">
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="search"
                  id="site-search"
                  class="search"
                  name="search"
                  :placeholder="$t('global.nav.search.title')"
                />
              </p>
            </li>
            <li>
              <p
                class="description-text black uppercase big font-bold icon-help"
              >
                {{ $t("global.nav.lang.title") }}
                {{ $t("global.nav.lang.sub_title") }}
              </p>
              <div v-for="{ code, name } in locales" :key="code">
                <NuxtLink :to="switchLocalePath(code)"
                  ><p class="description-text grey-01 capitalize">
                    {{ name }}
                  </p></NuxtLink
                >
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-end">
                <p class="description-text grey-01 big font-fungal">
                  {{ $t("global.nav.menu.info_6") }}
                </p>
              </div>
              <div class="d-flex justify-content-end">
                <div
                  class="navbar-menu-social d-inline-flex align-items-center"
                >
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-facebook fa-xl"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-instagram fa-xl"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-youtube fa-xl"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const prevScroll = ref(0);
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const openMenu = () => {
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarBtn = document.querySelector(".menu-list-icon.icon-menu p");
  event.stopPropagation();
  navbarMenu.classList.toggle("open");
  if (navbarMenu.classList.contains("open")) {
    navbarBtn.innerHTML = t("global.nav.menu.title_closed");
  } else {
    navbarBtn.innerHTML = t("global.nav.menu.title");
  }
};

const clickOutside = (event) => {
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarLi = document.querySelectorAll(
    ".navbar-menu .menu-list-options li"
  );
  const navbarLiSearch = document.querySelector(
    ".navbar-menu .menu-list-options .search"
  );
  const navbarBtn = document.querySelector(".menu-list-icon.icon-menu p");
  if (
    !navbarMenu.contains(event.target) ||
    (navbarLi && !navbarLiSearch.contains(event.target))
  ) {
    navbarMenu.classList.remove("open");
    navbarBtn.innerHTML = t("global.nav.menu.title");
  }
};

const handleScrollNavbar = () => {
  let scroll = window.pageYOffset;
  let elmNavbar = document.querySelector(".navbar");
  let elmNavbarList = document.querySelector(".navbar-menu-list");
  let heightNavbar = elmNavbar ? elmNavbar.offsetHeight : 0;
  if (scroll > heightNavbar) {
    elmNavbarList.style.top = "-100px";
    elmNavbarList.style.boxShadow = "none";
    if (scroll < prevScroll.value) {
      elmNavbarList.style.top = "0";
      elmNavbarList.style.boxShadow =
        "7px 7px 5px -4px rgba(76, 69, 250, 0.37)";
    }
  } else {
    elmNavbarList.style.top = "0";
    elmNavbarList.style.boxShadow = "7px 7px 5px -4px rgba(76, 69, 250, 0.37)";
  }
  prevScroll.value = scroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollNavbar);
  window.addEventListener("click", clickOutside);
});
</script>
