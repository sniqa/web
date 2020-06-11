<template>
	<overlays v-bind="this.$attrs" v-on="$listeners" direction="center" :synch.sync="synch">
    <transition name="login">
      <div :class="$style.login" @click="loginBarOnClick" v-show="synch">
        <div>{{ title }}</div>
        <icon name="clear" @click="synch=!synch" :class="$style['icon-type']"></icon>
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
    </transition>
	</overlays>
	
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
	data(){
		return {
      synch: false,
      title: 'Sign in',
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
	  .then( (res) => { this.$store.state.token.token = res.token 
			  
	  })
      .catch( (res) => console.log(res))
		}
  },
  watch: {
    username: {
      handler(curVal){
        this.ifAgree != curVal === ''
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
.login-enter-active, .login-leave-active {
  transition: padding .5s;
}
.login-enter, .login-leave-to {
  padding: 80px;
}
</style>