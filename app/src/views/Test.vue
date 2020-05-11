<template>
  <div class="test">
    <!-- <SwitchToggle :class="'toggle-type'" :on="false" @switchToggleStatus="cc"></SwitchToggle>
    <SearchBar></SearchBar> -->
    <!-- <SideBar :left="false"></SideBar> -->
    <!-- <NavMenu></NavMenu> -->
    <Axios></Axios>
  </div>
</template>

<script>
import SwitchToggle from '@/components/SwitchToggle.vue'
import SearchBar from '@/components/SearchBar.vue'
import SideBar from '@/components/SideBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Axios from '@/components/Axios.vue'
export default {
  components: {
    SwitchToggle,
    SearchBar,
    SideBar,
    NavMenu,
    Axios
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
</style>