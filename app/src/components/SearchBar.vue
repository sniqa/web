<template>
  <div class="search-bar search-bar-default">
      <!-- <form action=""> -->
          <input type="text" name="" id="SearchInputBar" v-model="val">
          <label for="SearchInputBar">
              <Icon icon="search"></Icon>
          </label>
      <!-- </form> -->
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
    components: {
        Icon
    },
    data(){
        return{
            val: ''
        }
    },
    updated(){
        
        console.log(this.val.length);
        
    }
}
</script>

<style scope>
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
.search-bar input,
.search-bar label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: var(--height);
}
.search-bar input{
    width: var(--width);
    line-height: var(--height);
    font-size: var(--fontSize);
    background-color: var(--borderColor);
    color: var(--fontColr);
    outline: none;
    border: 0;
    transition: width 0.3s;
}
.search-bar label{
    color: var(--iconColor);
    margin-left: 10px;
}
@media screen and (max-width: 800px){
    .search-bar input{
        width: 0;
        height: 0;
        background-color: transparent;
    }
    .search-bar{
        background-color: transparent;

    }
}

</style>