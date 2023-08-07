<template>
  <nav class="navbar" :class="openMenu ? 'open' : ''">
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
                <img src="../assets/images/kunst_3_logo.png" /></div
            ></NuxtLink>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-lang d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                A⇆ü
              </p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize">
                  <a href="">Language</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">English</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">Deutsch</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-help d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                HELP
              </p>
              <ul class="menu-list-options">
                <li class="description-text grey-01 capitalize">Help</li>
                <li class="description-text black option capitalize small">
                  <a href="">how to get here</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">FAQ</a>
                </li>
                <li class="description-text black option capitalize small">
                  <a href="">support KUNST 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-search d-none d-md-flex justify-content-center align-items-center"
            >
              <p class="description-text uppercase big text-center color-03">
                SEARCH
              </p>
              <div class="menu-list-options search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="search"
                  id="site-search"
                  class="search"
                  name="search"
                  placeholder="search"
                />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="menu-list-icon icon-menu d-flex justify-content-center align-items-center"
              @click="openMenu = !openMenu"
              :class="{ open: openMenu }"
            >
              <p
                class="description-text uppercase big text-center color-03 navbar-menu-toggle"
              >
                {{ openMenu ? "CLOSE" : "MENU" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="navbar-menu pt-70 col-12"
          :class="openMenu ? 'open' : 'close'"
        >
          <ul class="menu-list-options d-flex flex-column">
            <div
              class="menu-list-logo d-inline-flex d-md-none justify-content-start align-items-center"
            >
              <NuxtLink to="/" @click="openMenu = false">
                <img src="../assets/images/kunst_3_logo.png"
              /></NuxtLink>
            </div>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  about us
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/programme" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  programme
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  Information for media
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  people
                </p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" @click="openMenu = false"
                ><p class="description-text black uppercase big font-bold">
                  partners
                </p></NuxtLink
              >
            </li>
            <li>
              <p class="description-text black uppercase big font-bold icon-help">
                <span>
                  <i class="fa-regular fa-circle-question"></i>
                </span>
                help
              </p>
              <NuxtLink to="/" @click="openMenu = false"
              class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  how to get here
                </p></NuxtLink
              >
              <NuxtLink to="/" @click="openMenu = false"
              class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  FAQ
                </p></NuxtLink
              >
              <NuxtLink to="/" @click="openMenu = false"
              class="icon-help"
                ><p class="description-text grey-01 capitalize">
                  support KUNST 3
                </p></NuxtLink
              >
            </li>
            <li>
              <p class="description-text black uppercase big font-bold">
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="search"
                  id="site-search"
                  class="search"
                  name="search"
                  placeholder="search"
                  @keyup.enter="openMenu = false"
                />
              </p>
            </li>
            <li>
              <div class="d-flex justify-content-end">
                <p class="description-text grey-01 big font-fungal">
                  Follow us
                </p>
              </div>
              <div class="d-flex justify-content-end">
                <div></div>
                <div
                  class="navbar-menu-social d-inline-flex align-items-center"
                >
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href=""
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-brands fa-youtube"></i>
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
const openMenu = ref(false);
let prevScrollpos = window.pageYOffset;

const clickOutside = () => {
  document.addEventListener("click", (event) => {
    console.log(event.target.classList);
    if (
      !event.target.classList.contains("navbar-menu") ||
      !event.target.classList.contains("navbar-menu-toggle")
    ) {
      openMenu.value = false;
    } else {
      openMenu.value = true;

    }
  });
};

const handleScrollNavbar = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-menu-list").style.top = "0";
    document.querySelector(".navbar-menu-list").style.boxShadow =
      "7px 7px 5px -4px rgba(76, 69, 250, 0.37)";
  } else {
    document.querySelector(".navbar-menu-list").style.top = "-100px";
    document.querySelector(".navbar-menu-list").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
