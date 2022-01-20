<template>
  <h1>Luas Segitiga</h1>
  <Form @form="hitungLuas($event)" />
  <h3>Luas</h3>
  <h1>{{ luas }}</h1>
  <Summary :alas="alas" :tinggi="tinggi" :luas="luas" />

  <router-link to="/">Home </router-link>
  <router-link to="/belahketupat">Belah Ketupat </router-link>
  <router-link to="/jajargenjang">Jajar Genjang</router-link>
  <router-link to="/trapesium">Trapesium</router-link>
  <router-view />
</template>

<script>
import { ref } from "vue";
import router from "./router";
import Summary from "./components/Summary.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",

  components: {
    Summary,
    Form,
  },
  methods: {
    toBK() {
      router.push({ path: "/belahketupat" });
    },
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
