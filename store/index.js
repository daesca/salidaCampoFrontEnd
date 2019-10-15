import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        registers:[]
    },
    mutations:{
        addRegister(state){

        }
    }
});

export default store;