<template>
  <div class="container mt-4">
    <button class="btn btn-outline-primary btn-sm mb-4" @click="clean">
      Borrar
    </button>
    <br />
    <textarea
      class="form-control alert-primary"
      v-model="message_in"
      id="input"
      rows="8"
    ></textarea>
    <br />
    <br />

    <textarea
      class="form-control"
      v-bind:class="[
        message_out.length > max_car ? 'alert-danger' : 'alert-success',
      ]"
      id="output"
      v-model="message_out"
      @click="copy"
      rows="8"
    ></textarea>
    <br />
    <p class="text-right">Número de caracteres: {{ message_out.length }}</p>

    <div>
      <div
        id="example-1"
        v-for="(item, index) in list_word"
        :key="item.index"
        class="d-inline m-2"
      >
        <div v-if="item.word" class="d-inline mb-5">
          <span
            class="btn btn btn-sm m-1"
            @click="mod_status(index)"
            v-bind:class="[
              item.status ? 'btn-primary' : 'btn-secondary delete-line-through',
            ]"
            >{{ item.word }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message_in: "",
      message_out: "",
      list_word: [],
      max_car: 625,
    };
  },

  watch: {
    message_in() {
      this.to_process();
    },
  },

  methods: {
    to_process() {
      let dirty_string = this.message_in;
      // removing undesired characters
      let string_1 = dirty_string.replace(/(\r\n|\n|\r|\t)/gm, " ").trim();
      // removing blank spaces for each word
      let string_2 = string_1.split(" ").filter((e) => e.trim());
      // to UpperCase
      let string_3 = string_2.join(" ").toUpperCase();
      // array of clean words
      let array_clean_words = string_3.split(" ");      

      this.list_word = array_clean_words.map((word) => ({
        word,
        status: true,
      }));
      this.result();
    },

    result() {
      let result_1 = this.list_word;
      let result_2 = result_1.map((x) => {
        if (x.status) {
          return x.word;
        }
      });

      // creating output message
      let result_3 = result_2.join(" ");
      let result_4 = result_3.split(" ").filter((e) => e.trim());
      this.message_out = result_4.join(" ");
    },

    clean() {
      this.message_in = "";
    },

    copy() {
      let copyText = document.getElementById("output");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    },

    mod_status(index) {
      let old_list = this.list_word;
      old_list[index]["status"] = !old_list[index]["status"];
      this.list_word = old_list;
      this.result();
    },
  },
};
</script>

<style>
.delete-line-through {
  text-decoration: line-through !important;
  text-decoration-line: line-through !important;
  text-decoration-thickness: initial !important;
  text-decoration-style: initial !important;
  text-decoration-color: initial !important;
}
</style>
