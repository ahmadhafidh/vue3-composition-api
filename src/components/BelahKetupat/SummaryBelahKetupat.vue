<template>
  <h4>
    Keliling dari Belah Ketupat yang memiliki Sisi masing-masing {{ sisi }} adalah {{ keliling }}
  </h4>
  <h4>
    Luas dari Belah Ketupat yang memiliki Diagonal pertama {{ d1 }} dan Diagonal kedua {{ d2 }} adalah {{ luas }}
  </h4>
</template>

<script>
export default {
    props: {
        sisi: Number,
        d1: Number,
        d2: Number,
        luas: Number,
        keliling: Number,
    }
}
</script>

<style>

</style>