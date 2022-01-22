<template>
  <label for="alas">Alas</label>
  <input v-model="state.alas" type="number" name="alas" />

  <label for="tinggi">Tinggi</label>
  <input v-model="state.tinggi" type="number" name="tinggi" />
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup(props, context) {
    const state = reactive({
      alas: 0,
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
