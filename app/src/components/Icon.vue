<template>
<div :class="[ $style['icon-default'], $style.icon]" @click="onClick">
  <i class="material-icons" :class="$style['icon-size']">{{ name }}</i>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'broken_image'
    }
  },
  methods: {
    onClick(){
      this.$emit("click")
    }
  }
}
</script>

<style module>
.icon-default{
  --icon-size: 26px;
  --icon-color: #000;
  --icon-width: 26px;
  --icon-height: 26px;
  --icon-border: 0;
  --icon-background-color: inherit;
}

.icon{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: var(--icon-height);
  width: var(--icon-width);
  min-width: var(--icon-width);
  color: var(--icon-color);
  border: var(--icon-border);
  background-color: var(--icon-background-color);
  cursor: pointer;
}
.icon .icon-size{
  font-size: var(--icon-size);
}
</style>


