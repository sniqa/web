<template>
<div class="nav-top">
    <flex-container :class="'flex-container-type'">
      <flex-item :class="'flex-item-type'">
        <icon name="menu" class="icon-type" @click="menuIconOnClick"></icon>
      </flex-item>
      <flex-item :class="'flex-item-type-two'">
        <icon name="search" class="icon-type" @click="searchIconOnClick"></icon>
        <icon name="person" class="icon-type" @click="personIconOnClick"></icon>
        <icon name="settings" class="icon-type" @click="settingsIconOnClick"></icon>
      </flex-item>
    </flex-container>
    <drawer :open.sync="open"
      :direction="drawerDirection"
      :drawerType="drawerType"
    >
      
    </drawer>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Drawer from '@/components/Drawer.vue'
import FlexContainer from '@/components/flex/FlexContainer.vue'
import FlexItem from '@/components/flex/FlexItem.vue'
export default {
  components: {
    Icon,
    FlexContainer,
    FlexItem,
    Drawer
  },
  data(){
    return{
      open: false,
      drawerDirection: '',
      drawerType: ''
    }
  },
  methods: {
    menuIconOnClick(){
      this.open = true
      this.drawerDirection = 'drawer-left'
      this.drawerType = 'drawer-type-menu'
    },
    searchIconOnClick(){
      this.open = true
      this.drawerDirection = 'drawer-top'
      this.drawerType = 'drawer-type-search'
    },
    personIconOnClick(){
      this.open = true
      this.drawerDirection = 'drawer-right'
      this.drawerType = 'drawer-type-person'
    },
    settingsIconOnClick(){
      this.open = true
      this.drawerDirection = 'drawer-right'
      this.drawerType = 'drawer-type-settings'
    }
  }
}
</script>

<style>
.icon-type{
  --icon-height: 50px;
  --icon-width: 50px;
  --icon-size: 32px;
  --icon-border: 1px solid red;
}

.drawer-type-menu{
  --drawer-background-color: #fff;
}
.drawer-type-search{
  --drawer-background-color: #411451;
}
.drawer-type-person{
  --drawer-background-color: #a14440;
}
.drawer-type-settings{
  --drawer-background-color: #515315;
}


.flex-container-type{
  border: 1px solid red;
  height: 100px;
}
.flex-item-type{
  border: 1px solid green;
  --flex-item-flex-grow: 1;
}
.flex-item-type-two{
  border: 1px solid green;
  --flex-item-flex-grow: 2;
  --flex-item-justify-content: flex-end;
}
</style>