<template>
  <Overlays :open.sync="show">
      <transition>
          <div class="drawer">
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
    }
}
</script>

<style>
.drawer{
    position: absolute;
    top: 0; 
    right: 0;
    z-index: 1000;
    background-color: aliceblue;
    width: 50%;
    height: 100%;
}
</style>