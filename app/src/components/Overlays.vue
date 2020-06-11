<template>
  <transition name="overlays">
    <div :class="[$style.overlays, $style['overlays-' + direction]]" v-show="isShow" @click="onClick">
      <slot></slot>
    </div>  
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'left'
    },
    synch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: this.show
    }
  },
  methods: {
    onClick(){
      this.isShow = false
      this.$emit("click", event)
    }
  },
  watch: {
    show: {
      handler(curVal){
        this.isShow = curVal
      },
      immediate: true
    },
    synch: {
      handler(curVal){
        this.isShow = curVal
      },
      immediate: true
    },
    isShow: {
      handler(curVal){
        this.$emit("update:show", curVal)
        this.$emit("update:synch", curVal)
      },
      immediate: true
    }
  }
}
</script>
<style>
.overlays-enter-active, .overlays-leave-active {
  transition: opacity .5s;
}
.overlays-enter, .overlays-leave-to {
  opacity: 0;
}
</style>

<style module>

.overlays{
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;

}
.overlays-center{
  justify-content: center;
}
.overlays-top{
  flex-flow: column;
}
.overlays-bottom{
  flex-flow: column;
  justify-content: flex-end;
}
.overlays-left{
  justify-content: flex-start;
}
.overlays-right{
  justify-content: flex-end;
}
</style>