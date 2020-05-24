<template>
  <flex-container :class="'flex-container-type'">
    <flex-item :class="'flex-item-type'">
      <icon-drawer></icon-drawer>
    </flex-item>
    <flex-item :class="'flex-item-type-two'">
      <icon-drawer></icon-drawer>
      <icon-drawer></icon-drawer>
    </flex-item>
  </flex-container>
</template>

<script>
import IconDrawer from '@/components/IconDrawer.vue'
import FlexContainer from '@/components/flex/FlexContainer.vue'
import FlexItem from '@/components/flex/FlexItem.vue'
export default {
  components: {
    IconDrawer,
    FlexContainer,
    FlexItem
  }
}
</script>

<style>
.flex-container-type{
  border: 1px solid red;
  height: 100px;
}
.flex-item-type{
  border: 1px solid green;
  --flex-grow: 1;

}
.flex-item-type-two{
  border: 1px solid green;
  --flex-grow: 2;
}
</style>