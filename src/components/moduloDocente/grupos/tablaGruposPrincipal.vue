<template>
    <div id="tablaPrincipal">
        <v-data-table
            :headers        = "headers"
            :items          = "fieldtrips"
            :items-per-page = "5"
            class           = "elevation-1"
        >
        </v-data-table>
    </div>
</template>
<script>
export default {
    name: "tablaPrincipal",
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
        fieldtrips:[
        ]
    }),
    created: function(){
        for(let register of this.datos){
            if(register.eliminated != 1){
                this.fieldtrips.push(register);
            }
        }
    }
}
</script>
<style>

</style>