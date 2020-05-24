<template>
  <transition name="overlays">
    <div class="overlays" v-show="isShow" @click="onClick">
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
    },
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
    }
  }
}
</script>
<style>
.overlays-default{
  --overlays-background-color: rgba(0, 0, 0, .5);
}
</style>

<style scoped>

.overlays{
  background-color: var(--overlays-background-color);
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