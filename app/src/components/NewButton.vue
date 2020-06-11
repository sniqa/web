<template>
  <button :class="[$style['btn-default'], $style.btn, {[$style['btn-disabled']]: disabled}]" @click="onClick" :disabled="disabled">
     {{showVal}}
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
		},
		disabled: {
			type: Boolean,
      default: false
		}
  },
  data(){
    return{
			showIcon: false,
			// showVal: this.value
    }
	},
	computed:{
  	showVal: {
    	get() {
				return  this.disabled ? 'DISABELD' : this.value
    	}
  	}
  },
  watch: {
    icon: {
      handler(curVal){
        this.showIcon = this.curVal === '' ? true : false
      }
		}
  },
  components: {
    Icon
  },
  methods: {
    onClick(){
			this.$emit('click')
		}
  }
}
</script>

<style module>
.btn-default{
    --btn-width: 80px;
    --btn-height: 30px;
    --btn-color: inherit;
    --btn-bg-color: var(--primary);
    --btn-border: 1px solid var(--line-color);
}
.btn{
    box-sizing: border-box;
    color: var(--btn-color);
    width: var(--btn-width);
    height: var(--btn-height);
    background-color: var(--btn-bg-color);
    border: var(--btn-border);
    outline: 0;
    border-radius: calc(var(--btn-width) * var(--round));
}
.btn-disabled{
  background-color: var(--disable);
	border-color: var(--disable);
	color: var(--warning);
}
</style>