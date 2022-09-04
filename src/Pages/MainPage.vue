<template>
  <main class="main-page">
    <section class="main-page__slider">
      <UiSlider :photos="photos"/>
    </section>
    <section class="main-page__content">
      <ui-switch-group
          id="mobile"
          v-model="selectedFilterOptions"
          :switch-options="switchesOptions"
          class="main-page__filters"
      />
      <div class="main-page__grid">
        <div class="main-page__header">
          <span class="main-page__count">{{ `${filteredProducts.length} ${countEnding}` }}</span>
          <span class="main-page__label" @click="openFiltersMenu">Фильтры</span>
          <ui-select
              v-model="selectedSortOption"
              :options="sortOptions"
          />
        </div>
        <vue-products-grid :products="filteredProducts" @addProduct="addProduct"/>
      </div>
    </section>
    <vue-filters-popup
        v-show="isFiltersVisible"
    >
      <ui-switch-group
          v-model="selectedFilterOptions"
          :switch-options="switchesOptions"
          class="main-page__filters"
      />
    </vue-filters-popup>
    <ui-fade
        v-show="isCartVisible || isFiltersVisible"
        @click="hideAllDialogs"
    />
    <vue-cart
        v-show="isCartVisible"
        :selectedProducts="selectedProducts"
    />
  </main>
</template>

<script>
import UiSlider from "@/components/UI/UiSlider";
import UiSelect from "@/components/UI/UiSelect";
import VueProductsGrid from "@/components/VueProductsGrid";
import VueFiltersPopup from "@/components/VueFiltersPopup";
import UiSwitchGroup from "@/components/UI/UiSwitchGroup";
import UiFade from "@/components/UI/UiFade";
import VueCart from "@/components/VueCart";
import {photos} from "@/static/photos";
import {sortOptions, switchesOptions} from "@/settings/productsSortOptions";
import {mapGetters, mapState} from "vuex";

export default {
  name: "MainPage",
  components: {UiSlider, UiSelect, UiSwitchGroup, VueProductsGrid, VueFiltersPopup, UiFade, VueCart},
  data: () => ({
    photos,
    sortOptions,
    switchesOptions,
    selectedProducts: [],
  }),
  computed: {
    selectedSortOption: {
      get() {
        return this.$store.state.products.selectedSortOption
      },
      set(option) {
        this.$store.dispatch('products/updateSortOption', option)
      }
    },
    selectedFilterOptions: {
      get() {
        return this.$store.state.products.selectedFilterOptions
      },
      set(option) {
        this.$store.dispatch('products/updateFilterOptions', option)
      },
    },
    ...mapGetters({
      filteredProducts: 'products/filteredProducts',
      countEnding: 'products/cartCountEnding',
    }),
    ...mapState({
      isCartVisible: state => state.application.isCartVisible,
      isFiltersVisible: state => state.application.isFiltersVisible,
    })
  },
  methods: {
    hideAllDialogs() {
      this.$store.dispatch('application/hideDialogs')
    },
    openFiltersMenu() {
      this.$store.dispatch('application/toggleFilters', true)
    },
    addProduct(product) {
      this.selectedProducts.push(product)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100vh;

  &__fade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 39;
  }

  &__slider {
    position: relative;
    margin-bottom: 72px;

    @include media-breakpoint-down(xl) {
      & {
        display: none;
      }
    }
  }

  &__filters {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }


  &__filters#mobile {
    @include media-breakpoint-down(xl) {
      & {
        display: none;
      }
    }
  }

  &__content {
    margin: 0 64px;
    display: flex;
    align-items: flex-start;
    gap: 138px;

    @include media-breakpoint-down(sm) {
      & {
        margin: 0 24px
      }
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__count {
    @include media-breakpoint-down(xl) {
      & {
        display: none;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }


  &__label {
    cursor: pointer;
    display: block;

    @include media-breakpoint-up(xl) {
      & {
        display: none;
      }
    }
  }
}


</style>
