<template>
  <div class="burger-menu">
    <button class="burger-menu__button">
      <img class="burger-menu__icon" src="@/assets/icons/burger.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "UiBurgerMenu",
  data: () => ({
    isOpen: false
  }),
}
</script>

<style lang="scss" scoped>
.burger-menu {
  display: none;

  &__button {
    position: relative;
    border: none;
    background-color: unset;
    width: 24px;
    height: 24px;
  }

  &__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;

  }

  @include media-breakpoint-down(xl) {
    display: block;
  }
}

</style>
