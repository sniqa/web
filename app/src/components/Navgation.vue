<template>
  <header class="header header-default">
    <div class="nav">
      <div class="nav-left">
        <slot name="left"></slot>
      </div>
      <div class="nav-middle">
        <slot name="middle"></slot>
      </div>
      <div class="nav-right">
        <slot name="right"></slot>
      </div>
    </div>
	</header>
</template>

<script>
export default {
}
</script>

<style scope>
.header{
  position: relative;
}
.header-default{
  --height: 50px;
  --color: #fff;
  --bgColor: #34495e;
}

.nav {
	height: var(--height);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
	background: var(--bgColor);
	text-transform: uppercase;
  color: var(--color);
}
.nav-left{
  flex-grow: 1.3;
  display: flex;
  align-items: center;

}
.nav-middle{
  flex-grow: 1.3;
  display: flex;
  align-items: center;
  
}
.nav-right{
  flex-grow: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0;
  transition: right .5s;
  overflow: hidden; 
}
</style>