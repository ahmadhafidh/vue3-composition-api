<template>
  <div class="wrapper">
    <div class="form-control">
      <label for="sisi">Sisi</label>
      <input v-model.number="state.sisi" type="number" name="sisi" />
    </div>

    <div class="form-control">
      <label for="diagonal1">Diagonal1</label>
      <input v-model.number="state.diagonal1" type="number" name="diagonal1" />
    </div>

    <div class="form-control">
      <label for="diagonal2">Diagonal2</label>
      <input v-model.number="state.diagonal2" type="number" name="diagonal2" />
    </div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  setup(props, context) {
    const state = reactive({
      sisi: 0,
      diagonal1: 0,
      diagonal2: 0,
    })

    watch(state, () => {
      context.emit('form', state)
    })

    return {
      state,
    }
  },
}
</script>
