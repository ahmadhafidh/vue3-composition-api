<template>
  <h4>Luas dari Belah Ketupat adalah {{ luas }}</h4>
  <h4>dan memiliki sisi {{ sisi }} keliling sebesar {{ keliling }}</h4>
</template>

<script>
export default {
  props: {
    sisi: Number,
    diameter: Number,
    luas: Number,
    keliling: Number,
  },
};
</script>
