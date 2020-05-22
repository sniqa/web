<template>
  <div class="header-default">
    <slot></slot>    
	</div>
</template>

<script>
export default {
}
</script>

<style scope>
.header-default{
  --height: 50px;
  --width: 50px;
  --color: #000;
  --hover-color: rgba(0, 0, 0, .5);
  --background--color: #34495e;
}

.header-top{
  position: relative;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: var(--height);
  width: 100%;
  color: var(--color);
  border-bottom: 1px solid #dcdfe6;
}
.header-left{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--width);
  height: 100vh;
  color: var(--color);
  border-right: 1px solid #dcdfe6;
}
.header-right{
 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--width);
  height: 100vh;
  color: var(--color);
  border-left: 1px solid #dcdfe6;
}

</style>