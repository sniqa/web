<template>
  <div class="notfound">
    <h1>Not Found</h1>
    <button @click="toHome">Home Page</button>
  </div>
</template>

<script>
export default {
  methods: {
    toHome(){
      this.$router.replace('/')
    }
  }
}
</script>

<style>
.notfound{
  text-align: center;
}

</style>