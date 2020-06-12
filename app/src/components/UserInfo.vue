<template>
<overlays v-bind="this.$attrs" v-on="$listeners" direction="center">
	
		<new-login :show.sync="isLogin" @gotoForgetPasswd="forgetPasswdPage"></new-login>
		<create-user :show.sync="isCreateUser" @gotologin="loginPage"></create-user>
	
	
		<reset-passwd :show.sync="isRestPasswd" @gotocreate="createPage"></reset-passwd>
	
</overlays>	
</template>

<script>
// import NewInput from '@/components/NewInput.vue'
// import NewButton from '@/components/NewButton.vue'
// import Toggle from '@/components/Toggle.vue'
// import Icon from '@/components/Icon.vue'
import Overlays from '@/components/Overlays.vue'
import NewLogin from '@/components/NewLogin.vue'
import CreateUser from '@/components/CreateUser.vue'
import ResetPasswd from '@/components/ResetPasswd.vue'
// import { login } from '@/network/login.js'
export default {
	components: {
	// 	NewInput,
	// 	NewButton,
	// Toggle,
	// Icon,
	Overlays,
	NewLogin,
	CreateUser,
	ResetPasswd
	},
	data(){
		return {
			isLogin: true,
			isRestPasswd: false,
			isCreateUser: false,
		}
	},
	mounted(){
		// this.isLogin = !this.synch
	},
	methods: {
		forgetPasswdPage(){
			this.isLogin = false
			this.isRestPasswd = true
			console.log(1);
			
		},
		loginPage(){
			this.isCreateUser = false
			this.isLogin = true
			console.log(1);
			
		},
		createPage(){
			this.isRestPasswd = false
			this.isCreateUser = true
			console.log(1);
			
		}
  },
  watch: {
		synch: {
			handler(curVal){
		
			},
			immediate: true
	},
	psw: {
	  handler(curVal){
			this.ifAgree != curVal === ''
			},
			immediate: true
	}

  }
}
</script>

<style module>


</style>
<style>
.info-enter-active, .info-leave-active {
  transition: padding .5s;
}
.info-enter, .info-leave-to {
  padding: 80px;
}
</style>