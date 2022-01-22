<template>
  <div>
    <h1>Keliling dan Luas Jajar Genjang</h1>
    <FormJajarGenjang @form="hitungLuasKeliling($event)" />
    <div class="result">
      <div>
        <h3>Sisi 1</h3>
        <h1>{{ state.sisi1 }}</h1>
      </div>
      <div>
        <h3>Sisi 2</h3>
        <h1>{{ state.sisi2 }}</h1>
      </div>
      <div>
        <h3>Tinggi</h3>
        <h1>{{ state.tinggi }}</h1>
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
      alas: 0,
      tinggi: 0,
      a: 0,
      b: 0,
      luas: 0,
      keliling: 0,
    });
    function hitungLuasKeliling(event) {
      state.luas = parseFloat(event.d1) * parseFloat(event.d2) * 0.5;
      state.keliling = 4 * event.sisi;
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
