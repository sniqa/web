<template>
  <div class="test">
    <!-- <SwitchToggle :class="'toggle-type'" :on="false" @switchToggleStatus="cc"></SwitchToggle>
    <SearchBar></SearchBar> -->
    <!-- <SideBar :left="false"></SideBar> -->
    <!-- <NavMenu></NavMenu> -->
    <!-- <Axios></Axios> -->
    <!-- <button @click="drawer = true"  style="margin-left: 16px;">open</button>
    <Drawer
      title="I am the title"
      :visible.sync="drawer"
      :direction="direction"
      >
      <span>Hi, there!</span>
    </Drawer> -->
       <!-- :before-close="handleClose" -->
       <!-- <button @click="show=true">show overlays</button>
       <Overlays :open.sync="show"></Overlays> -->
       <button @click="show=true">show drawer</button>
       <Drawer :open.sync="show">
    <SwitchToggle @switchToggleStatus="toggleOnClick"></SwitchToggle>
    sssss

       </Drawer>
  </div>
</template>

<script>
import SwitchToggle from '@/components/SwitchToggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import SideBar from '@/components/SideBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Axios from '@/components/Axios.vue'
// import Drawer from '@/components/drawer/Drawer.vue'
import Drawer from '@/components/Drawer.vue'
import Overlays from '@/components/Overlays.vue'

export default {
  components: {
    SwitchToggle,
    SearchBar,
    SideBar,
    NavMenu,
    Axios,
    Drawer,
    Overlays
  },
   data() {
      return {
        show: false,
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       toggleOnClick(status){
         console.log(this.$refs);
         document.getElementById('app').className =  status ? "theme-light" : "theme-dark"  
      }
    }
   
}
</script>

<style scoped>
/* .test{
  margin: 100px;
  box-sizing: border-box;
  border: 1px solid red;
} */
.toggle-type{
  --size: 16px;
  --color: skyblue;
  --font-color: #fff;
  --background: rgb(89, 117, 158);
  --foreground: #dddddd;
  --round: 0;
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