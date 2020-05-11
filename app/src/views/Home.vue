<template>
  <div class="home">
    <Navgation>
      <Logo slot="left"></Logo>
      <h2 slot="left">sniqa</h2>
      <!-- <h2 slot="middle">sniqa</h2> -->
       <SearchBar  slot="middle"></SearchBar>

      
     <NavMenu slot="right"></NavMenu>

    </Navgation>

    <!-- <SwitchToggle @switchToggleStatus="modelToggle"></SwitchToggle> -->
  </div>
</template>

<script>
import Navgation from '@/components/Navgation.vue'
import SwitchToggle from '@/components/SwitchToggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Logo from '@/components/Logo.vue'
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Navgation,
    SearchBar,
    SwitchToggle,
    Icon,
    Logo,
    NavMenu
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