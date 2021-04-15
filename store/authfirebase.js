import {auth} from '@/plugins/firebase.js'
import firebase from "firebase/app";


export const state = () => ({
  user1: '',
  error: ''
})

export const mutations = {
  setUser (state, user1) {
    state.user1 = user1
  },
  setError (state, error) {
    state.error = error
  },

  
}

export const actions = {
  signano(context) {
    firebase
      .auth()
      .signInAnonymously()
      .then(response => {
        console.log(response.user)
        console.log(context)
        context.commit('setUser', response.user.uid)
        
      })
      .catch(error => {
        console.log(error)
      });
      
  },

  print(){

  console.log("hola")
  }

}




