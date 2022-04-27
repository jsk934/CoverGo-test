<template>
  <div class="xl:mt-8">
    <template v-if="view==='form'">
      <wizard-form v-model="formData" />
      <div class="box text-center">
        <h2 v-if="dataOk" class="h2 mb-8 text-center">Your premium is: {{ price }}{{ formData.currency }}</h2>
        <link-button to="/" text="Back" kind="secondary" class="mr-3" />
        <link-button :click-handler="handleFormSubmit" :is-disabled="!dataOk" text="Next" />
      </div>
    </template>

    <wizard-summary v-else :form-data="formData" :back-handler="()=>{this.view='form'}" />
  </div>
</template>

<script>
import LinkButton from './../components/LinkButton.vue';
import WizardForm from './../components/wizard/WizardForm.vue';
import WizardSummary from './../components/wizard/WizardSummary.vue';

export default {
  name: 'Wizard',

  data: () => ({
    view: "form",
    formData: {}
  }),

  computed: {
    price() {
      if (!this.dataOk) return false;
      return this.formData.age * this.formData.packageMultiplier * 10 * this.formData.priceAdj;
    },
    dataOk() {
      return this.formData.name
        && this.formData.age.match(/\d+/g)
        && this.formData.country
        && this.formData.priceAdj
        && this.formData.package;
    }
  },

  methods: {
    handleFormSubmit() {
      this.formData = {...this.formData, price:this.price};
      this.view = 'summary';
    }
  },

  components: {
    LinkButton,
    WizardForm,
    WizardSummary
  }
};
</script>
