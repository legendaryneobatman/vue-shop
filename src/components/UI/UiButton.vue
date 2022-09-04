<template>
  <button
      :class="{'button--small': small}"
      class="button"
  >{{ label }}
  </button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    label: {type: String},
    small: {type: Boolean}
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 32px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  background: #F2F2F2;
  transition: all 0.15s ease-in-out;

  &--small {
    width: 40px;
    height: 24px;
  }

  &:active {
    background: #7BB899;
  }

  &:hover {
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  }

  &:disabled {
    box-shadow: none;
    background: #F2F2F2;
  }

  @include media-breakpoint-down(sm) {
    & {
      font-size: 16px;
      width: 40px;
      height: 24px;
    }
  }
}
</style>
