<template>
  <div>
    <nav-top></nav-top>
    <!-- <button  @click="dark">22222</button> -->
    <flex-container class="card-flex-container">

      <card>{{ this.$store.state.token.token }}</card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </flex-container>
  </div>
</template>

<script>
import Navgation from '@/components/Navgation.vue'
import Toggle from '@/components/Toggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Logo from '@/components/Logo.vue'
import Icon from '@/components/Icon.vue'
import NavTop from '@/components/layouts/NavTop.vue'
import Card from '@/components/Card.vue'
import FlexContainer from '@/components/flex/FlexContainer.vue'
export default {
  components: {
    Navgation,
    SearchBar,
    Toggle,
    Icon,
    Logo,
    NavMenu,
    NavTop,
    Card,
    FlexContainer
  },
  data () {
    return {
      list: [
        { name: "Home", path: "/home"},
        { name: "About", path: "/abou"},
        { name: "Album", path: "/home"},
        { name: "Hello", path: "/hello"}
      ]
    }
  },
  methods: {
    modelToggle(val){
      if(val){

      }    
    },
    onClick(){
      let listeners={
  dark:(mediaQueryList )=>{
    if(mediaQueryList.matches){
      alert('您切换到深色模式了！')
    }
  },
  light:(mediaQueryList)=>{
    if(mediaQueryList.matches){
      alert('您切换到浅色模式了！')
    }
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
    },
    dark(){
         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log('您切换到深色模式了！')
    } else {
        console.log('您切换到浅色模式了！')
    }
    }      
  }
}
</script>

<style>
.card-flex-container{
  --justify-content: space-around;
  --align-items: flex-start;
  --flex-wrap: wrap;
  --padding: 1% 5%;
}
.p{
  justify-content:space-between ;
}

</style>