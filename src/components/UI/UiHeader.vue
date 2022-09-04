<template>
  <header class="header">
    <div class="header__wrapper">
      <ui-burger-menu/>
      <a href="#">
        <img alt="" class="header__logo" src="@/assets/images/logo.svg">
      </a>
      <nav class="header__nav">
        <router-link class="header__link" to="/products">Продукты</router-link>
        <router-link class="header__link" to="/colors">Цвета</router-link>
        <router-link class="header__link" to="/inspiration">Вдохновение</router-link>
        <router-link class="header__link" to="/tips">Советы</router-link>
        <router-link class="header__link" to="/search">Найти магазин</router-link>
      </nav>
      <div class="header__contacts">
        +7 (495) 221-77-69
        <div class="header__subtitle">Заказать звонок</div>
      </div>
      <div class="header__icons">
        <button>
          <img alt="" src="@/assets/icons/search.svg">
        </button>
        <button>
          <img alt="" src="@/assets/icons/profile.svg">
        </button>
        <button>
          <img alt="" src="@/assets/icons/heart.svg">
        </button>
        <button @click="openCart" class="header__cart">
          {{ productCount }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>

import UiBurgerMenu from "@/components/UI/UiBurgerMenu";
import {mapGetters} from "vuex";

export default {
  name: "UiHeader",
  components: {UiBurgerMenu},
  computed: {
    ...mapGetters({
      productCount: "products/cartCount"
    })
  },
  methods: {
    openCart() {
      this.$store.dispatch("application/toggleCart", true)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 9;
  width: 100%;
  overflow: unset;

  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  background-color: #FFFFFF;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 104px;
    padding: 0 64px;

    @include media-breakpoint-down(sm) {
      & {
        padding: 0 24px
      }
    }
  }

  &__nav {
    display: flex;
    gap: 24px;
    font-size: 16px;

    @include media-breakpoint-down(xl) {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    text-transform: uppercase;

    &, &:visited, &:hover, &:active {
      color: inherit;
    }
  }

  &__contacts {
    font-size: 16px;
    letter-spacing: -0.02em;

    @include media-breakpoint-down(xl) {
      display: none;
    }
  }

  &__subtitle {
    margin-top: 2px;
    opacity: 0.3;
  }

  button {
    width: 22px;
    height: 22px;
    border: none;
    background-color: transparent;
  }

  &__icons {
    display: flex;
    gap: 24px;
    justify-content: space-between;

    button:not(:last-child) {

      @include media-breakpoint-down(xl) {
        display: none;
      }
    }
  }

  &__cart {
    cursor: pointer;
    background-color: #7BB899 !important;
    border-radius: 50%;
  }
}
</style>
