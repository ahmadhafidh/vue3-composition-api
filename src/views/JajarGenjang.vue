<template>
    <h1> Luas Jajar Genjang</h1>
    <div class="center">
        <FormJajarGenjang @form="hitung($event)" />
    </div>
    <h3> Keliling</h3>
    <h1> {{ keliling }} </h1>
    <h3> Luas</h3>
    <h1> {{ luas }} </h1>
    <SummaryJajarGenjang 
        :sisi1="sisi1" 
        :sisi2="sisi2" 
        :tinggi="tinggi" 
        :luas="luas"
        :keliling="keliling"
    />
</template>

<script>
import { ref, computed } from 'vue'
import SummaryJajarGenjang from '@/components/JajarGenjang/SummaryJajarGenjang.vue'
import FormJajarGenjang from '@/components/JajarGenjang/FormJajarGenjang.vue'

export default {
  name: 'App',

  components:{
    SummaryJajarGenjang,
    FormJajarGenjang
  },
  setup(){
    const sisi1 = ref(0)
    const sisi2 = ref(0)
    const tinggi = ref(0)
    const luas = computed({
        get: () => parseFloat(sisi2.value) * parseFloat(tinggi.value),
        set: val => {
            sisi2.value = val.alas
            tinggi.value = val.tinggi
        }
    })
    const keliling = computed({
        get: () => 2 * (parseFloat(sisi1.value) + parseFloat(sisi2.value)),
        set: val => {
            sisi1.value = val.sisi1
            sisi2.value = val.sisi2
        }
    })

    function hitung(event){
        luas.value = {
            alas: event.sisi2,
            tinggi: event.tinggi,
        }
        keliling.value = { 
            sisi1: event.sisi1,
            sisi2: event.sisi2
        }
    }

    return {
      sisi1,
      sisi2,
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