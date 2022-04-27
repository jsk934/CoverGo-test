<template>
  <div class="xl:mt-8">
    <wizard-form v-if="state==='form'" />
    <wizard-summary v-else />
  </div>
</template>

<script>
import WizardForm from './../components/wizard/WizardForm.vue';
import WizardSummary from './../components/wizard/WizardSummary.vue';

export default {
  name: 'Wizard',

  data: () => ({
    state: "form",
  }),

  components: {
    WizardForm,
    WizardSummary
  }
};
</script>
