<template>
    <div class="container">
        <div class="input-group">
            <label for="">Fecha</label>
            <input type="date" v-model="date">
        </div>
        <div class="input-group">
            <label>Origen</label>
            <select v-model="origin">
                <option value="org_0_0_ARBUE_Argentina_Buenos Aires">Buenos Aires</option>
            </select>
        </div>
        <div class="input-group">
            <label for="">Destino</label>
            <select v-model="destiny">
                <option value="dest_0_0_ALDRZ_Albania_Durres">Durres</option>
                <option value="dest_0_1_ALTIA_Albania_Tirana">Tirana</option>
                <option value="dest_11_0_BRQNS_Brazil_Canoas">Canoas</option>
                <option value="dest_11_1_BRCWB_Brazil_Curitiba">Tirana</option>
                <option value="dest_0_1_ALTIA_Albania_Tirana">Curitiba</option>
                <option value="dest_11_2_BRITJ_Brazil_Itajai">Itajai</option>
                <option value="dest_11_3_BRQHV_Brazil_Novo Hamburgo">Novo Hamburgo</option>
                <option value="dest_11_4_BRRIO_Brazil_Rio de Janeiro">Rio de Janeiro</option>
                <option value="dest_11_5_BRSSZ_Brazil_Santos">Santos</option>
            </select>
        </div>
        <button class="search-button" @click="getResource()">Buscar</button>
        <div v-if="result">
            <h3 style="margin: 10px 10px; padding: 10px; background-color: orange;">{{result.fecha}}</h3>
            <table>
                <thead>
                    <tr style="border: 1px orange solid;">
                        <th v-for="(value, key) in result.headers" :key="key" style="border: 1px orange solid;">
                            {{ value }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in result.rows" :key="index" style="border: 1px solid;">
                        <td v-for="(value, key) in row" :key="key" style="border: 1px solid;">
                            {{ value }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.search-button {
    width: 100%;
    background-color: orange;
    padding: 10px;
}
</style>

<script>
    export default {
        name: 'HelloWorld',
        data(){
            return{
                date: '',
                origin : '',
                destiny : '',
                result : {}
            }
        },
        methods:{
            async getResource(){
                const dateObject = new Date(this.date);
                const day = dateObject.getUTCDate();
                String(day)
                axios.get(`http://localhost:3000?date=${day}&origin=${this.origin}&destiny=${this.destiny}`).then(res=>{
                    this.result = res.data
                    console.log(res.data)
                }).catch(error=>{
                    console.log(error.response)
                })
            }
        }
    }
</script>
