<template>
  <div>
    <h1>Keliling dan Luas Trapesium</h1>
    <FormTrapesium @form="hitungLuasKeliling($event)" />
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
import FormTrapesium from "@/components/FormTrapesium.vue";
import { reactive } from "vue";
export default {
  name: "Trapesium",
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
      tinggi: 0
    });
    function hitungLuasKeliling(event) {
      state.luas = ((event.a + event.b)/2 * event.tinggi)
      state.keliling = event.a + event.b + event.c + event.d;
      state.a = event.a;
      state.b = event.b;
      state.c = event.c;
      state.d = event.d;
      state.luas = event.luas;
      state.keliling = event.keliling;
      state.tinggi = event.tinggi;
    }
    return {
      state,
      hitungLuasKeliling,
    };
  },
};
</script>
