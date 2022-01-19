<template>
  <div class="wrapper">
    <div class="form-control">
      <label for="a">Sisi A</label>
      <input v-model.number="state.a" type="number" name="a" />
    </div>
    <div class="form-control">
      <label for="b">Sisi B</label>
      <input v-model.number="state.b" type="number" name="b" />
    </div>
    <div class="form-control">
      <label for="c">Sisi C</label>
      <input v-model.number="state.c" type="number" name="c" />
    </div>
    <div class="form-control">
      <label for="d">Sisi D</label>
      <input v-model.number="state.d" type="number" name="d" />
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
      a: 0,
      b: 0,
      c: 0,
      d: 0,
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
