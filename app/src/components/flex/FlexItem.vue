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
  --flex-item-flex-grow: 1;
  --flex-item-justify-content: flex-start;
  --flex-item-align-items: flex-start;
}
</style>
<style scoped>
.flex-item{
  flex-grow: var(--flex-item-flex-grow);
  display: flex;
  justify-content: var(--flex-item-justify-content);
  align-items: var(--flex-item-align-items);
}
</style>