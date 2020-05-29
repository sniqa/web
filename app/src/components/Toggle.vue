<template>
  <div class="toggle-default toggle" @click="popStatus" :class="{'toggle-status-true': toggleStatus, 'toggle-status-false': !toggleStatus}">
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

<style>
.toggle-default{
  --toggle-size: 1em;
  --toggle-true-bg-color: rgb(89, 117, 158);
  --toggle-false-bg-color: #ccc;
  --toggle-swtich-color: #fff;
  --toggle-round: 1;
  --toggle-border-size: 2px;
}
</style>

<style scoped>
.toggle{
  border: var(--toggle-border-size) solid transparent;
  height: var(--toggle-size);
  width: calc(var(--toggle-size) * 2);
  box-sizing: border-box;
  border-radius: calc(var(--toggle-size) * var(--toggle-round));
  display: flex;
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