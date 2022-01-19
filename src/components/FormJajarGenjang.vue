<template>
  <div class="wrapper">
    <div class="form-control">
      <label for="alas">Alas</label>
      <input v-model.number="state.alas" type="number" name="alas" />
    </div>

    <div class="form-control">
      <label for="tinggi">Tinggi</label>
      <input v-model.number="state.tinggi" type="number" name="tinggi" />
    </div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  setup(props, context) {
    const state = reactive({
      alas: 0,
      tinggi: 0,
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

<style scoped>
.wrapper {
  width: 100%;
}
.form-control {
  margin: 0 auto;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control input {
  margin-top: 7px;
}
</style>
