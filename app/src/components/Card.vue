<template>
  <div :class="[$style['card-default'], $style.card]" >
    <slot/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      style: ''
    }
  },
  methods: {
    onFocus(){
      this.style = 'card-focus'
    },
    onBlur(){
      this.style = ''
    }
  }
}
</script>

<style module>
.card-default{
  --card-height: 260px;
  --card-width: 200px;
  --card-border-size: 0px;
  --card-border-color: none;
  --card-border-width: 0;
  --card-border-height: 0;
}
.card{
  border: 1px solid #ccc;
  min-height: var(--card-height);
  min-width: var(--card-width);
  display: flex;
  flex-grow: 1;
  margin: 1%;
  cursor: pointer;
  position: relative;
}
 .card::after{
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
 .card::before{
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
.card:hover{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  --card-border-size: 6px;
  --card-border-color: #2121a3;
  --card-border-width: 50%;
  --card-border-height: 50%;
}
</style>