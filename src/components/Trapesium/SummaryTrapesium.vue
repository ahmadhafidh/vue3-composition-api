<template>
  <h4>
    Keliling dari Trapesium yang memiliki Sisi pertama {{ sisi1 }}, Sisi kedua {{ sisi2 }}, Sisi ketiga {{ sisi3 }}, dan Sisi keempat {{ sisi4 }} adalah {{ keliling }}
  </h4>
  <h4>
    Luas dari Trapesium yang memiliki Alas pertama {{ alasA }}, Alas kedua {{ alasB }} dan Tinggi {{ tinggi }} adalah {{ luas }}
  </h4>
</template>

<script>
export default {
    props: {
        sisi1: Number,
        sisi2: Number,
        sisi3: Number,
        sisi4: Number,
        alasA: Number,
        alasB: Number,
        tinggi: Number,
        luas: Number,
        keliling: Number,
    }
}
</script>

<style>

</style>