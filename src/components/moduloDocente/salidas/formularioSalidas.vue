<template>
    <div id="formularioSalidas">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-form ref="form" v-model = "valid" lazy-validation>
                        <v-row>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "name"
                                    :rules = "nameRules"
                                    label = "Tema de la salida"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "program"
                                    :rules  = "programRules"
                                    label   = "Programa"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "subjects"
                                    :rules  = "subjectsRules"
                                    label   = "Asignatura"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "semester"
                                    :rules  = "semesterRules"
                                    label   = "Semestre"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "destination_place"
                                    :rules  = "destination_placeRules"
                                    label   = "Lugar de Destino"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    v-model = "total_students"
                                    :rules  = "total_studentsRules"
                                    label   = "Número de estudiantes"
                                    required
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-date-picker
                                    v-model="date"
                                    min="2016-06-15"
                                    max="2018-03-20"
                                >
                                    </v-date-picker>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-time-picker
                                v-model="picker"
                                class="mt-2"
                                :disabled="disabled"
                                :readonly="readonly"
                                :landscape="landscape"
                                :ampm-in-title="ampmInTitle"
                                :use-seconds="useSeconds"
                                :format="format"
                                :full-width="fullWidth"
                                :no-title="noTitle"
                                :scrollable="scrollable"
                                ></v-time-picker>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: "formularioSalidas"
}
</script>
<style>

</style>