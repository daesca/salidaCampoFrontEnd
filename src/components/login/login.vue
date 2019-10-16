<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <h1 class="text-center">Software de Gestion</h1>
            </v-col>
            <v-col cols="4" style="border:1px solid #ccc; border-radius: 5px;">
                <h3 class="text-center">¡Buen día!</h3>
                <v-form ref="form" v-model = "valid" lazy-validation>
                    <v-alert :type = "messageOptions.class" id="alerts" class="none">
                       {{ messageOptions.message }}
                    </v-alert>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model = "username"
                            :rules = "userRules"
                            label = "Usuario"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model = "password"
                            :rules  = "passwordRules" 
                            label   = "Contraseña"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="text-right">
                        <v-btn class="success" dark @click="formValidate()">Ingresar</v-btn>
                    </v-col>
                </v-form>
            </v-col>
        </v-row>
    </v-container> 
</template>
<script>

export default({
    name: "login",
    data: () => ({
        valid: true,
        messageOptions: {
            class: "",
            message : ""
        },
        username : '',
        userRules: [
            v => !!v || "Campo requerido"
        ],
        password : '',
        passwordRules: [
            v => !!v || "Campo requerido"
        ],  
    }),
    methods: {
        authUser(){
            let result = {
                status: true,
                message: ""
            }
            if(this.username != "hola" && this.password != "quetal"){
                result.status  = false;
                result.message = "Usuario o contraseña inválidos";
            }

            return result;
        },
        formValidate(){
            if(this.$refs.form.validate()){
                let authValidate = this.authUser();
                if(authValidate.status){
                    this.$router.push("docente/principal");
                }
                this.messageOptions.class   = "error";
                this.messageOptions.message = authValidate.message;
                document.querySelector("#alerts").classList.remove("none");
                
            }
        }
    }
});

</script>   