<template>
<div class="test">
  <button @click="show=!show">show</button>
 <user-info :show.sync="show"></user-info>
</div>
  
</template>

<script>
import Init from '@/components/Init.vue'
import NavOne from '@/components/layouts/NavOne.vue'
import UserInfo from '@/components/UserInfo.vue'
export default {
  components: {
    Init,
    NavOne,
    UserInfo
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      show: false
    }
  }
}
</script>

<style>
.test{
  height: 100vh;
  width: 100vw;
}

</style>