<template>
  <Form @form="hitungLuas($event)" />
  <h3>Luas</h3>
  <h1>{{ luas }}</h1>
  <Summary :alas="alas" :tinggi="tinggi" :luas="luas" />
  <router-view/>
    <router-link to="/BelahKetupat">
      <button color="primary">Keliling dan Luas Belah Ketupat</button>
    </router-link>
    <router-link to="/JajarGenjang">
      <button color="primary">Keliling dan Luas Trapesium</button>
    </router-link>
    <router-link to="/Trapesium">
      <button color="primary">Keliling dan Luas Jajar Genjang</button>
    </router-link>
</template>

<script>
import { ref } from "vue";
import Summary from "./components/Summary.vue";
import Form from "./components/Form.vue";

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
