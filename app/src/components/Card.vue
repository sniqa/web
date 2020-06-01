<template>
  <div class="card-default card" >
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

<style>
.card-default{
  --card-height: 260px;
  --card-width: 200px;
}
.card{
  border: 1px solid #ccc;
  min-height: var(--card-height);
  min-width: var(--card-width);
  display: flex;
  flex-grow: 1;
  margin: 1%;
  cursor: pointer;
}
.card:hover{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>