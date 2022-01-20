<template>
  <div>
    <h1>Keliling dan Luas Jajar Genjang</h1>
    <FormJajarGenjang @form="hitungLuasKeliling($event)" />
    <div class="result">
      <div>
        <h3>Luas</h3>
        <h1>{{ state.luas }}</h1>
      </div>
      <div>
        <h3>Keliling</h3>
        <h1>{{ state.keliling }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import FormJajarGenjang from "@/components/FormJajarGenjang.vue";
import { reactive } from "vue";
export default {
  name: "JajarGenjang",
  components: {
    FormJajarGenjang,
  },
  setup() {
    const state = reactive({
      luas: 0,
      keliling: 0,
      alas: 0,
      tinggi: 0,
    });
    function hitungLuasKeliling(event) {
      state.luas = event.alas * event.tinggi;
      state.keliling = 2 * (event.alas + event.tinggi);
      state.luas = event.luas;
      state.keliling = event.keliling;
      state.alas = event.alas;
      state.tinggi = event.tinggi;
    }
    return {
      state,
      hitungLuasKeliling,
    };
  },
};
</script>
