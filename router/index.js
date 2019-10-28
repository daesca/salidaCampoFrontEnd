import Vue       from 'vue';
import Router from 'vue-router';

//Components
import login                    from '../src/components/login/login.vue';
import docenteDashboard         from '../src/components/moduloDocente/dashboard.vue';

//Rutas para componentes del modulo de Salidas
import panelSalidasPrincipal    from '../src/components/moduloDocente/salidas/panelSalidasPrincipal.vue';
import formularioSalidas        from '../src/components/moduloDocente/salidas/formularioSalidas.vue';
import detallesSalida           from '../src/components/moduloDocente/salidas/detallesSalida.vue';

//Rutas para componentes del modulo de grupos
import panelGruposPrincipal     from '../src/components/moduloDocente/grupos/panelGruposPrincipal.vue';
import formularioGrupos         from '../src/components/moduloDocente/grupos/formularioGrupos.vue';

import PruebaExcel        from '../src/components/PruebaExcel.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/docente/',
            component: docenteDashboard,
            children: [
                {
                    path: 'salidas/principal',
                    //component: { docentePrincipalSalidas: panelSalidasPrincipal}
                    component: panelSalidasPrincipal
                },
                {
                    path: 'grupos/principal',
                    //component: {docentePrincipalGrupos: panelGruposPrincipal }
                    component: panelGruposPrincipal 
                },
                {
                    path: 'salidas/crear',
                    component: formularioSalidas
                },
                {
                    path: 'salidas/detalle',
                    component: detallesSalida
                }
            ]
        },
        {
            path: '/docente/formulario-salidas',
            component: formularioSalidas
        },
        {
            path: '/pruebaexcel',
            component: PruebaExcel
        }

    ]
});

