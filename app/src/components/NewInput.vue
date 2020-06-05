<template>
	<div :class="$style['login-input']">
		<icon :name="preIcon" :class="$style['login-icon']" v-if="ifPreIcon"></icon>
		<input :type="isPasswd" :class="$style['input-bar']" v-model="inputVal">
		<icon :name="nextIcon" :class="$style['login-icon']" v-if="ifNextIcon" @click="nextIconOnClick"></icon>
		<icon name="visibility" :class="[$style['login-icon'], {[$style['login-icon-visibility']]: ifShowPasswd}]"
			v-if="ifLastIcon"
			 @click="lasttIconOnClick"></icon>
	</div>
</template>

<script>
import  Icon from '@/components/Icon.vue'
import  FlexContainer from '@/components/flex/FlexContainer.vue'
export default {
	props: {
		preIcon: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		max: {
			type: Number,
			default: 16
		},
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			ifPreIcon: false,
			ifNextIcon: false,
			ifLastIcon: false,
			ifShowPasswd: false,
			isPasswd: this.type,
			nextIcon: ''
		}
	},
	computed:{
    inputVal: {
      get() {
         return this.value; 
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
	watch: {
		preIcon: {
      handler(value){
        this.ifPreIcon = value != ''
      },
      immediate: true
		},
		type: {
      handler(value){
        this.ifLastIcon = value === 'password'
      },
      immediate: true
		},
		inputVal: {
      handler(curVal, oldVal){
				if (curVal.length > this.max - 1) {
      		this.inputVal = String(curVal).slice(0, this.max - 1);
				}
				if(curVal != ''){
					this.ifNextIcon = true
					this.nextIcon = 'clear'
				}else{
					this.ifNextIcon = false
					this.nextIcon = ''
				}	
      },
      immediate: true
    },
	},
	components: {
		Icon,
		FlexContainer
	},
	methods: {	
		nextIconOnClick(){
				this.inputVal = ''
		},
		lasttIconOnClick(){
			this.ifShowPasswd = !this.ifShowPasswd
			this.isPasswd = this.isPasswd === 'password' ? 'text' : 'password'
		}
	}
}
</script>

<style module>
.input-bar{
	outline: none;
	background-color: inherit;
	border: 0;
	box-sizing: border-box;
	width: inherit;
	min-width: 130px;
	color: inherit;
}
.login-icon{
  --icon-width: 30px;
  --icon-color: var(--login-input-color);
}
.login-icon-visibility{
	--icon-color: rgba(49, 47, 212, 0.9);
}
.login-input{
	--login-input-width: 260px;
	--login-input-height: 40px;
	--login-input-color: #ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--login-input-color);
	height: var(--login-input-height);
	width: var(--login-input-width);
	box-sizing: border-box;
	padding: 0 5px;
}
</style>