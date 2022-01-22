<template>
    <h1>Luas Segitiga</h1>
    <Form @form="hitungLuas($event)" />
    <h3>Luas</h3>
    <h1>{{ luas }}</h1>
    <Summary :alas="alas" :tinggi="tinggi" :luas="luas" />
</template>


<script>
import { ref } from "vue";
import Summary from "@/components/Summary.vue";
import Form from "@/components/Form.vue";

export default {
  name: "App",

  components: {
    Summary,
    Form,
  },
  setup() {
    const alas = ref(0);
    const tinggi = ref(0);
    const luas = ref(0);

    function hitungLuas(event) {
      luas.value = parseFloat(event.alas) * parseFloat(event.tinggi) * 0.5;
      alas.value = event.alas;
      tinggi.value = event.tinggi;
    }

    return {
      alas,
      tinggi,
      luas,
      hitungLuas,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>