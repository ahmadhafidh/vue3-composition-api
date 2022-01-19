<template>
    <h1> Luas Belah Ketupat</h1>
    <div class="center">
        <FormBelahKetupat @form="hitung($event)" />
    </div>
    <h3> Keliling</h3>
    <h1> {{ keliling }} </h1>
    <h3> Luas</h3>
    <h1> {{ luas }} </h1>
    <SummaryBelahKetupat 
        :sisi="sisi" 
        :d1="d1" 
        :d2="d2"
        :luas="luas"
        :keliling="keliling"
    />
</template>

<script>
import { ref, computed } from 'vue'
import SummaryBelahKetupat from '@/components/BelahKetupat/SummaryBelahKetupat.vue'
import FormBelahKetupat from '@/components/BelahKetupat/FormBelahKetupat.vue'

export default {
  name: 'App',

  components:{
    SummaryBelahKetupat,
    FormBelahKetupat
  },
  setup(){
    const sisi = ref(0)
    const d1 = ref(0)
    const d2 = ref(0)
    const luas = computed({
        get: () => parseFloat(d1.value) * parseFloat(d2.value) * 0.5,
        set: val => {
            d1.value = val.d1
            d2.value = val.d2
        }
    })
    const keliling = computed({
        get: () => parseFloat(sisi.value) * 4,
        set: val => {
            sisi.value = val
        }
    })

    function hitung(event){
        luas.value = {
            d1: event.d1,
            d2: event.d2,
        }
        keliling.value = event.sisi
    }

    return {
      sisi,
      d1,
      d2,
      luas,
      keliling,
      hitung
    }
  }
}
</script>


<style scoped>
  .center{
    margin: auto;
  }
</style>