<template>
  <div class="wrapper">
    <h1>Luas dan Keliling Trapesium</h1>
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
import FormTrapesium from '@/components/FormTrapesium.vue'
import { reactive } from 'vue'

export default {
  name: 'belahKetupat',
  components: {
    FormTrapesium,
  },
  setup() {
    const state = reactive({
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      tinggi: 0,
      luas: 0,
      keliling: 0,
    })

    function hitungLuasKeliling(event) {
      state.a = event.a
      state.b = event.b
      state.c = event.c
      state.d = event.d
      state.tinggi = event.tinggi
      state.luas = ((event.a + event.b) / 2) * event.tinggi
      state.keliling = event.a + event.b + event.c + event.d
    }

    return {
      state,
      hitungLuasKeliling,
    }
  },
}
</script>
