<template>
  <div id="app" ref="app">
    <router-view/>
    <Alert :msg="$store.state.message.alert"></Alert>
    <init></init>
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
        model: 'theme-light'
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

