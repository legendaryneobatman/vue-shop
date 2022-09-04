<template>
  <div v-if="id" class="switch">
    <input
        @change="handleSwitchChange"
        :checked="modelValue"
        :id="id"
        name="check"
        type="checkbox"
    >
    <label :for="id"></label>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: "UiSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  data: () => ({
    id: null,
  }),
  mounted() {
    this.id = uuidv4()
  },
  methods: {
    handleSwitchChange() {
      this.$emit("update:modelValue", !this.modelValue)
    }
  }
}
</script>

<style lang="scss" scoped>

.switch {
  & input[type="checkbox"] {
    display: none;

    & + label {
      display: block;
      position: relative;
      width: 36px;
      height: 22px;
      cursor: pointer;
      transition: background 0.1s ease-in-out;
      border-radius: 40px;
      background: #F2F2F2;

      &:before {
        content: "";
        display: block;
        border-radius: 1em;
        position: absolute;
        left: 7px;
        top: 7px;
        transition: all 0.2s ease-in-out;
        width: 8px;
        height: 8px;
        background: #1F2020;
      }
    }

    &:checked + label {
      background: #7BB899;

      &:before {
        left: 21px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
