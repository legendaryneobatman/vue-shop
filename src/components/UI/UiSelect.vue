<template>
  <div class="select"
       v-click-outside="onCloseSelect">
    <div
        class="select__label"
        @click="onOpenSelect"
    >
      {{ modelValue.label }}
    </div>
    <div
        v-show="isDropDownVisible"
        class="select__dropdown"
    >
      <div
          v-for="({label, value}) in options"
          :key="label"
          :class="{
            select__option: true,
            'select__option--active': value === modelValue.value
          }"
          @click="handleOption({label, value})"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiSelect",
  props: {
    options: {type: Array},
    modelValue: {type: Object}
  },
  data() {
    return {
      isDropDownVisible: false,
    }
  },
  methods: {
    handleOption(option) {
      this.$emit("update:modelValue", option)
      this.onCloseSelect()
    },
    onOpenSelect() {
      this.isDropDownVisible = true;
    },
    onCloseSelect() {
      this.isDropDownVisible = false
    },
  }

}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &__label {
    display: flex;
    align-items: center;

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-left: 4px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #202020;
    }
  }

  &__dropdown {
    position: absolute;
    z-index: 99999;
    top: 30px;
    right: 0;
    width: 280px;
    background-color: red;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }

  &__option {
    padding: 16px 24px;
    text-align: left;
    background: #FFFFFF;
    transition: all 0.2s ease-in-out;

    &--active {
      background: #7BB899;
    }
  }
}
</style>
