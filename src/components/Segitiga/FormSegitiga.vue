<template>
    <table class="center">
        <tr>
            <td>
                <label for="alas">Alas</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.alas" type="number" name="alas"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="tinggi">Tinggi</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.tinggi" type="number" name="tinggi"/>
            </td>
        </tr>
    </table>

    <br>
    
</template>

<script>
import { reactive, watch } from 'vue'

export default {
    name: 'FormSegitiga',
    setup(props, context){
        const state = reactive({
            alas : 0,
            tinggi : 0,
        });

        
        watch(state, () => {
            context.emit('form', state);
        })

        return {
            state
        }

    }

}
</script>

<style scoped>
  .center{
    margin: auto;
  }
</style>