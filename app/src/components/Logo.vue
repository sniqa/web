<template>
  <div class="logo">
    <img :src="src">
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  props: {
    src: {
      type: String,
      default: logo
    }
  }
}
</script>
<style>
.logo{
  margin: 5px;
  height: 30px;
  width: 24px;
  cursor: pointer;
}
.logo img{
  width: 100%;
  height: 100%;
}
</style>