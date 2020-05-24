<template>
  <nav-top></nav-top>
</template>

<script>
import Navgation from '@/components/Navgation.vue'
import SwitchToggle from '@/components/SwitchToggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Logo from '@/components/Logo.vue'
import Icon from '@/components/Icon.vue'
import NavTop from '@/components/layouts/NavTop.vue'
export default {
  components: {
    Navgation,
    SearchBar,
    SwitchToggle,
    Icon,
    Logo,
    NavMenu,
    NavTop
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
      
    }
  }
}
</script>

<style>

</style>