import Vue from "vue";
import Vuex from "vuex";


import weatherapp from  './modules/weatherapp';

Vue.use(Vuex);

export default new Vuex.Store({
modules:{
    weatherapp
}

});