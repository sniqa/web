<template>
  <div id="app" :class="model">
    <router-view/>
    <Alert :msg="$store.state.message.alert"></Alert>
    <SwitchToggle @switchToggleStatus="toggleOnClick"></SwitchToggle>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
import SwitchToggle from '@/components/SwitchToggle.vue'
export default {
    name: "app",
    components: {
        Alert,
        SwitchToggle
    },
    data(){
      return {
        model: 'theme-light'
      }
    },
    methods: {
      toggleOnClick(status){
        this.model = status ? "theme-light" : "theme-dark"  
      }
    }
}
</script>

<style>
@import './assets/css/base.css';
#app{
  overflow: hidden;
}
.theme-light{
  --globle-color: #000;
  --globle-bgColor: #fff;
}
.theme-dark{
  --globle-color: #fff;
  --globle-bgColor: #000;
}
</style> 

