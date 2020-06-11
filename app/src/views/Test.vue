<template>
<div class="test">
  <init>
    <nav-one></nav-one>



  </init>
</div>
  
</template>

<script>
import Init from '@/components/Init.vue'
import NavOne from '@/components/layouts/NavOne.vue'
export default {
  components: {
    Init,
    NavOne
  }
}
</script>

<style>
.test{
  height: 100vh;
  width: 100vw;
}

</style>