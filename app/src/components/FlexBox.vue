<template>
  <div class="flex-box">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.flex-box{
  display: flex;
  justify-content: center; 
  justify-items: center;
  align-items: center;
  background: rgb(8, 74, 197);
}
</style>