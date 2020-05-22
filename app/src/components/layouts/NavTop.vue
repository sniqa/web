<template>
  <container :class="'nav-top'">
    <navgation-box :class="'header-top'">
        <button-type :class="'btn-newtype'"></button-type>
        <button-type icon="account"></button-type>
    </navgation-box>
    <slot></slot>
  </container>
</template>

<script>
import NavgationBox from "@/components/NavgationBox.vue"
import Container from "@/components/Container.vue"
import ButtonType from "@/components/ButtonType.vue"
export default {
    components: {
        Container,
        NavgationBox,
        ButtonType
  }
}
</script>

<style>
.btn-newtype{
    --height: 100%;
    --color: #fff;
    --background-color: #ccc;
}
</style>