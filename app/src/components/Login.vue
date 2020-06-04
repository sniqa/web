<template>
  <div :class="$style.login">
		<new-input  preIcon="person"></new-input>
		<new-input  preIcon="lock" type="password"></new-input>
  </div>
</template>

<script>
import NewInput from '@/components/NewInput.vue'
export default {
	components: {
		NewInput
	}
}
</script>

<style module>
	.login{
		background-color: #1b2b3b;
		height: 300px;
		width: 450px;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		color: antiquewhite;
	}
</style>