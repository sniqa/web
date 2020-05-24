<template>
  <div class="search-bar-default search-bar">
    <Icon name="search" @click="show = !show"></Icon>
        <Drawer :open.sync="show" zclass="drawer-top">
          <label for="SearchInputBar" >
            <input type="text" name="" id="SearchInputBar" v-model="val"  ref="overlay">
          </label>
        </Drawer>  
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Drawer from '@/components/Drawer.vue'
export default {
    components: {
        Icon,
        Drawer
    },
    data(){
        return{
            val: '',
            show: false
        }
    },
    methods: {
      onClick(e){
       this.show = this.$refs.overlay === e.target ? true : false
      }
    },
  
}
</script>

<style scope>
.drawer-top{
  --height: 50px;
}
.search-bar-default{
    --height: 30px;
    --width: 150px;
    --borderRadius: 30px;
    --fontColr: var(--globle-color);
    --fontSize: 16px;
    --iconColor: var(--globle-color);
    --borderColor: var(--globle-bgColor);
}


.search-bar{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10px 0 15px;
    border-radius: var(--borderRadius);
    background-color: var(--borderColor);
}
/* .search-bar input */
.search-bar label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: var(--height);
}
.search-bar input{
    /* width: var(--width);
    line-height: var(--height);
    font-size: var(--fontSize);
    background-color: var(--borderColor);
    color: var(--fontColr);
    outline: none;
    border: 0;
    transition: width 0.3s; */
    width: 100%;
    background-color: seashell;
}
.search-bar label{
    color: var(--iconColor);
    margin-left: 10px;
}
/* @media screen and (max-width: 800px){
    .search-bar input{
        width: 0;
        height: 0;
        background-color: transparent;
    }
    .search-bar{
        background-color: transparent;

    }
} */

</style>