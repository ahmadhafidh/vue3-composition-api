<template>
  <h4>
    Keliling dari Belah Ketupat yang memiliki Sisi pertama {{ sisi1 }} dan Sisi kedua {{ sisi2 }} adalah {{ keliling }}
  </h4>
  <h4>
    Luas dari Belah Ketupat yang memiliki Alas {{ sisi2 }} dan Tinggi {{ tinggi }} adalah {{ luas }}
  </h4>
</template>

<script>
export default {
    props: {
        sisi1: Number,
        sisi2: Number,
        tinggi: Number,
        luas: Number,
        keliling: Number,
    }
}
</script>

<style>

</style>