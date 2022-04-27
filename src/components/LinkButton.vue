<template>
  <router-link :to="to" class="py-3 px-[60px] rounded font-bold bg-black text-white hover:bg-blue-700">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    to: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
