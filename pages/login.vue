<template>
<div>
    <h1>
        login page
        
        <button @click="print">print hola</button>
       <button @click="loginHandler()">sign in google</button>
       <button @click="signout">signout</button>
       user: {{user}}
       
    </h1>
    <br>
    <NuxtLink to="/">
    Inicio
    </NuxtLink>
</div>

</template>
<script>
import { mapActions } from 'vuex'

export default {
    computed: {
    user () {
      return this.$store.state.authfirebase.user
    },
    usererror () {
      return this.$store.state.authfirebase.error
    }
  },

    methods: {

      ...mapActions({
      print: 'authfirebase/print',
      signingoogle: 'authfirebase/signingoogle',
      signout: 'authfirebase/signout'
    }),
    loginHandler(){
      this.signingoogle({ router: this.$router });
    }
     

      }
   
   
    
}
</script>
