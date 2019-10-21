<template>
    <div id="detallesSalida">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2>Detalles de la salida</h2>
                </v-col>
                <v-col cols="12">
                    <b>Tema: </b> {{ tema }}
                </v-col>
                <v-col cols="12">
                    <b>Programa: </b> {{ programa }}
                </v-col>
                <v-col cols="12">
                    <b>Asignatura: </b> {{ asignatura }}
                </v-col>
                <v-col cols="12">
                    <b>Semestre: </b> {{ semestre }}
                </v-col>
                <v-col cols="12">
                    <b>Lugar de destino: </b> {{ lugarDestino }}
                </v-col>
                <v-col cols="12">
                    <b>Total de estudiantes: </b> {{ totalEstudiantes }}
                </v-col>
                <v-col cols="12">
                    <b>Fecha de Salida: </b> {{ fecha }}
                </v-col>
                <v-col cols="12">
                    <b>Hora de salida: </b> {{ tiempo }}
                </v-col>
            </v-row>
        <v-container>
    </div>
</template>
<script>
export default {
    name:"detallesSalida",
    data:() =>({

        tema: "Tema prueba 1",

        programa: 'Programa de prueba',

        asignatura: 'Asignatura de prueba',

        semestre: 'Semestre de prueba 1',
  
        lugarDestino: 'Lugar destino de prueba',

        totalEstudiantes: '35',

        fecha: '2019-10-20',

        tiempo: '14:20'
    })
}
</script>