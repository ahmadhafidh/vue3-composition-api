<template>
    <h1> Luas Trapesium</h1>
    <div class="center">
        <FormTrapesium @form="hitung($event)" />
    </div>
    <h3> Keliling</h3>
    <h1> {{ keliling }} </h1>
    <h3> Luas</h3>
    <h1> {{ luas }} </h1>
    <SummaryTrapesium 
        :sisi1="sisi1" 
        :sisi2="sisi2" 
        :sisi3="sisi3" 
        :sisi4="sisi4" 
        :alasA="alasA" 
        :alasB="alasB" 
        :tinggi="tinggi"
        :luas="luas"
        :keliling="keliling"
    />
</template>

<script>
import { ref, computed } from 'vue'
import SummaryTrapesium from '@/components/Trapesium/SummaryTrapesium.vue'
import FormTrapesium from '@/components/Trapesium/FormTrapesium.vue'

export default {
  name: 'App',

  components:{
    SummaryTrapesium,
    FormTrapesium
  },
  setup(){
    const sisi1 = ref(0)
    const sisi2 = ref(0)
    const sisi3 = ref(0)
    const sisi4 = ref(0)
    const alasA = ref(0)
    const alasB = ref(0)
    const tinggi = ref(0)
    // const luas = ref(0)
    const luas = computed({
        get: () => 0.5 * (parseFloat(alasA.value) + parseFloat(alasB.value)) * parseFloat(tinggi.value),
        set: val => {
            alasA.value = val.alasA
            alasB.value = val.alasB
            tinggi.value = val.tinggi
        }
    })
    const keliling = computed({
        get: () => parseFloat(sisi1.value) + parseFloat(sisi2.value) + parseFloat(sisi3.value) + parseFloat(sisi4.value),
        set: val => {
            sisi1.value = val.sisi1
            sisi2.value = val.sisi2
            sisi3.value = val.sisi3
            sisi4.value = val.sisi4
        }
    })

    function hitung(event){
        luas.value = {
            alasA: event.alasA,
            alasB: event.alasB,
            tinggi: event.tinggi,
        }
        keliling.value = {
          sisi1 : event.sisi1,
          sisi2 : event.sisi2,
          sisi3 : event.sisi3,
          sisi4 : event.sisi4,
        }
    }

    return {
      sisi1,
      sisi2,
      sisi3,
      sisi4,
      alasA,
      alasB,
      tinggi,
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