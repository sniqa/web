<template>
	<toggle :on.sync="isLight">
		<theme-light v-if="isLight"></theme-light>
		<theme-dark v-else></theme-dark>
	</toggle>
</template>

<script>
import Toggle from '@/components/Toggle.vue'
import ThemeLight from '@/components/ThemeLight.vue'
import ThemeDark from '@/components/ThemeDark.vue'
export default {
	props:{
		dark: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isLight: true
		}		
	},
	updated(){
		console.log(this.isLight);
		
	},
  components: {
		Toggle,
		ThemeLight,
		ThemeDark
	},
}
</script>

<style>

.theme-dark {     filter: invert(100) hue-rotate(180deg); } .theme-dark img {     filter: invert(100) hue-rotate(180deg); }

</style>

<style>


</style>