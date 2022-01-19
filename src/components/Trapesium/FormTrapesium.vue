<template>
    <table class="center">
        <tr>
            <td>
                <label for="sisi1">Sisi 1</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.sisi1" type="number" name="sisi1"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="sisi2">Sisi 2</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.sisi2" type="number" name="sisi2"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="sisi3">Sisi 3</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.sisi3" type="number" name="sisi3"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="sisi4">Sisi 4</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.sisi4" type="number" name="sisi4"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="alasA">Alas A</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.alasA" type="number" name="alasA"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="alasB">Alas B</label>
            </td>
            <td>:</td>
            <td>
                <input v-model="state.alasB" type="number" name="alasB"/>
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
            sisi1 : 0,
            sisi2 : 0,
            sisi3 : 0,
            sisi4 : 0,
            alasA : 0,
            alasB : 0,
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