<template>
    <div id="detallesGrupos">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2>Detalles del Grupo</h2>
                </v-col>
                <v-col cols="12">
                    <b>Código: </b> {{ codigo }}
                </v-col>
                <v-col cols="12">
                    <b>Tipo: </b> {{ tipo }}
                </v-col>
                <v-col cols="12">
                    <b>Asignatura: </b> {{ asignatura }}
                </v-col>
                <v-col cols="12">
                    <b>Año: </b> {{ ano }}
                </v-col>
                <v-col cols="12">
                    <b>Año: </b> {{ ano }}
                </v-col>
                <v-col cols="12">
                    <b>Semestre: </b> {{ semestre }}
                </v-col>
                <v-col cols="12">
                    <b>Año: </b> {{ ano }}
                </v-col>
                <v-col cols="12">
                    <b>Número de estudiantes: </b> {{ totalEstudiantes }}
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>

    import listaEstudiantes from "./listaEstudiantes.vue";

    export default {
        name: "detallesGrupos",
        componentes:[
            listaEstudiantes
        ],
        data: () => ({
            codigo: 'Codigo prueba 1',
            tipo:   'Tipo prueba 1',
            asignatura: 'Asignatura prueba 1',
            ano:         '2019',
            semestre:    '2',
            totalEstudiantes: '37'
        })
    }
</script>
<style scoped>

</style>