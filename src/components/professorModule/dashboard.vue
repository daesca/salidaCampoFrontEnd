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
                <tabledashboard></tabledashboard>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>

    import tabledashboard from './tabledashboard.vue'

    export default {
        name: "professorDashboard",
        components:{
            tabledashboard
        }
    }
</script>
<style lang="stylus">

</style>