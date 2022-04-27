<template>
  <div class="box text-center mt-9">
    <h1 class="text-6xl font-bold">Hello there!</h1>
    <p class="mt-5">Let's buy some insurance. It's going to take only a few steps.</p>
    <p class="mt-9" ><link-button to="/wizard" text="Start" /></p>
  </div>
</template>

<script>
import LinkButton from "../components/common/LinkButton.vue"

export default {
  name: 'Home',
  components: {
    LinkButton
  }
};
</script>
