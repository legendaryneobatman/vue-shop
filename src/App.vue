<template>
  <ui-header/>
  <main-page/>
</template>

<script>
import UiHeader from "@/components/UI/UiHeader";
import MainPage from "@/Pages/MainPage";
export default {
  components: {
    MainPage,
    UiHeader
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Kanit', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #1F2020;
}
</style>
