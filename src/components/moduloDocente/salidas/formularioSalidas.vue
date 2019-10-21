<template>
  <div id="formularioSalidas">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Registrar salida</h2>
        </v-col>
        <v-col cols="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="tema"
                  :rules="temaReglas"
                  label="Tema de la salida"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field 
                    v-model="programa" 
                    :rules="programaReglas" 
                    label="Programa" 
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
                    v-model="semestre" 
                    :rules="semestreReglas" 
                    label="Semestre" 
                    required>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lugarDestino"
                  :rules="lugarDestinoReglas"
                  label="Lugar de Destino"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="totalEstudiantes"
                  :rules="totalEstudiantesReglas"
                  label="Número de estudiantes"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-date-picker 
                    v-model="fecha"
                    @change="datosFecha()"
                >
                </v-date-picker>
              </v-col>
              <v-col cols="12" md="6">
                <v-time-picker
                    v-model="tiempo"
                    class="mt-2"
                    ampm-in-title
                    @change="datosTiempo()"
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
    name: "formularioSalidas",
    data: () => ({
        tema: '',
        nombreReglas: [
            v => !!v || "Campo requerido"
        ],
        programa: '',
        programaReglas: [
            v => !!v || "Campo requerido"
        ],
        asignatura: '',
        asignaturaReglas: [
            v => !!v || "Campo requerido"
        ],
        semestre: '',
        semestreReglas: [
            v => !!v || "Campo requerido"
        ],
        lugarDestino: '',
        lugarDestinoReglas: [
            v => !!v || "Campo requerido"
        ],
        totalEstudiantes: '',
        totalEstudiantesReglas: [
            v => !!v || "Campo requerido"
        ],
        fecha: new Date().toISOString().substr(0, 10),
        tiempo: null
        
    }),
    methods:{
        datosFecha(){
            console.log(this.fecha);
        },
        datosTiempo(){
            console.log(this.tiempo);
        }
    }
}
</script>
<style>
</style>