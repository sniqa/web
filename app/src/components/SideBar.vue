<template>
<div class='side-bar side-bar-default' :style="controlAttr">
  <slot></slot>
  <button @click="closeSideBar">X</button>
</div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
     isSideBarHidden: this.open
    }
  },
  computed:{
      isOpen(){
        return this.isSideBarHidden ? null :  {width: 0}
      },
      direction(){
        return this.left ? {left: 0} : {right: 0}
      },
      controlAttr(){
        return [this.direction, this.isOpen]
      }
  },
  components: {
    Icon
  },
  methods: {
    closeSideBar(){
      this.$emit('update:open', false)
    }
  },
   watch: {
        open: {
            handler(value) {
                this.isSideBarHidden = value
            },
            immediate: true
        }
    },
}
</script>

<style>
.side-bar-default{
  --width: 50%;
  --bgColor: rgba(0, 0, 0, .5);
}


.side-bar{
  position: fixed;
	height: 100vh;
	width: var(--width);
	line-height: normal;
	background: var(--bgColor);
	transition: width 0.5s; 
  z-index: 999;
	top: 0;
}


</style>