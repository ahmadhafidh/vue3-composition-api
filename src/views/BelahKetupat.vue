<template>
  <div>
    <h1>Keliling dan Luas Belah Ketupat</h1>
    <FormBelahKetupat @form="hitungLuasKeliling($event)" />
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
import FormBelahKetupat from '@/components/FormBelahKetupat.vue'
import { reactive } from 'vue'
export default {
  name: 'BelahKetupat',
  components: {
    FormBelahKetupat,
  },
  setup() {
    const state = reactive({
      sisi: 0,
      luas: 0,
      keliling: 0,
      d1: 0,
      d2: 0,      
    })
    function hitungLuasKeliling(event) {
      state.luas = (event.d1 * event.d2) / 2
      state.keliling = 4 * event.sisi
      state.sisi = event.sisi
      state.d1 = event.d1
      state.d2 = event.d2
    }
    return {
      state,
      hitungLuasKeliling,
    }
  },
}
</script>