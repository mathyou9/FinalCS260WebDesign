import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memes: []
  },
  mutations: {
    setMemes(state, memes){
      state.memes = memes;
    }
  },
  actions: {
    async getAllMemes(context){
      try{
        let response = await axios.get("/api/memes");
        context.commit('setMemes', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getOneMeme(context, id){
      try{
        let response = await axios.get("/api/memes/" + id);
        context.commit("setMemes", response.data);
        return "";
      } catch (error) {
        return "";
      }
    }
  }
})
