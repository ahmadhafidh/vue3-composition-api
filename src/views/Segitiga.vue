<template>
  <h1> Luas Segitiga</h1>
  <div>
    <FormSegitiga @form="hitungLuas($event)" />
  </div>
  <h3> Luas</h3>
  <h1> {{ luas }} </h1>
  <SummarySegitiga :alas="alas" :tinggi="tinggi" :luas="luas" />
</template>

<script>
import { ref } from 'vue'
import SummarySegitiga from '@/components/Segitiga/SummarySegitiga.vue'
import FormSegitiga from '@/components/Segitiga/FormSegitiga.vue'

export default {
  name: 'App',

  components:{
    SummarySegitiga,
    FormSegitiga
  },
  setup(){
    const alas = ref(0);
    const tinggi = ref(0);
    const luas = ref(0);

    function hitungLuas(event){
      luas.value = parseFloat(event.alas) * parseFloat(event.tinggi) * 0.5;
      alas.value = event.alas;
      tinggi.value = event.tinggi;
    }

    return {
      alas,
      tinggi,
      luas,
      hitungLuas
    }
  }
}
</script>
