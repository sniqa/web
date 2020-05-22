<template>
  <div id="app" ref="app">
    <router-view/>
    <Alert :msg="$store.state.message.alert"></Alert>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
export default {
    name: "app",
    components: {
        Alert
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

