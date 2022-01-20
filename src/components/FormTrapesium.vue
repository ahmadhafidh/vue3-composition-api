<template>
  <label for="alas">A</label>
  <input v-model="state.a" type="number" name="a" />

  <label for="tinggi">B</label>
  <input v-model="state.b" type="number" name="b" />

  <label for="alas">C</label>
  <input v-model="state.c" type="number" name="c" />

  <label for="tinggi">D</label>
  <input v-model="state.d" type="number" name="d" />

  <label for="tinggi">Tinggi</label>
  <input v-model="state.tinggi" type="number" name="tinggi" />
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup(props, context) {
    const state = reactive({
      a: 0,
      b: 0,
      c: 0,
      d: 0,
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
