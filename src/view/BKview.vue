<template>
  <h1>Luas Belah Ketupat</h1>
  <FormBK @form="hitungLuas($event)" />
  <h3>Keliling</h3>
  <FormBK @form="hitungKeliling($event)" />
  <SummaryBK :sisi="sisi" :luas="luas" :diameter="diameter" :keliling="keliling" />
  <div class="margin">
    <router-link to="/"> <button>Home</button></router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "./router";
import SummaryBK from "./components/SummaryBK.vue";
import FormBK from "./components/FormBK.vue";

export default {
  name: "App",

  components: {
    SummaryBK,
    FormBK,
  },
  methods: {
    toBK() {
      router.push({ path: "/belahketupat" });
    },
  },
  setup() {
    const sisi = ref(0);
    const diameter = ref(3.14);
    const luas = ref(0);
    // const keliling = ref(0);

    function hitungLuas(event) {
      luas.value = parseFloat(event.diameter) * parseFloat(event.diameter) * 0.5;
    }
    // function hitungKeliling(event) {
    //   keliling.value = 4 * sisi.value;
    // }

    return {
      sisi,
      diameter,
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
.margin {
  padding: 3px;
}
</style>
