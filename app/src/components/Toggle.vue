<template>
  <div :class="[$style['toggle-default'], $style.toggle,
   { [$style['toggle-status-true']]: toggleStatus, [$style['toggle-status-false']]: !toggleStatus} ]"
   @click="popStatus">
  </div>
</template>

<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggleStatus: this.on
    }
  },
  methods: {
    popStatus(){
      this.toggleStatus = !this.toggleStatus
      this.$emit("update:on", this.toggleStatus)      
    }
  }
}
</script>

<style module>
.toggle-default{
  --toggle-size: 1em;
  --toggle-true-bg-color: rgb(138, 134, 148);
  --toggle-false-bg-color: rgb(214, 211, 211);
  --toggle-swtich-color: rgba(51, 46, 122, 0.8);
  --toggle-round: 1;
  --toggle-border-size: 2px;
}
.toggle{
  border: var(--toggle-border-size) solid transparent;
  height: var(--toggle-size);
  width: calc(var(--toggle-size) * 2);
  box-sizing: border-box;
  border-radius: calc(var(--toggle-size) * var(--toggle-round));
  display: inline-flex;
}
.toggle::after{
  content: '';
  display: block;
  height:  calc(var(--toggle-size) - var(--toggle-border-size) * 2);
  width: calc(var(--toggle-size) - var(--toggle-border-size) * 2);
  background-color: var(--toggle-swtich-color);
  border-radius: calc(var(--toggle-size) * var(--toggle-round));
  box-sizing: border-box;
}

.toggle-status-true{
  justify-content: flex-end;
  background-color: var(--toggle-true-bg-color);
}
.toggle-status-false{
  justify-content: flex-start;
  background-color: var(--toggle-false-bg-color);
}
</style>