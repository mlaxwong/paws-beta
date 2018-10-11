import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import dom from './dom'
import nav from './nav'
import field from './field'
import user from './user'

Vue.use(Vuex);

let store;

const modules = {
    auth,
    dom,
    nav,
    field,
    user,
};

const mutations = {
    _init(state) {
        for (const key in Object.keys(this._mutations)) {
            const mutation = Object.keys(this._mutations)[key];
            if (mutation.match(/[a-z]+\/\_init/)) this.commit(mutation);
        }
    }
}

const config = {
    modules,
    mutations,
};

if (!store) {
    store = new Vuex.Store(config);
    store.commit('_init');
}

export default store;