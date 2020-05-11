<template>
<div class="nav-menu nav-menu-default">
   <router-link v-for="(item, index) in list"
        :key="index" :to="item.path"
      >{{item.name}}</router-link>
  <Icon icon="more_horiz" class="nav-menu-icon" @iconOnClick="show = true"></Icon>
  <SideBar :open.sync="show" :left="false"></SideBar>
</div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  props: {
    list: {
      type: Array,
      default: () => [
        { name: "Home", path: "/home"},
        { name: "About", path: "/abou"},
        { name: "Album", path: "/home"},
        { name: "Hello", path: "/hello"}
      ]
    }
  },
  data(){
    return {
      show: false
    }
  },
  components: {
    Icon,
    SideBar
  },
  watch:{
    show(value){
      console.log(this.show);
      
    }
  },
  updataed(){
    console.log(this.show);
    
  }
}
</script>

<style>
.nav-menu-default{
  --color: #fff;
}
.nav-menu{
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--globalColor);
}

.nav-menu-icon{
  display: none;
}

@media screen and (max-width: 800px) {
	.nav-menu-icon {
    display: block;
    transition-delay: .5s;
  }
  .nav-menu a{
    position: relative;
    right: -100%;
    /* margin-right: -200px; */
    transition: right .3s ease-out; 
  }
}
</style>