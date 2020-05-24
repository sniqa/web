<template>
  <div class="icon-drawer-default icon-drawer">
    <Icon :name="icon" @click="show = !show" :class="iconClass"></Icon>
        <Drawer :open.sync="show" :zclass="drawercCass">
         
            <slot></slot>
         
        </Drawer>  
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Drawer from '@/components/Drawer.vue'
export default {
  props: {
    icon: {
      type: String,
      default: 'settings'
    },
    iconClass: {
      type: String,
      default: ''
    },
    drawercCass: {
      type: String,
      default: "drawer-left"
    },
  },
    components: {
        Icon,
        Drawer
    },
    data(){
        return{
            val: '',
            show: false
        }
    },
    methods: {
      onClick(e){
       this.show = this.$refs.content === e.target ? true : false
      }
    },
  
}
</script>

<style>

.icon-drawer-default{
    --border-radius: 0;
    --border-color: #fff;
    --icon-height: 50px;
    --icon-width: 50px;
}

</style>
<style scoped>
.icon-drawer{
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: var(--icon-height);
  width: var(--icon-width);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--border-color);
}




/* @media screen and (max-width: 800px){
    .search-bar input{
        width: 0;
        height: 0;
        background-color: transparent;
    }
    .search-bar{
        background-color: transparent;

    }
} */

</style>