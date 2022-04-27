<template>
  <div class="xl:mt-8">
    <wizard-form v-if="state==='form'" v-model="formData" />
    <wizard-summary v-else :form-data="formData" />
  </div>
</template>

<script>
import WizardForm from './../components/wizard/WizardForm.vue';
import WizardSummary from './../components/wizard/WizardSummary.vue';

export default {
  name: 'Wizard',

  data: () => ({
    state: "form",
    formData: {}
  }),

  components: {
    WizardForm,
    WizardSummary
  }
};
</script>
