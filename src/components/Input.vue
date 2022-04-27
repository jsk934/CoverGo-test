<template>
  <div class="mb-3">
    <label class="block mb-1">{{ label }}</label>
    <input type="text" :value="modelValue" @input="handleChange"
           class="block w-full px-3 py-1.5 text-base font-normal text-gray-700
                  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                  rounded transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none" />
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    modelValue: String,
    label: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>
