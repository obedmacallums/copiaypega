<template>
<div>
    <h1>
        login page
        
        <button @click="print">print hola</button>
       <button @click="signano">signano</button>
       userid: {{userid}}
       error: {{usererror}}
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
    userid () {
      return this.$store.state.authfirebase.user1
    },
    usererror () {
      return this.$store.state.authfirebase.error
    }
  },

    methods: {

      ...mapActions({
      print: 'authfirebase/print',
      signano: 'authfirebase/signano'
    }),
     

      }
   
   
    
}
</script>
