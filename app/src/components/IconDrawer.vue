<template>
  <div>
    <icon :name="icon" @click="open=true" :class="iconType"></icon>
    <drawer :open.sync="open"
      :direction="drawerDirection"
      :class="drawerType"
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
      open: false
    }
  },
}
</script>

<style>

</style>