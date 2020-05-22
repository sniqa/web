<template>
  <transition name="overlays">
       <!-- @after-enter="afterEnter"
    @after-leave="afterLeave" -->
    <div class="overlays" v-show="isShow">
      <button @click="btnOnClick" class="overlays-btn">Hide overlays</button>  
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
    btnOnClick(){
      this.$emit("update:open", false)
    }
  },
  watch: {
    open: {
      handler(value){
        this.isShow = value
      },
      immediate: true
    }
  }
}
</script>

<style>
.overlays{
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.overlays-enter-active, .overlays-leave-active {
  transition: opacity .5s;
}
.overlays-enter, .overlays-leave-to {
  opacity: 0;
}
</style>