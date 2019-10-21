<template>
    <div id="formularioGrupos">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2>Registro de nuevo grupo</h2>
                </v-col>
                <v-col cols="12">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                v-model="codigo" 
                                :rules="codigoReglas" 
                                label="Código" 
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                v-model="tipo" 
                                :rules="tipoReglas" 
                                label="Tipo" 
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                v-model="asignatura" 
                                :rules="asignaturaReglas" 
                                label="Asignatura" 
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                v-model="ano" 
                                :rules="anoReglas" 
                                label="Año" 
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                v-model="semestre" 
                                :rules="semestreReglas" 
                                label="Semestre" 
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-file-input accept=".xls, .xlsx" label="Cargar alumnos"></v-file-input>
                            *El archivo debe tener el siguiente formato:
                            <table>
                                <thead>
                                    <tr>
                                        <th>A1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        Nombre Estudiante
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="12">
                            <v-btn class="success" @click="guardarGrupo()">
                                Guardar grupo
                            </v-btn>
                        </v-col>
                    </v-form>
                </v-col>
            </v-row>
        <v-container>
    </div>
</template>
<script>
export default {
    name: 'formularioGrupos',
    data: () => ({
        codigo:         '',
        codigoReglas:   [
            v => !!v || "Campo requerido"
        ],
        tipo:           '',
        tipoReglas:     [
            v => !!v || "Campo requerido"
        ],
        asignatura:      '',
        asignaturaReglas:[
            v => !!v || "Campo requerido"
        ],
        ano:             '',
        anoReglas:       [
            v => !!v || "Campo requerido"
        ],
        semestre:        '',
        semestreReglas:  [
            v => !!v || "Campo requerido"
        ]
    }),
}
</script>
<style scoped>

</style>