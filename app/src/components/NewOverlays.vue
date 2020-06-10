<template>
	<transition name="overlays">
  	<div class="new-overlays" v-show="show">
			<button @click="show = !show">ssgsghshw</button>	
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return {
			left: ''
		}
	},
	watch: {
		show: {
			handler(curVal){
				this.$emit("update:show", curVal)
				this.left = this.show ? 'left' : ''
			},
			immediate: true
		}
	}
}
</script>

<style>
.new-overlays{
  position: fixed;
	z-index: 10000;
	top: 0;
	left:0;
	width: 50%;
	bottom: 0;
	transform: translateX(0);

	background-color: aquamarine;

}



.overlays-enter-active, .overlays-leave-active {
  transition: transform 5s;
}
.overlays-enter, .overlays-leave-to {
  transform: translateX(-100%);
}

</style>