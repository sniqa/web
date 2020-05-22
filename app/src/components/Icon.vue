<template>
  <i class="material-icons" :style="'font-size: ' + size" @click="onClick">{{ name }}</i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'broken_image'
    },
    size: {
      type: String,
      default: '24px'
    }
  },
  methods: {
    onClick(){
      this.$emit("iconOnClick")
    }
  }
}
</script>

<style>
.material-icons{
  cursor: pointer;
}
</style>