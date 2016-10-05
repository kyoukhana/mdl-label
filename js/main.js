import Vue from 'vue'
import VueRouter from 'vue-router'
import mdl from 'material-design-lite'
import VueMdl from 'vue-mdl'

Vue.use(VueRouter);
Vue.use(VueMdl);

var router = new VueRouter();

router.map({
    '/': {
        component: (resolve) => { require(['./components/views/home.vue'], resolve); }
    },

    '/about': {
        component: (resolve) => { require(['./components/views/about.vue'], resolve); }
    }

});

var App = Vue.extend({});

router.start(App, '#app');