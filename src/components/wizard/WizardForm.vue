<template>
  <div>
    <h1 class="h1 text-center">Tell us about yourself</h1>
    <div class="xl:w-80 mx-auto mt-8">
      <Input label="Name" v-model="name" @keyup="handleChange" />
      <Input label="Age" v-model="age" @keyup="handleChange"/>
      <Select label="Where do you live" v-model="country" :options="countryNames"  @change="handleChange" />
    </div>

    <div class="bg-gray-50 px-9 pt-12 mt-8">
      <div class="xl:w-80 mx-auto">
        <Radio :options="radioOptions" v-model="package" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../common/Input.vue';
import Select from '../common/Select.vue';
import Radio from '../common/Radio.vue';


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
      {value: "Standart", label: "Standart", multiplier: 1},
      {value: "Safe", label: "Safe", multiplier: 1.5},
      {value: "Super Safe", label: "Super Safe", multiplier: 1.75},
    ],

    countries:[
      {name: "Hong Kong", currency: "HKD", priceAdj: 1},
      {name: "USA", currency: "USD", priceAdj: 2},
      {name: "Australia", currency: "AUD", priceAdj: 3},
    ]
  }),

  computed: {
    countryNames() {
      return this.countries.map(el=>el.name)
    },
    countryRecord() {
      if (!this.country) return false;
      const rec = this.countries.filter(el => el.name === this.country);
      if (!rec) return false;
      return rec[0];
    },
    radioOptions() {
      return [
        {value: "Standart", label: "Standart", multiplier: 1},
        {value: "Safe", label: this.makeLabel('Safe', 0.5, 50), multiplier: 1.5},
        {value: "Super Safe", label: this.makeLabel('Super Safe', 0.75, 75), multiplier: 1.75},
      ]
    },

    packageRecord() {
      if (!this.package) return false;
      const rec = this.radioOptions.filter(el => el.value === this.package);
      if (!rec) return false;
      return rec[0];
    },
  },

  watch: {
    package() {
      this.handleChange()
    }
  },

  mounted() {
    this.name = this.modelValue.name || "";
    this.age = this.modelValue.age || null;
    this.country = this.modelValue.country || null;
    // TODO: fix missing package name when user returns from summary
    this.package = this.modelValue.package || null;
  },

  methods: {
    makeLabel(text, multiplier, percent) {
      if (!this.age || !this.country) return text;
      return `${text} (+${this.age * 10 * multiplier}${this.countryRecord.currency}, ${percent}%)`
    },

    handleChange() {
      this.$emit('update:modelValue', {
        name: this.name || "",
        age: this.age || "",
        country: this.country || "",
        currency: this.countryRecord.currency || "",
        priceAdj: this.countryRecord.priceAdj || 1,
        packageMultiplier: this.packageRecord.multiplier || 1,
        package: this.package || ""
      });
    }
  },

  components: {Radio, Input, Select},
};
</script>
