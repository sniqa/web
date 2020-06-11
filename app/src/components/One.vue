<template>
  <transition name="one">
    <div class="onee">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
.onee{
   
  width: 100px;
  height: 50px;
  background-color: indigo;
  overflow: hidden;
}
.one-enter-active, .one-leave-active {
  transition: all 5s;
}
.one-enter, .one-leave-to {
   width: 100vh;
  height: 100vw;
  position: relative;
}
.one-enter::before, .one-leave-to::before{
  content: '';
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 50%;
  height: 50%;
  border-top: 5px solid green;
  border-left: 5px solid green;
}
.one-enter::after, .one-leave-to::after{
  content: '';
  display: block;
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 50%;
  height: 50%;
  border-bottom: 5px solid green;
  border-right: 5px solid green;
}
</style>