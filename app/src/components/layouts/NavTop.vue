<template>
<div class="nav-top">
    <flex-container :class="'flex-container-type'">
      <!-- <flex-item :class="'flex-item-type'"> -->
        <!-- <icon name="menu" class="icon-type" @click="menuIconOnClick"></icon> -->
        <icon-drawer icon="menu" iconType="icon-type"
          drawerDirection="left" drawerType="drawer-type-menu"></icon-drawer>
        
      <!-- </flex-item> -->
      <flex-item></flex-item>
      <!-- <flex-item :class="'flex-item-type-two'"> -->
        <icon-drawer icon="search" iconType="icon-type"
          drawerDirection="top" drawerType="drawer-type-search"></icon-drawer>
        <icon-drawer icon="person" iconType="icon-type"
          drawerDirection="right" drawerType="drawer-type-person"></icon-drawer>
        <icon-drawer icon="settings" iconType="icon-type"
          drawerDirection="bottom" drawerType="drawer-type-settings">
          <settings></settings>  
        </icon-drawer>
        <!-- <icon name="search" class="icon-type" @click="searchIconOnClick"></icon>
        <icon name="person" class="icon-type" @click="personIconOnClick"></icon>
        <icon name="settings" class="icon-type" @click="settingsIconOnClick"></icon> -->
      <!-- </flex-item> -->
    </flex-container>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Drawer from '@/components/Drawer.vue'
import IconDrawer from '@/components/IconDrawer.vue'
import Settings from '@/components/settings/Settings.vue'
import FlexContainer from '@/components/flex/FlexContainer.vue'
import FlexItem from '@/components/flex/FlexItem.vue'
export default {
  components: {
    Icon,
    FlexContainer,
    FlexItem,
    Drawer,
    IconDrawer,
    Settings
  },
  data(){
    return{
      open: false,
      drawerDirection: '',
      drawerType: ''
    }
  },
  methods: {

  }
}
</script>

<style>
.icon-type{
  --icon-height: 50px;
  --icon-width: 55px;
  --icon-size: 28px;
  --icon-color: #fff;
}
/* .drawer-type{
  --drawer-height: 50%;
  --drawer-width: 50%;
  --drawer-background-color: #fff;
  --drawer-font-colr: skyblue;
  --drawer-font-size: 18px;
  --overlays-background-color: rgba(0, 0, 0, 0); 
} */

.drawer-type-menu{
  --drawer-width: 20%;
  --overlays-background-color: transparent;
}
.drawer-type-search{
  --drawer-height: 20%;
  --overlays-background-color: transparent;
}
.drawer-type-person{
  --overlays-background-color: transparent;
}
.drawer-type-settings{
  --drawer-height: 50%;
  --overlays-background-color: transparent;
}


.flex-container-type{
  background-color: rgba(0, 0, 0, 0.77);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);

}
.flex-item-type{
  --flex-item-flex-grow: 1;
}
.flex-item-type-two{
  --flex-item-flex-grow: 2;
  --flex-item-justify-content: flex-end;
}
</style>

<style>
.nav-top {
}
</style>