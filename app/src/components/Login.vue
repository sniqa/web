<template>
  <div :class="$style.login">
		<div>Sign in</div>
		<new-input	preIcon="person" v-model="username"></new-input>
		<new-input  preIcon="lock" type="password" v-model="psw"></new-input>
		<new-button value="Sign in" @click="btnOnClick" :class="$style['login-item-btn']"
			:disabled="!ifAgree"
			></new-button>
		<div :class="$style['login-container']">
			<label for="login-checkbox">
				<toggle :class="$style['login-toggle']" :on.sync="ifAgree"></toggle>{{ agreement }}
			</label>
			<a href="">{{ forget_password }}</a>
		</div>
  </div>
</template>

<script>
import NewInput from '@/components/NewInput.vue'
import NewButton from '@/components/NewButton.vue'
import Toggle from '@/components/Toggle.vue'
export default {
	components: {
		NewInput,
		NewButton,
		Toggle
	},
	data(){
		return {
			username: '',
			psw: '',
			agreement: 'agreement',
			forget_password: 'Forget password?',
			ifAgree: false
		}
	},
	methods: {
		btnOnClick(){
			console.log(this.username)
			console.log(this.psw)			
		console.log(this.ifAgree)
		}
	}
}
</script>

<style module>
	.login{
		background-color: #1b2b3b;
		height: 280px;
		width: 400px;
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		padding: 20px 40px;
		color: antiquewhite;
	}
	.login-container{
		width: 260px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
	}
	.login-item-btn{
		--btn-bg-color: transparent;
		--btn-width: 260px;
		--btn-height: 39px;
		--btn-border: 1px solid#ccc;
	}
	.login-toggle{
		--toggle-true-bg-color: #fff;
  	--toggle-false-bg-color: #ccc;
		--toggle-swtich-color: #1b2b3b;
	}
</style>