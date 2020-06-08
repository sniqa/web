<template>
  
</template>

<script>
export default {

}
</script>

<style module>
.border{
	position: relative;
}
 .border::after{
  content: '';
  display: block;
  position: absolute;
  left: calc(var(--card-border-size) * -1);
  top: calc(var(--card-border-size) * -1);
  height: var(--card-border-height);
  width: var(--card-border-width);
  border-left: var(--card-border-size) solid var(--card-border-color);
  border-top: var(--card-border-size) solid var(--card-border-color);
  transition: border 0.5s, height 0.5s, width 0.5s;
}
 .border::before{
  content: '';
  display: block;
  position: absolute;
  right: calc(var(--card-border-size) * -1);
  bottom: calc(var(--card-border-size) * -1);
  height: var(--card-border-height);
  width: var(--card-border-width);
  border-right: var(--card-border-size) solid var(--card-border-color);
  border-bottom: var(--card-border-size) solid var(--card-border-color);
  transition: border 0.5s, height 0.5s, width 0.5s;
}
.border:hover{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  --card-border-size: 6px;
  --card-border-color: #2121a3;
  --card-border-width: 50%;
  --card-border-height: 50%;
}
</style>