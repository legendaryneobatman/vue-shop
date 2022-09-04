<template>
  <div class="slide">
    <img class="slide__image" :src="image" alt=""/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vue-slider-item',
  props: {
    image: { type: String }
  }
})
</script>

<style lang="scss" scoped>
.slide {
  &__image {
    width: inherit;
    height: 500px;
  }
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

</style>
