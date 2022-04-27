<template>
  <div class="xl:mt-8">
    <template v-if="state==='form'">
      <wizard-form v-model="formData" />
      <div class="box text-center">
        <h2 class="h2 mb-8 text-center">Your premium is: 500HKD</h2>
        <link-button to="/" text="Back" kind="secondary" class="mr-3" />
        <link-button :click-handler="handleFormSubmit" text="Next" />
      </div>
    </template>

    <wizard-summary v-else :form-data="formData" />
  </div>
</template>

<script>
import LinkButton from './../components/LinkButton.vue';
import WizardForm from './../components/wizard/WizardForm.vue';
import WizardSummary from './../components/wizard/WizardSummary.vue';

export default {
  name: 'Wizard',

  data: () => ({
    state: "form",
    formData: {}
  }),

  methods: {
    handleFormSubmit() {
      this.state = 'summary'
    }
  },

  components: {
    LinkButton,
    WizardForm,
    WizardSummary
  }
};
</script>
