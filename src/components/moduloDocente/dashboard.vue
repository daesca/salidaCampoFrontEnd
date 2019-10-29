<template>
    <div id="dashboard">
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <h5>Bienvenido al dashboard del docente</h5>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        
        <v-container>
            <v-row>
                <v-col cols="2" class="side-menu">
                    <v-list shaped>
                        <v-subheader>Menu</v-subheader>
                        <v-list-item-group color="primary">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-flag</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <router-link to="/docente/salidas/principal">
                                                Salidas
                                        </router-link>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                        <v-list-item-title>
                                            <router-link to="/docente/grupos/principal">
                                                Grupos
                                            </router-link>
                                        </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        </v-list>
                </v-col>
                <v-col cols="10">
                    <router-view></router-view>
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
    .side-menu a{
        text-decoration: none;
    }
    .side-menu ul{
        list-style: none;
    }
</style>