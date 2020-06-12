<template>
	<transition name="info">
      <div :class="$style.login" @click="loginBarOnClick" v-show="synch">
        <div :class="$style['login-head']">
          <div :class="$style['login-title']">{{ title }}</div>
          <icon name="clear" @click="synch=!synch" :class="$style['login-icon']"></icon>
        </div>       
        <new-input	preIcon="person" v-model="username"></new-input>
        <new-input  preIcon="lock" type="password" v-model="psw"></new-input>
        <new-button value="Sign in" @click="btnOnClick" :class="$style['login-item-btn']"
          :disabled="!ifAgree"
          ></new-button>
        <div :class="$style['login-container']">
          <label for="login-checkbox">
            <toggle :class="$style['login-toggle']" :on.sync="ifAgree"></toggle>{{ agreement }}
          </label>
          <new-button :value="forget_password" @click="resetOnClick"></new-button>
        </div>
      </div>
   </transition>
	
</template>

<script>
import NewInput from '@/components/NewInput.vue'
import NewButton from '@/components/NewButton.vue'
import Toggle from '@/components/Toggle.vue'
import Icon from '@/components/Icon.vue'
import Overlays from '@/components/Overlays.vue'
import { login } from '@/network/login.js'
export default {
	components: {
		NewInput,
		NewButton,
    Toggle,
    Icon,
    Overlays
	},
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return {
      synch: this.show,
      title: 'Reset Passwd',
			username: '',
			psw: '',
			agreement: 'agreement',
			forget_password: 'Forget password?',
			ifAgree: true
		}
	},
	methods: {
    loginBarOnClick(event){
        event.stopPropagation()
    },
		btnOnClick(){
      login({username: this.username, password: this.psw})
	  .then( (res) => { 
      let { token } = res
      if(token){
        this.synch = false
        this.$store.state.token.token = token 
      }else{
        alert('error')
      }
	  })
      .catch( (res) => console.log(res))
		},
		resetOnClick(){
			this.$emit('gotocreate')
		}
  },
  watch: {
    show: {
      handler(curVal){
        this.synch = curVal
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
.login{
	background-image: linear-gradient(90deg, var(--white), 5%, var(--primary), 95%, var(--white));
  position: relative;
	height: 280px;
	width: 380px;
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	align-items: center;
	box-sizing: content-box;
	padding: 20px;
  border: 1px solid var(--line-color);
}
.login-head{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-title{
  margin-left: 26px; 
  width: 100%;
  display: flex;
  justify-content: center;
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
	--btn-border: 1px solid var(--line-color);
}
.login-toggle{
	--toggle-true-bg-color: var(--white);
	--toggle-false-bg-color: var(--disable);
	--toggle-swtich-color: var(--primary);
}

</style>
<style>
.info-enter-active, .info-leave-active {
  transition: padding .5s;
}
.info-enter, .info-leave-to {
  padding: 80px;
}
</style>