<template>
    <table class="center">
        <tr>
            <td>
                <label for="sisi">Sisi</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.sisi" type="number" name="sisi"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="d1">Diagonal 1</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.d1" type="number" name="d1"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="d2">Diagonal 2</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.d2" type="number" name="d2"/>
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
            sisi : 0,
            d1 : 0,
            d2 : 0,
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