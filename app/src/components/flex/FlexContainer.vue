<template>
  <div class="flex-container-default flex-container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.flex-container-default{
  --flex-model: flex;
  --justify-content: flex-start;
  --align-items: flex-start;
  --flex-wrap: wrap;
  --padding: 0;
}
</style>
<style scoped>
.flex-container{
  display: var(--flex-model);
  justify-content: var(--justify-content);
  align-items: var(--align-items);
  flex-wrap: var(--flex-wrap);
  box-sizing: border-box;
  padding: var(--padding);
}
</style>