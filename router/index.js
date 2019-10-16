import Vue       from 'vue';
import Router from 'vue-router';

//Components
import login              from '../src/components/login/login.vue';
import docenteDashboard   from '../src/components/moduloDocente/dashboard.vue';
import formularioSalidas  from '../src/components/moduloDocente/salidas/formularioSalidas.vue';
//import PruebaExcel        from '../src/components/PruebaExcel.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/docente/principal',
            component: docenteDashboard
        },
        {
            path: '/docente/formulario-salidas',
            component: formularioSalidas
        },
        // {
        //     path: '/pruebaexcel',
        //     component: PruebaExcel
        // }

    ]
});

