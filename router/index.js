import Vue       from 'vue';
import Router from 'vue-router';

//Components
import login              from '../src/components/login/login.vue';
import professorDashboard from '../src/components/professorModule/dashboard.vue';
import formFieldTrip      from '../src/components/professorModule/formFieldTrip.vue';
import PruebaExcel        from '../src/components/PruebaExcel.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/pm/dashboard',
            component: professorDashboard
        },
        {
            path: '/formFT',
            component: formFieldTrip
        },
        {
            path: '/pruebaexcel',
            component: PruebaExcel
        }

    ]
});

