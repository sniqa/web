<template>
<div class="icon icon-default" @click="onClick">
  <i class="material-icons">{{ name }}</i>
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
<style>
.icon-default{
  --icon-size: 24px;
  --icon-color: #000;
  --icon-width: 24px;
  --icon-height: 24px;
  --icon-border: 0;
  --icon-background-color: inherit;
}
</style>


<style scoped>

.icon{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: var(--icon-height);
  width: var(--icon-width);
  color: var(--icon-color);
  border: var(--icon-border);
  background-color: var(--icon-background-color);
}
.material-icons{
  cursor: pointer;
  font-size: var(--icon-size);
}
</style>