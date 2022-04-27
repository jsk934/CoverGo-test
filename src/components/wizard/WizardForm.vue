<template>
  <div>
    <h1 class="h1 text-center">Tell us about yourself</h1>
    <div class="xl:w-80 mx-auto mt-8">
      <Input label="Name" v-model="name" @change="handleChange" />
      <Input label="Age" v-model="age" @change="handleChange"/>
      <Select label="Where do you live" v-model="country" :options="countryNames"  @change="handleChange" />
    </div>

    <div class="box mt-8">
      <div class="xl:w-80 mx-auto">
        <Radio :options="radioOptions" v-model="package" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from './../Input.vue';
import Select from './../Select.vue';
import Radio from './../Radio.vue';


export default {
  name: 'WizardForm',

  props: {
    modelValue: Object,
  },

  data: () => ({
    name: "",
    age: "",
    country: null,
    package: null,

    radioOptions: [
      {value: "Standart", label: "Standart"},
      {value: "Safe", label: "Safe"},
      {value: "Super Safe", label: "Super Safe"},
    ],

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
  },

  watch: {
    package() {
      this.handleChange()
    }
  },

  methods: {
    handleChange() {
      this.$emit('update:modelValue', {
        name: this.name || "",
        age: this.age || "",
        country: this.country || "",
        currency: this.currency || "",
        package: this.package || ""
      });
    }
  },

  components: {Radio, Input, Select},
};
</script>
