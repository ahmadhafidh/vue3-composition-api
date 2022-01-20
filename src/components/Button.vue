<template>
  <div class="button">
    <router-link to="/BelahKetupat">
      <button color="primary">Keliling dan Luas Belah Ketupat</button>
    </router-link>
    <router-link to="/JajarGenjang">
      <button color="primary">Keliling dan Luas Trapesium</button>
    </router-link>
    <router-link to="/Trapesium">
      <button color="primary">Keliling dan Luas Jajar Genjang</button>
    </router-link>
  </div>
</template>

<style scoped>
.button {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
