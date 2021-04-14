import {auth} from '@/plugins/firebase.js'

export const state = () => ({
  user: null,
  error: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setError (state, error) {
    state.error = error
  },

  async signInA({ commit }, payload){

    try{
    var response = await auth.signInAnonymously()
    commit("setUser", response.user)
  }
    catch (error){
    commit("setError", error.message);

    }

  }
}

export const actions = {
  


}
