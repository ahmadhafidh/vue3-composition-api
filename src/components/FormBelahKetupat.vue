<template>
    <div>
      <label for="sisi">Sisi</label>
      <input v-model.number="state.sisi" type="number" name="sisi" />
    </div>

    <div>
      <label for="diagonal1">Diagonal1</label>
      <input v-model.number="state.d1" type="number" name="diagonal1" />
    </div>

    <div>
      <label for="diagonal2">Diagonal2</label>
      <input v-model.number="state.d2" type="number" name="diagonal2" />
    </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  setup(props, context) {
    const state = reactive({
      sisi: 0,
      d1: 0,
      d2: 0,
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
