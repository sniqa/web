<template>
  <button class="btn-default btn">
     <!-- {{value}} -->
    <Icon :name="icon" v-if="showIcon"></Icon>
  </button>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
    props: {
        value: {
            type: String,
            default: 'submit'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data(){
        return{
            showIcon: false
        }
    },
    watch: {
        icon: {
            handler(value){
                this.showIcon = this.value === '' ? true : false
            }
        }
    },
    components: {
        Icon
    }
}
</script>

<style>
.btn-default{
    --width: 80px;
    --height: 30px;
    --color: inherit;
    --background-color: #ccc;
    --border: 2px solid;
    --border-radius: 0;
}
.btn{
    box-sizing: border-box;
    color: var(--color);
    width: var(--width);
    height: var(--height);
    background-color: var(--background-color);
    border: var(--border) var(--background-color);
    outline: 0;
    border-radius: var(--border-radius);
}
.btn:hover{
    /* opacity: 0.8; */
    border-bottom: 2px solid red;
}
</style>