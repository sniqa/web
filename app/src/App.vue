<template>
  <div id="app" ref="app">
    <init>
      <router-view/>
    </init>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
import Init from '@/components/Init.vue'
export default {
    name: "app",
    components: {
        Alert,
        Init
    },
    data(){
      return {
      }
    },
    
}
</script>

<style>
@import './assets/css/base.css';
#app{
  overflow: hidden;
}

</style> 

