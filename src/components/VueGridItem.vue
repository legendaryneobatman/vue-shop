<template>
  <div class="grid-item">
    <div class="grid-item__image">
      <img :src="product.image" alt="">
    </div>
    <span class="grid-item__label">{{ product.label }}</span>
    <div class="grid-item__wrapper">
      <div class="grid-item__price">{{ product.price }} ₽</div>
      <ui-button @click="addProduct" :label="'+'" class="grid-item__button"/>
    </div>
    <hr class="grid-item__divider">
  </div>
</template>

<script>
import UiButton from "@/components/UI/UiButton";

export default {
  name: "VueGridItem",
  components: {UiButton},
  props: {
    product: {type: Object}
  },
  methods: {
    addProduct() {
      this.$store.dispatch("products/addProduct", this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 284px;
  height: 393px;
  font-weight: 300;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.02em;

  &__divider {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 14px;
    background: #000000;
    opacity: 0.1;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    max-width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      width: min-content;
      height: min-content;
    }
  }

  &__label {
    margin-bottom: 16px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__price {
    font-weight: 600;
    line-height: 100%;
  }
  &__button {
  }

  @include media-breakpoint-down(sm) {
    & {
      width: 156px;
      height: 305px;
      max-width: 100%;
      max-height: 100%;

      object-fit: fill;

      &__image {
        img {
          width: 100%;
          height: auto;

        }
      }
    }
  }
}
</style>
