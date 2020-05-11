<template>
  <div class="all">
    <textarea class="textarea" v-model="value"></textarea>
    <button @click="send" class="sendbtn">SEND</button>
    <div class="textarea">{{recvValue}}</div>  
  </div>
</template>

<script>

export default {
  data () {
    return {
      recvValue: 'hello',
      value: ''
    }
  },
  methods: {
    send(){
     console.log(this.value)
     this.recvValue = typeof(this.value)

      this.$axios({
        data: eval('(' + this.value + ')') 
      }
        ).then(res => this.recvValue = res)
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

.all{
  
  width: 100%;
  height: 100vh;
  background-color: darkcyan;
}
.textarea{
  float: left;
  width: 50%;
  height: inherit;
  padding: 50px;
  background-color: darkcyan;
  border: 2px solid grey;
  box-sizing: border-box;
}
.sendbtn{
  position: absolute;
  width: 50px;
  top: 50px;
  left: 50%;
  margin-left: -25px;
  
}
</style>