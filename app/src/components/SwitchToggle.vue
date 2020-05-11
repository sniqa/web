<template>
  <div class="switch-toggle" ref="switchToggle" >
    <input type="checkbox" name="toggle" id="switchToggle" :checked="on">
    <label for="switchToggle" class="switch-toggle-label" 
            @click="popStatus"></label>
  </div>
</template>

<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      switchStatus: this.on
    }
  },
  methods: {
    popStatus(){
      this.switchStatus = !this.switchStatus
      this.$emit("switchToggleStatus", this.switchStatus)
    }
  }
}
</script>

<style scoped>
.switch-toggle{
  --size: 1em;
  --color: skyblue;
  --font-color: #fff;
  --background: rgb(89, 117, 158);
  --foreground: #dddddd;
  --showText: none;  
  --round: 1;
}

.switch-toggle > input{
  display: none;
}
.switch-toggle > .switch-toggle-label{
  display: block;
  width: calc(var(--size) * 2);
  height: var(--size);
  text-align: left;
  position: relative;
  background: var(--foreground);
  border-radius: calc(var(--size) * var(--round));
}

.switch-toggle > .switch-toggle-label::before{
  content: 'OFF';
  display: var(--showText);
  justify-content: center;
  align-items: center;
  position: absolute;
  color: var(--font-color);
  font-size: calc(var(--size) * 0.5);

  width: 50%;
  height: 100%;
  line-height: inherit;
  top: 0;
  left: 50%;
}



.switch-toggle > .switch-toggle-label::after
{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--color);
  transition: left .3s;
  border-radius: inherit;
}
#switchToggle:checked + .switch-toggle-label::after {
  left: 50%;
}
#switchToggle:checked + .switch-toggle-label::before {
  left: 0;
  content: 'ON';
}
#switchToggle:checked + .switch-toggle-label {
  background-color: var(--background);
}
</style>