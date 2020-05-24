<template>
  <div class="test">
    <!-- <SwitchToggle :class="'toggle-type'" :on="false" @switchToggleStatus="cc"></SwitchToggle>-->
    <!-- <SearchBar></SearchBar>  -->
    <!-- <SideBar :left="false"></SideBar> -->
    <!-- <NavMenu></NavMenu> -->
    <!-- <Axios></Axios> -->
   
       <!-- :before-close="handleClose" -->
       <!-- <button @click="show=true">show overlays</button>
       <Overlays :open.sync="show"></Overlays> -->
        <!-- <button @click="show=true">show drawer</button>
       <Drawer :open.sync="show" zclass="drawer-right"></Drawer> -->
 <!--   <SwitchToggle @switchToggleStatus="toggleOnClick"></SwitchToggle>
    sssss

       </Drawer> -->
  <!-- <work-area></work-area> -->
    <icon name="settings" class="icon-type"></icon>
  </div>
</template>

<script>
import SwitchToggle from '@/components/SwitchToggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import SideBar from '@/components/SideBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Axios from '@/components/Axios.vue'
import Icon from '@/components/Icon.vue'
// import Drawer from '@/components/drawer/Drawer.vue'
import Drawer from '@/components/Drawer.vue'
import Overlays from '@/components/Overlays.vue'
import WorkArea from '@/components/WorkArea.vue'

export default {
  components: {
    SwitchToggle,
    SearchBar,
    SideBar,
    NavMenu,
    Axios,
    Icon,
    Drawer,
    Overlays,
    WorkArea,
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

<style>
/* .test{
  margin: 100px;
  box-sizing: border-box;
  border: 1px solid red;
} */
.icon-drawer-type{
    --border-radius: 0;
    --font-size: 16px;
    --border-color: #fff;
    --drawer--height: 100px;
    --drawer--width: 100px;
    --icon-height: 50px;
    --icon-width: 50px;
    --icon-size: 24px;
}
.drawer-left{
  --drawer-width: 200px;
}

.icon-type{
  --icon-size: 96px;
  --icon-color: #dddd;
  --icon-width: 100px;
  --icon-height: 100px;
  --icon-border: 5px solid red;
  --icon-background-color: rgba(0,0,0,.5);
}
/* .toggle-type{
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
} */

</style>