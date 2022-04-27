<template>
  <div>
    <h1 class="h1 text-center">Tell us about yourself</h1>
    <div class="xl:w-80 mx-auto mt-8">
      <Input label="Name" v-model="name" />
      <Input label="Age" v-model="age"/>
      <Select label="Where do you live" v-model="country" :options="countryNames" />
    </div>

    <div class="box mt-8">
      <div class="xl:w-80 mx-auto">
        <Radio />
      </div>
      <h2 class="h2 text-center">Your premium is: 500HKD</h2>
      <div class="text-center">
        <link-button to="/" text="Back" kind="secondary" class="mr-3" />
        <link-button to="/" text="Next" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from './../Input.vue';
import Select from './../Select.vue';
import Radio from './../Radio.vue';
import LinkButton from './../LinkButton.vue';

export default {
  name: 'WizardForm',

  components: {LinkButton, Radio, Input, Select},

  data: () => ({
    name: "",
    age: "",
    country: null,

    countries:[
      {name: "Hong Kong", currency: "HKD"},
      {name: "USA", currency: "USD"},
      {name: "Australia", currency: "AUD"},
    ]
  }),

  computed: {
    countryNames() {
      return this.countries.map(el=>el.name)
    },
    currency() {
      if (!this.country) return false;
      const countryRecord = this.countries.filter(el => el.name === this.country);
      if (!countryRecord) return false;
      return countryRecord[0].currency;
    },
    dataOk() {
      return this.name && this.age.match(/\d+/g) && this.country;
    }
  }
};
</script>
