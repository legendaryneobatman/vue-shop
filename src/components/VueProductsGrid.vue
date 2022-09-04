<template>
  <div class="product-grid">
    <vue-grid-item
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<script>
import VueGridItem from "@/components/VueGridItem";
import {sortOptions} from "@/settings/productsSortOptions";

export default {
  name: "VueProductsGrid",
  components: {VueGridItem},
  props: {
    products: {type: Array}
  },
  data: () => ({
    sortOptions,
  }),
}
</script>

<style lang="scss" scoped>
.product-grid {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  row-gap: 18px;
  width: 100%;

  @include media-breakpoint-down(md) {
    & {
      &__container {
        justify-content: center;
      }
    }
  }
}
</style>
