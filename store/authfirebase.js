import {auth, firebase} from '@/plugins/firebase.js'



export const state = () => ({
  user: {},
  error: ''
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setError (state, error) {
    state.error = error
  },

  
}

export const actions = {
  signingoogle(context, context2) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es';
    provider.setCustomParameters({
      prompt: 'select_account'
   });

    firebase.auth()
    .signInWithPopup(provider)
      .then(response => {
        console.log(response.user)
        console.log(context)
        context.commit('setUser', {uid: response.user.uid, username:response.user.displayName,
          email:response.user.email })
          
          
      })
      
      .catch(error => {
        console.log(error)
      });
      console.log("context2......... ", context2)
      console.log("context......... ", context)
      context2.push('/')
      
      
  },

  print(){

  console.log("hola")
  },
  signout(context){
    firebase.auth().signOut().then(() => {
      console.log("sign out")
      console.log(firebase.auth().currentUser)
      
      context.commit('setUser', {})

      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });

  }

}




