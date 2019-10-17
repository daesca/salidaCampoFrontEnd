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
            // {
            //     name:              "Prueba1",
            //     destination_place: "Santa Rosa",
            //     departure_date:    "2019-02-01",
            //     departure_time:    "8:00",
            //     status:            "En revisión",
            //     eliminated:        0  

            // },
            {
                codigo: "100",
                tipo:   "101",
                asignatura: "Asignatura 1",
                ano:       "2019",
                semestre: "2",
                eliminado: 0
            },
            {
                codigo: "200",
                tipo:   "201",
                asignatura: "Asignatura 2",
                ano:       "2019",
                semestre: "2",
                eliminado: 0
            }

        ],
        headers:[
            {
                text: "Codigo",
                value: "codigo"
            },
            {
                text: "Tipo",
                value: "tipo"
            },
            {
                text: "Asignatura",
                value: "asignatura"
            },
            {
                text: "Año",
                value: "ano"
            },
            {
                text: "Semestre",
                value: "semestre"
            },
            // {
            //     text: "Programa",
            //     value: "program"
            // },
            // {
            //     text: "Asignatura",
            //     value:"subject"
            // },

        ],
        grupos:[
        ]
    }),
    created: function(){
        for(let regristro of this.datos){
            if(registro.eliminado != 1){
                this.grupos.push(registro);
            }
        }
    }
}
</script>
<style>

</style>