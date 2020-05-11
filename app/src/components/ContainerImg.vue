<template>
  <div class="container-img">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-img{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>