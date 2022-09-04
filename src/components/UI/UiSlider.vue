<template>
  <div ref="slider" class="slider">
    <span class="slider__text">Главная · Продукты · Краски</span>
    <div
        ref="slider-list"
        :style="{ transform: `translateX(${translateX})` }"
        class="slider__list"
    >
      <vue-slider-item
          v-for="picture in photos"
          :key="picture"
          :image="picture"
          :style="{ width: `${containerWidth}px` }"
          class="slider__item"
      />
    </div>
    <a class="slider__prev" @click="prevSlide">&#10094;</a>
    <a class="slider__next" @click="nextSlide">&#10095;</a>
  </div>
  <div class="slider__dots">
    <span
        v-for="(dot, dotIndex) in photos"
        :key="dot + dotIndex"
        :class="{slider__dot: true, 'slider__dot--active': activeSlideIndex === dotIndex + 1 }"
        @click="selectSlide(dotIndex + 1)"
    />
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import VueSliderItem from '@/components/UI/UiSliderItem'

export default defineComponent({
  name: 'UiSlider',
  components: {VueSliderItem},
  props: {
    photos: {
      type: Array,
    }
  },
  data: () => ({
    activeSlideIndex: 1,
    containerWidth: 0
  }),
  computed: {
    translateX() {
      return `-${this.containerWidth * (this.activeSlideIndex - 1)}px`
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    selectSlide(index) {
      this.activeSlideIndex = index
    },
    nextSlide() {
      if (this.activeSlideIndex === this.photos?.length) {
        this.activeSlideIndex = 1
      } else {
        this.activeSlideIndex += 1
      }
    },
    prevSlide() {
      if (this.activeSlideIndex === 1) {
        this.activeSlideIndex = this.photos.length
      } else {
        this.activeSlideIndex -= 1
      }
    },
    onResize() {
      this.containerWidth = this.$refs.slider.offsetWidth
    }
  }
})
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
  z-index: 0;

  &__text {
    position: absolute;
    left: 64px;
    top: 32px;
    z-index: 1;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #FFFFFF;
    opacity: 0.3;

  }

  &__list {
    display: flex;
    align-items: center;
    width: 100%;

    transition: all ease-in-out .3s;
  }

  &__item {
    width: 100%;
  }

  &__prev, &__next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  &__next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  &__dots {
    position: absolute;
    bottom: 39px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
    height: 32px;
    width: fit-content;
    padding: 10px 13px;
    text-align: center;
  }


  &__prev:hover, &__next:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__dot {
    cursor: pointer;
    height: 6px;
    width: 6px;
    margin: 0 2px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    &--active {
      background-color: #717171;
    }
  }
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
