<template>
  <div class="container container-default">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-default{
    --flex-direction: column;
}
.container{
    display: flex;
    justify-content: flex-start;
    flex-direction: var(--flex-direction);
}

</style>