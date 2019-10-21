<template>
    <div id="dashboard">
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <h5>Bienvenido al dashboard del profesor</h5>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        
        <v-container>
            <v-row>
                <v-col cols="1" class="side-menu">
                    <ul>
                        <li>
                            <router-link to="/docente/salidas/principal">Salidas</router-link>
                        </li>
                        <li>
                            <router-link to="/docente/grupos/principal">Grupos</router-link>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="11">
                    <router-view></router-view>
                    <!-- <router-view name="docentePrincipalSalidas"></router-view>
                    <router-view name="docentePrincipalGrupos"></router-view> -->
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>
<script>

    export default {
        name: "professorDashboard",

    }
</script>
<style>
    .side-menu{
        border-right: 1px solid #000;
    }

    .side-menu ul{
        list-style: none;
    }
</style>