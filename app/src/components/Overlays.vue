<template>
  <transition name="overlays">
    <div :class="$style.overlays" v-show="isShow" @click="onClick">
      <slot></slot>
    </div>  
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: this.open
    }
  },
  methods: {
    onClick(){
      this.$emit("click", event)
    }
  },
  watch: {
    open: {
      handler(value){
        this.isShow = value
      },
      immediate: true
    },
    isShow: {
      handler(value){
        this.$emit("update:open", value)
      },
      immediate: true
    }
  }
}
</script>
<style>
/* .overlays-enter-active, .overlays-leave-active {
  transition: opacity .5s;
}
.overlays-enter, .overlays-leave-to {
  opacity: 0;
} */
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
}
/* .overlays-enter-active, .overlays-leave-active {
  transition: opacity 1.5s;
}
.overlays-enter, .overlays-leave-to {
  opacity: 0;
} */
</style>