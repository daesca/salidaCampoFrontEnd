<template>
    <div id="panelSalidasPrincipal">
        <v-data-table
            :headers        = "headers"
            :items          = "salidas"
            :items-per-page = "5"
            class           = "elevation-1"
        >
        </v-data-table>
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