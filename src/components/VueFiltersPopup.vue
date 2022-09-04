<template>
  <div class="filters-popup">
    <div class="filters-popup__decoration"/>
    <slot class="filters-popup__slot"/>
  </div>
</template>

<script>
export default {
  name: "VueFiltersPopup"
}
</script>

<style lang="scss" scoped>
  .filters-popup {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 40;
    width: 100%;
    height: 318px;
    padding: 54px 24px 0 24px;
    background-color: #fff;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    &__decoration {
      position: absolute;
      top: 12px;
      left: 50%;
      width: 28px;
      height: 4px;
      background: #1F2020;
      opacity: 0.6;
      border-radius: 40px;
    }

    &__slot {
    }
  }
</style>
