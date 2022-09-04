<template>
  <div class="cart-list">
    <div class="cart-list__header">
      <span class="cart-list__count">{{ `${count} ${countEnding}` }}</span>
      <button @click="clearCart" class="cart-list__clear">очистить список</button>
    </div>
    <hr class="cart-list__divider">
    <div class="cart-list__content">
      <vue-cart-item
          v-for="product in selectedProducts"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import VueCartItem from "@/components/VueCartItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "VueCartlList",
  components: {VueCartItem},
  props: {
    selectedProducts: {type: Array}
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      count: 'products/cartCount',
      countEnding: 'products/cartCountEnding'
    }),
  },
  methods: {
    ...mapActions({
      clearCart: 'products/clearCart',
    })
  },
}
</script>

<style lang="scss" scoped>
.cart-list {
  width: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: #000000;
    opacity: 0.1;
  }

  &__count {

  }

  &__clear {
    border: none;
    background-color: unset;
    font-weight: 300;
    font-size: 14px;
    line-height: 112%;
    opacity: 0.4;

    &:hover {
      text-decoration: underline;
    }
  }


}
</style>
