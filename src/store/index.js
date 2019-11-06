import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroName: 'psdfdkhfollo'
  },
  mutations: {
    newHero (state, heroName){
      console.log('mutations store');
      this.state.heroName = heroName
      console.log(heroName);
    }
  },
  actions: {
  },
  modules: {
  }
})
