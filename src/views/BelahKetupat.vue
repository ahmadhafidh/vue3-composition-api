<template>
  <div class="wrapper">
    <h1>Luas dan Keliling Belah Ketupat</h1>
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
  name: 'belahKetupat',
  components: {
    FormBelahKetupat,
  },
  setup() {
    const state = reactive({
      sisi: 0,
      diagonal1: 0,
      diagonal2: 0,
      luas: 0,
      keliling: 0,
    })

    function hitungLuasKeliling(event) {
      state.luas = (event.diagonal1 * event.diagonal2) / 2
      state.keliling = 4 * event.sisi
      state.sisi = event.sisi
      state.diagonal1 = event.diagonal1
      state.diagonal2 = event.diagonal2
    }

    return {
      state,
      hitungLuasKeliling,
    }
  },
}
</script>
