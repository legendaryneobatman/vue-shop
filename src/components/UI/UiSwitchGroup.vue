<template>
  <div
      class="switch-group"
  >
    <div
        v-for="option in switchOptions"
        :key="option.label"
        class="switch-group__item"
    >
      <ui-switch
          :model-value="checked(option.value)"
          class="switch-group__switch"
          @update:model-value="onSwitch( $event, option.value )"
      />
      {{ option.label }}
    </div>
  </div>
</template>

<script>
import UiSwitch from "@/components/UI/UiSwitch";

export default {
  components: {UiSwitch},
  name: "UiSwitchGroup",
  props: {
    switchOptions: {type: Array},
    modelValue: {type:Array}
  },
  methods: {
    onSwitch( value, key) {
      this.$emit('update:modelValue', {key, value})
    },
    checked(key) {
      return this.$store.state.products.selectedFilterOptions.some(option => option.value === key)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &__item {
    display: flex;
  }

  &__switch {
    margin-right: 12px;
  }
}
</style>
