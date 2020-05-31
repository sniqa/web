<template>
	<toggle :on.sync="isLight">

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
			isLight: true,
      el: Object
		}		
  },
  methods: {
    
  },
  created () {
    this.el = document.querySelector('html')
  },
	updated(){
    this.$root.className = this.isLight ? "theme-dark" : "theme-light"

	},
  components: {
		Toggle,
		ThemeLight,
		ThemeDark
	},
}
</script>

<style>

.theme-dark {   filter: invert(100) hue-rotate(180deg);  }
/* .theme-dark img {     filter: invert(100) hue-rotate(180deg); } */

</style>

<style>

 :root{
   --model: dark;
   --prefers-color-scheme: var(--model);
 }

@media (prefers-color-scheme: dark){
  :root{
    background: blue;
    color: chartreuse;
  }
}

</style>