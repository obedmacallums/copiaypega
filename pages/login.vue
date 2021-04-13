<template>
<div>
    <h1>
        login page
    </h1>
</div>

</template>
<script>
import {firebase, db, auth} from '@/plugins/firebase.js'
import { mapMutations } from 'vuex'

export default {
    computed: {
    todos () {
      return this.$store.state.todos.list
    }
    },


    methods: {
        addTodo (event) {
      this.$store.commit('todos/add', event.target.value)
      event.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    removeTodo (todo){
      this.$store.commit('todos/remove', todo)
    },


    async signIn(){
    try{
      var sign = await auth.signInAnonymously()
      
      this.$store.state.todo.user = 222
      console.log(this.$store.state.todo.user)

    }
    catch (error){
      console.log(error)
    }
    
}
    },

    mounted(){
    this.signIn()
    


    },
    
}
</script>
