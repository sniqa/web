<template>
  <div :class="$style.init">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style module>
.init{
  --white: #ffffff;
  --dark: #000000;
  --primary: #409EFF;
  --success: #67C23A;
  --warning: #E6A23C;
  --danger: #F56C6C;
  --info: #909399;
  --primary-text: #303133;
  --disable: #cccccc;
  --round: 0;
  --line-color:#cccccc; 
  --background-image: linear-gradient(var(--primary), 90%, var(--white));
  background-image: var(--background-image);
}
</style>