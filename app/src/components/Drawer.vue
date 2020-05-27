<template>
  <Overlays :open.sync="show" @click="onClick" class="drawer-default">
      <transition :name="'drawer-' + direction">
          <div class="drawer" v-if="show" :class="'drawer-' + direction " ref="drawer" @click="drawerOnClick">
              <slot></slot>
          </div>
      </transition>
  </Overlays>
</template>

<script>
import Overlays from '@/components/Overlays.vue'
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        },
        direction:{
          type: String,
          default: 'left'
        }
    },
    data(){
        return {
            show: this.open
        }
    },
    components: {
        Overlays
    },
    watch: {
        open: {
            handler(value){
              this.show = value
            },
            immediate: true
        },
        show: {
            handler(value){
              this.$emit("update:open", value)
            },
            immediate: true
        }
    },
    methods: {
      onClick(event){
        this.show = false
      },
      drawerOnClick(event){
        event.stopPropagation()
      }
    },
}
</script>

<style>

.drawer-default{
  --drawer-height: 50%;
  --drawer-width: 50%;
  --drawer-background-color: #fff;
  --drawer-font-colr: skyblue;
  --drawer-font-size: 18px;
}

</style>


<style scoped>


.drawer{
    position: absolute;   
    z-index: 1000;
    background-color: var(--drawer-background-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: var(--drawerfont-colr);
    font-size: var(--drawer-font-size);
}
.drawer-top{
  top: 0; 
  right: 0;
  left: 0;
  height: var(--drawer-height);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  
}
.drawer-bottom{
  bottom: 0; 
  right: 0;
  left: 0;
  height: var(--drawer-height);
  box-shadow: -5px -5px 10px rgba(0, 0, 0, .2);

}
.drawer-left{
  top: 0; 
  bottom: 0;
  left: 0;
  width: var(--drawer-width);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
}
.drawer-right{
  top: 0; 
  bottom: 0;
  right: 0;
  width: var(--drawer-width);
  box-shadow: -5px 5px 10px rgba(0, 0, 0, .2);
}
.drawer-left-enter-active, .drawer-left-leave-active,
.drawer-right-enter-active, .drawer-right-leave-active {
  transition: width .5s;
}
.drawer-left-enter, .drawer-left-leave-to,
.drawer-right-enter, .drawer-right-leave-to {
  width: 0;
}
.drawer-top-enter-active, .drawer-top-leave-active,
.drawer-bottom-enter-active, .drawer-bottom-leave-active {
  transition: height .5s;
}
.drawer-top-enter, .drawer-top-leave-to,
.drawer-bottom-enter, .drawer-bottom-leave-to {
  height: 0;
}
</style>