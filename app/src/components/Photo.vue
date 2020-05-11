<template>
    <div class="box">
      <div class="imgBx">
        <img :src="src">  
      </div>
      <div class="content">
        <h2>{{title}}</h2>
        <p>{{content}}</p>  
      </div>  
    </div>  
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "hello world"
    },
    title: {
      type: String,
      default: "Title"
    },
    content: {
      type: String,
      default: "hello"
    }
  }
}
</script>

<style>

.box{
  position: relative;
  width: 275px;
  height: 275px;
  overflow: hidden;
  transition: 0.5s;
  margin: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

}
.box:hover{
  z-index: 1;
  transform: scale(1.25);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}
.box .imgBx,
.box .imgBx::before,
.box .imgBx img,
.box .content{
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.box .imgBx::before{
  content: '';
  z-index: 1;
  /* background: linear-gradient(180deg, #f00, #000); */
  mix-blend-mode: multiply;
  opacity: 0;
  transition: 0.5s;
}
.box:hover .imgBx::before{
  opacity: 1;
}


.box .imgBx img{
  object-fit: cover;
}

.box .content{
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-end;
  /* align-items: flex-end; */
}

.box:hover .content{
  background: rgba(0, 0, 0, 0.3);

}
.box .content h2{
  margin: 0;
  margin-bottom: 0;
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
}

.box:hover .content h2{
  transform: translateY(0);
  transition-delay: 0.3s;
}

.box .content p{
  margin: -10px 0 0 0;
  color: #fff;
  transform: translateY(200px);
  transition: 0.5s;
  font-size: 14px;
}
.box:hover .content p{
  transform: translateY(0);
  transition-delay: 0.4s;
}
</style>