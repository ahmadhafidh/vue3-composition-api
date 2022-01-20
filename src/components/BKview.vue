<template>
  <h1>Luas dan Keliling Belah Ketupat</h1>
  <FormBK @form="hitungLuas($event), hitungKeliling($event)" />
  <h3>Keliling</h3>
  <h3>{{ state.keliling }}</h3>
  <SummaryBK />
  <h3>Luas</h3>
  <h3>{{ state.luas }}</h3>
  <div class="margin">
    <router-link to="/"> <button>Home</button></router-link>
  </div>
</template>

<script>
import { reactive } from "vue";
// import router from "./router";
import SummaryBK from "./components/SummaryBK.vue";
import FormBK from "./components/FormBK.vue";

export default {
  name: "App",

  components: {
    SummaryBK,
    FormBK,
  },
  setup() {
    const state = reactive({
      sisi: 0,
      d1: 0,
      d2: 0,
      luas: 0,
      keliling: 0,
    });
    function hitungLuas(event) {
      state.luas = parseFloat(event.d1) * parseFloat(event.d2) * 0.5;
    }
    function hitungKeliling(event) {
      state.keliling = 4 * event.sisi;
    }

    return {
      // eslint-disable-next-line no-undef
      sisi,
      // eslint-disable-next-line no-undef
      d1,
      // eslint-disable-next-line no-undef
      d2,
      hitungLuas,
      hitungKeliling,
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
.margin {
  padding: 3px;
}
</style>
