<template>
  <label for="sisi">Sisi</label>
  <input v-model="state.sisi" type="number" name="sisi" />
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup(props, context) {
    const state = reactive({
      sisi: 0,
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
