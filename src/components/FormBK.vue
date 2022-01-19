<template>
  <label for="sisi">Sisi</label>
  <input v-model="state.sisi" type="number" name="sisi" />

  <label for="sisi">Diagonal 1</label>
  <input v-model="state.d1" type="number" name="Diagonal 1" />

  <label for="sisi">Diagonal 2</label>
  <input v-model="state.d2" type="number" name="Diagonal 2" />
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup(props, context) {
    const state = reactive({
      sisi: 0,
      diagonal1: 0,
      diagonal2: 0,
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
