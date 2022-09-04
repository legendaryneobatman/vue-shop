<template>
  <div class="cart-item">
    <div :class="{'cart-item__container--fade': isDeleted}" class="cart-item__container">
      <img :src="product.image" alt="" class="cart-item__image">
      <div class="cart-item__text">
        <div class="cart-item__label">{{ product.label }}</div>
        <div class="cart-item__price">{{ product.price }}₽</div>
      </div>
      <div class="cart-item__amount">
        <ui-button :disabled="isDeleted" :label="'-'" small @click="decrementCount(product)"/>
        {{ product.count }}
        <ui-button :disabled="isDeleted" :label="'+'" small @click="incrementCount(product)"/>
      </div>
    </div>
    <button v-show="!product.isDisabled" class="cart-item__button" @click="disableProduct(product)">
      <img :src="bigCross" alt="">
    </button>
    <button v-show="product.isDisabled" class="cart-item__button" @click="enableProduct(product)">
      <img :src="revert" alt="">
    </button>
  </div>
</template>

<script>
import bigCross from "@/assets/icons/bigCross.svg"
import revert from "@/assets/icons/revert.svg"
import UiButton from "@/components/UI/UiButton";
import {mapActions} from "vuex";

export default {
  name: "VueCartItem",
  components: {UiButton},
  props: {
    product: {type: Object}
  },
  data: () => ({
    bigCross,
    revert,
  }),
  methods: {
    ...mapActions({
      incrementCount: "products/incrementProduct",
      decrementCount: "products/decrementProduct",
      disableProduct: "products/disableProduct",
      enableProduct: "products/enableProduct",
    }),
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  height: 96px;
  margin: 12px 0;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    align-items: center;
    width: 100%;

    &--fade {
      user-select: none;
      opacity: 0.1;
    }
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    width: 96px;
    height: 96px;
    margin-right: 8px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 165px;
    height: 68px;
    margin-right: auto;
  }

  &__label {
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #1F2020;
  }

  &__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 128px;
    margin-right: 36px;
  }

  &__button {
    border: none;
    background: unset;

    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
