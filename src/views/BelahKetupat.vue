<template>
  <h1>Luas dan Keliling Belah Ketupat</h1>
  <FormBK @form="hitungLuasKeliling($event)" />
  <h3>Keliling</h3>
  <h3>{{ state.keliling }}</h3>
  <h3>Luas</h3>
  <h3>{{ state.luas }}</h3>
</template>

<script>
import { reactive } from "vue";
// import router from "./router";
import FormBK from "@/components/FormBK.vue";

export default {
  name: "App",

  components: {
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
    function hitungLuasKeliling(event) {
      state.luas = parseFloat(event.d1) * parseFloat(event.d2) * 0.5;
      state.keliling = 4 * event.sisi;
    }

    return {
      state,
      hitungLuasKeliling,
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
