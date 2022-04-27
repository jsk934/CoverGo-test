<template>
  <div>
    <div v-if="formData.age && formData.age > 100" class="box mt-8 text-center">
      <h1 class="h1 text-center">Oops</h1>
      <p>
        Your age is our accepted limits.
        <br />
        We are sorry but we can't insure you now
      </p>
      <p class="mt-8">
        <link-button to="/" kind="primary" text="Ok :(" />
      </p>
    </div>
    <div v-else-if="formData.age" class="box mt-8 text-center">
      <h1 class="h1 text-center">Summary</h1>
      <h2 class="h2">{{ formData.name }},</h2>
      <p>Age: {{ formData.age }}</p>
      <p>Where do you live: {{ formData.country }}</p>
      <p>Package: {{ formData.package }}</p>
      <p>Premium: {{ formData.price }}{{formData.currency}}</p>
      <p class="mt-8">
        <link-button :click-handler="backHandler" kind="secondary" text="Back" class="mr-3" />
        <link-button to="/" text="Buy" />
      </p>
    </div>
    <div v-else class="box mt-8 text-center">
      <h1 class="h1 text-center">Summary</h1>
      <p>No data submitted</p>
      <p class="mt-8">
        <link-button :click-handler="backHandler" text="Back" class="mr-3" />
      </p>
    </div>
  </div>
</template>

<script>
import LinkButton from '../common/LinkButton.vue';
export default {
  name: 'WizardSummary',
  components: {LinkButton},
  props: {
    formData: {
      type: Object,
      default: ()=>({})
    },
    backHandler: Function
  }
};
</script>
