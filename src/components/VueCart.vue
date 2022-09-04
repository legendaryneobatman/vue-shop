<template>
  <div class="cart">
    <div class="cart__header">
      <span class="cart__title">Корзина</span>
      <button @click="handleCartHide" class="cart__close">
        <img src="@/assets/icons/cross.svg" alt="">
      </button>
    </div>
    <vue-cart-list :selectedProducts="selectedProducts"/>
  </div>
</template>

<script>
import VueCartList from "@/components/VueCartlList";
import {mapState} from "vuex";

export default {
  name: "VueCart",
  components: {VueCartList},
  computed: {
    ...mapState({
      selectedProducts: state => state.products.selectedProducts
    })
  },
  methods: {
    handleCartHide() {
      this.$store.dispatch('application/toggleCart', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100000;
    height: 100vh;
    width: 600px;
    padding: 40px;
    background-color: white;

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 94px;
    }

    &__title {
      font-weight: 500;
      font-size: 30px;
      line-height: 88%;
      letter-spacing: -0.04em;
    }

    &__close {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #c4c4c4;
      border-radius: 40px;
      width: 40px;
      height: 40px;
      background-color: #FFFFFF;

      &:hover {
        background-color: #f1f1f1;
      }

      &:active {
        box-shadow: 0px 0px 4px 2px rgba(34, 60, 80, 0.11) inset;
      }
    }
  }
</style>
