<template>
  
    
        

    <div class="container mt-4">


    <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <NuxtLink to="/">
    <b-navbar-brand>Inicio</b-navbar-brand>
    </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Configuración</b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <span>obedmacallums@gmail.com</span>
          </template>
          <b-dropdown-item href="#">Perfil de usuario</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<br>

 <NuxtLink to="/login">
    <b-navbar-brand>login</b-navbar-brand>
    </NuxtLink>

      <button class="btn btn-outline-primary btn-sm mb-4" @click="clean">Borrar</button>
      <br>
      <textarea class="form-control alert-primary" v-model="message_in" id="input" rows="8"></textarea>
      <br>
      <br>

      <textarea class="form-control" v-bind:class="[message_out.length > max_car ? 'alert-danger' : 'alert-success']"
        id="output" v-model="message_out" @click="copy" rows="8"></textarea>
      <br>
      <p class="text-right">Número de caracteres: {{message_out.length}}</p>

      <div>

        <div id="example-1" v-for="(item, index) in list_word" :key="item.index" class="d-inline m-2">

          <div v-if="item.word" class="d-inline mb-5">

            <span class="btn btn btn-sm m-1" @click="mod_status(index)"
              v-bind:class="[item.status ? 'btn-primary' : 'btn-secondary delete-line-through']">{{ item.word }}</span>
          </div>
        </div>


      </div>
    
    </div>
    
  
</template>
<script>


export default {
 middleware({ store, redirect }) {
      // If the user is not authenticated
     console.log(store.state.authfirebase)  
    if (!store.state.authfirebase.user1) {
        return redirect('/login') 
    }
    },

  data() {
    return {
      message_in: "",
      message_out: "",
      list_word: [],
      max_car: 625

    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 200)
    },)

  

  },


  watch: {

    message_in() {
      this.to_process()
    },

  },

  methods: {


    to_process() {

      var varstr = this.message_in;
      var varstr2 = varstr.replace(/(\r\n|\n|\r)/gm, " ").trim();
      var varstr3 = varstr2.split(" ").filter(e => e.trim());
      var varstr4 = varstr3.join(" ").toUpperCase();
      var okokok = varstr4.split(" ");
      this.list_word = okokok.map(word => ({
        "word": word,
        "status": true
      }));
      this.resultado()

    },
    resultado() {
      var resultado1 = this.list_word
      var resultado2 = resultado1.map(x => {
        if (x.status) {
          return x.word
        }
      });

      var resultado3 = resultado2.join(" ")
      var resultado4 = resultado3.split(" ").filter(e => e.trim());
      this.message_out = resultado4.join(" ")

    },

    clean() {
      this.message_in = "";

    },

    copy() {
      var copyText = document.getElementById("output");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    },

    mod_status(index) {
      var xxx = this.list_word
      xxx[index]["status"] = !xxx[index]["status"]
      this.list_word = xxx
      this.resultado()
    }
  },

}
</script>

<style>

.delete-line-through {
    text-decoration: line-through!important;
    text-decoration-line: line-through !important;
    text-decoration-thickness: initial !important;
    text-decoration-style: initial !important;
    text-decoration-color: initial !important;
}

</style>