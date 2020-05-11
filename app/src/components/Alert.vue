<template>
  <div class="alert-bar" :style="alertBarClass">
      <div class="alert-bar-content">
        <Icon icon="error" size="36px"></Icon>
        <p>{{msg}}</p>
      </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
    name: 'alert',
    props: {
        msg: {
            type: String,
            default: 'this is alert'
        }
    },
    data(){
        return{
            alertBarClass: 'right: -100%',
            timer: null
        }
    },
    components: {
        Icon
    },
    updated(){
      console.log(1)
      clearTimeout(this.timer)    
        this.timer = setTimeout( () => {  
            this.alertBarClass = 'right: -100%'
        }, 5000)
    },
    watch: {
      msg(){
        if(this.msg != ''){
          this.alertBarClass = ''      
        }else{
            this.alertBarClass = 'right: -100%'
        }
      }
    }
   
}
</script>

<style>
.is-hidden{
   right: -100% !important;
}
.alert-bar{
    --color: #fff;
    --bgColor: rgb(192, 75, 147);
    position: fixed;
    z-index: 9999;
    bottom: 0;
    right: 0;
    transition: right 2s;
}
.alert-bar-content{
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--bgColor);
    margin: 10px;
    box-shadow: 10px 10px 10px #ccc;
    font-size: 36px;
}
.alert-bar-content > p{
    margin: 0 0 0 20px;
}
</style>