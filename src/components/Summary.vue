<template>
  <h4>
    Luas dari segitiga yang memiliki alas {{ alas }} dan tinggi {{tinggi}} adalah {{luas}}
  </h4>
</template>

<script>
export default {
     props: {
         alas: Number,
         tinggi: Number,
         luas: Number,
     }
}
</script>

<style>

</style>