<template>
  <div class="setting">
      <theme></theme>
      <div class="tests">hello world</div>
  </div>
</template>

<script>
import Theme from '@/components/Theme.vue'
export default {
    components: {
        Theme
    }
}
</script>

<style>
.tests{
    color: var(--globle-color);
    background-color: var(--globle-bg-color);
}
</style>