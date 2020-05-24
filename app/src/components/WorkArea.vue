<template>
  <header class="work-area-default work-area">
    <div class="work-area-left">
      <Icon name="more_horiz"></Icon>
    </div>
    <div class="work-area-middle">
    </div>
    <div class="work-area-right">
      <Icon name="search"></Icon>
      <Icon name="person"></Icon>
      <Icon name="settings"></Icon>
    </div>
  </header>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Icon  
  },
  created () {
    window.addEventListener("scroll", () => {
      console.log('scroll')
    })
  }
}
</script>

<style>
.work-area-default{
  --height: 50px;
}
.work-area{
  height: var(--height);
  display: flex;
  border: 1px solid green;
}
.work-area-left{
  flex-grow: 1;
  border: 1px solid blueviolet;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.work-area-right{
  flex-grow: 1;
  border: 1px solid blueviolet;
  display: flex;
  justify-content: flex-end;
  align-items:center;
}
.work-area i {
  margin: 10px;
}
</style>