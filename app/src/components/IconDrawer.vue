<template>
  <div class="icon-drawer">
    <icon :name="icon" :class="iconType" @click="open=true"></icon>
    <drawer :open.sync="open"
      :direction="drawerDirection"
      :drawerType="drawerType"
    >
      <slot></slot>
    </drawer>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Drawer from '@/components/Drawer.vue'
export default {
   components: {
    Icon,
    Drawer
  },
  props: {
    icon: {
      type: String,
      default: 'menu'
    },
    iconType: {
      type: String,
      default: ''
    },
    drawerDirection: {
      type: String,
      default: ''
    },
    drawerType: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      open: false,
      drawerDirection: '',
      drawerType: ''
    }
  },
}
</script>

<style>

</style>