<template>
    <div>
        {{fruits}}
    </div>
</template>

<script>
export default {
    computed: {
    fruits () {
      return this.$store.state.fruits.fruits
    }
  }
}
</script>