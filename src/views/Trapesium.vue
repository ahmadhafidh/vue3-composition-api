<template>
  <h1>Luas dan Keliling Jajar Genjang</h1>
  <FormTrapesium @form="hitungLuasKeliling($event)" />
  <h3>Keliling</h3>
  <h3>{{ state.keliling }}</h3>
  <h3>Luas</h3>
  <h3>{{ state.luas }}</h3>
</template>

<script>
import { reactive } from "vue";
// import router from "./router";
import FormTrapesium from "@/components/FormTrapesium.vue";

export default {
  name: "App",

  components: {
    FormTrapesium,
  },
  setup() {
    const state = reactive({
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      luas: 0,
      keliling: 0,
    });
    function hitungLuasKeliling(event) {
      state.a = event.a;
      state.b = event.b;
      state.c = event.c;
      state.d = event.d;
      state.tinggi = event.tinggi;
      state.luas = ((event.a + event.b) / 2) * event.tinggi;
      state.keliling = event.a + event.b + event.c + event.d;
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
