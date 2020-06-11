<template>
  <Overlays :show.sync="show" @click="onClick" class="drawer-direction">
    <transition :name="'drawer-' + direction">
      <div class="drawer" ref="drawer" @click="drawerOnClick">
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


.drawer{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.drawer-direction{
  justify-content: center;
  align-items: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* top: 50%;
  left: 50%;
  margin-top: -25%;
  margin-left: -50%; */
  /* height: var(--drawer-height);
  width: var(--drawer-width);
  box-shadow: 2px 2px 10px 8px rgba(0, 0, 0, .2); */
  
}

 .drawer-top{
  top: 0; 
  right: 0;
  left: 0;
 
  
} 
 .drawer-bottom{
  bottom: 0; 
  right: 0;
  left: 0;
 
}
.drawer-left{
  top: 0; 
  bottom: 0;
  left: 0;
 
}
.drawer-right{
  top: 0; 
  bottom: 0;
  right: 0;
  
}

</style>
<style>
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
 .drawer-center-enter-active, .drawer-center-leave-active {
  transition: all .5s;
}
.drawer-center-enter, .drawer-center-leave-to {

  height: 400px;
  width: 500px; 
   background: transparent; 
   opacity: 0;
} 
</style>