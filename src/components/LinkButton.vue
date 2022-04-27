<template>
  <span>
    {{ !!clickHandler }}
    <span
      v-if="isDisabled"
      class="py-3 px-[60px] rounded font-bold border-2"
      :class="kind === 'primary' ? 'border-black bg-black text-white opacity-40' : 'border-gray-300 text-black opacity-40'"
    >
      {{ text }}
    </span>
    <span
      v-else-if="!!clickHandler"
      @click="clickHandler"
      class="py-3 px-[60px] rounded font-bold border-2"
      :class="kind === 'primary'
         ? 'border-gray-500 bg-black text-white hover:bg-blue-700 hover:border-blue-700'
         : 'border-gray-300 text-black hover:border-gray-700'"
    >
    {{ text }}
    </span>
    <router-link
      v-else
      :to="to"
      class="py-3 px-[60px] rounded font-bold border-2"
      :class="kind === 'primary'
         ? 'border-black bg-black text-white hover:bg-blue-700 hover:border-blue-700'
         : 'border-gray-300 text-black hover:border-gray-700'"
    >
    {{ text }}
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'LinkButton',

  props: {
    to: {
      type: String,
      default: ""
    },
    clickHandler: {
      type: Function,
      default: null
    },
    kind: {
      type: String,
      default: "primary"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
};
</script>
