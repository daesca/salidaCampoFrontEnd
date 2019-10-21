<template>
    <div id="panelSalidasPrincipal">
        <v-container>
            <v-col cols="12" class="text-right">
                <v-btn class="success btn-general">
                    <router-link to="crear" style="color:#fff">Crear salida</router-link>
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-data-table
                    :headers        = "headers"
                    :items          = "salidas"
                    :items-per-page = "5"
                    class           = "elevation-1"
                >
                </v-data-table>
            </v-col>
        </v-container>
    </div>
</template>
<script>
export default {
    name: "panelSalidasPrincipal",
    data: () => ({
        datos:[
            {
                name:              "Prueba1",
                destination_place: "Santa Rosa",
                departure_date:    "2019-02-01",
                departure_time:    "8:00",
                status:            "En revisión",
                eliminated:        0  

            }
        ],
        headers:[
            {
                text: "Tema",
                value: "name"
            },
            // {
            //     text: "Programa",
            //     value: "program"
            // },
            // {
            //     text: "Asignatura",
            //     value:"subject"
            // },
            {
                text: "Lugar Destino",
                value: "destination_place"
            },
            {
                text: "Fecha de salida",
                value: "departure_date"
            },
            {
                text: "Hora de salida",
                value: "departure_time"
            },
            {
                text: "Estado",
                value: "status"
            }
        ],
        salidas:[
        ]
    }),
    created: function(){
        for(let registro of this.datos){
            if(registro.eliminated != 1){
                this.salidas.push(registro);
            }
        }
    }
}
</script>
<style>

</style>