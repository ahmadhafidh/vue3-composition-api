<template>
  <label for="alas">Sisi 1</label>
  <input v-model="state.sisi1" type="number" name="sisi1" />

  <label for="sisi2">Sisi 2</label>
  <input v-model="state.sisi2" type="number" name="sisi2" />

  <label for="tinggi">Tinggi</label>
  <input v-model="state.tinggi" type="number" name="tinggi" />
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup(props, context) {
    const state = reactive({
      sisi1: 0,
      sisi2: 0,
      tinggi: 0,
    });

    watch(state, () => {
      context.emit("form", state);
    });

    return {
      state,
    };
  },
};
</script>

<style></style>
