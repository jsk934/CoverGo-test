<template>
  <div class="w-full">
    <div>
      <div v-for="option in options" class="form-check">
        <label class="form-check-label inline-block text-gray-800">
          <input
            v-model="selected"
            :value="option.value"
            type="radio"
            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white
                   checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition
                   duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Radio',

  props: {
    modelValue: String,
    options: {
      type: Array,
      default: []
    }
  },

  data: () => ({
    selected: null
  }),

  watch: {
    selected(val) {
      this.$emit('update:modelValue', val);
    }
  }
}
</script>
