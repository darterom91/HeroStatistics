import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroName: ''
  },
  mutations: {
    newHero (state, heroName){
      console.log('mutations store');
      this.state.heroName = heroName;
      
      console.log(heroName);
    },
    
  },
  actions: {
  },
  modules: {
  }
})
