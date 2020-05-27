<template>
  <div class="init" :class="{'theme-light':!darkModel, 'theme-dark': darkModel}"></div>
</template>

<script>
export default {
	props: {
		darkModel: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>
.theme-default{
	--theme-light-color: #000;
  --theme-light-bg-color: #fff;
	--theme-dark-color: #fff;
  --theme-dark-bg-color: #000;
}


</style>

<style scoped>

.theme-light{
  color: var(--theme-light-color);
  background-color: var(--theme-light-bg-color);
}
.theme-dark{
	color: var(--theme-dark-color);
  background-color: var(--theme-dark-bg-color);
}
</style>