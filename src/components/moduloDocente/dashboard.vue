<template>
    <div id="dashboard">
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <h5>Bienvenido al dashboard del profesor</h5>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        
        <v-container>
            <v-row justify="center">
                <tablaSalidasPrincipal></tablaSalidasPrincipal>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>

    import tablaSalidasPrincipal from './salidas/tablaSalidasPrincipal.vue'

    export default {
        name: "professorDashboard",
        components:{
            tablaSalidasPrincipal
        }
    }
</script>
<style lang="stylus">

</style>