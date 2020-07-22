import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#fb6b45',
                secondary: '#009688',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            },
        },
    },
});
