<template>
  <div
      class="main-page__fade"
  ></div>
</template>

<script>
export default {
  name: "UiFade"
}
</script>

<style lang="scss" scoped>
.fade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 39;
}

</style>
