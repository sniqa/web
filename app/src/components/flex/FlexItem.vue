<template>
  <div class="flex-item-default flex-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.flex-item-default{
  --flex-grow: 1;
  --justify-content: flex-start;
  --align-items: flex-start;
}
</style>
<style scoped>
.flex-item{
  flex-grow: var(--flex-grow);
  display: flex;
  justify-content: var(--justify-content);
  align-items: var(--align-items);
}
</style>