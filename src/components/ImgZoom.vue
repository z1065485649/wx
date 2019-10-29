<!--图片点击放大、组图浏览 -->
<style scoped lang="less">
  .container{
      a img{
        margin-left:15px;
      }
  }
</style>

<template>
    <div class="container">
      <a href="javascript:;" ><img :width="width" :height="height" v-for="it in imgUrl" :src="it.url" :keys="it.id" :title="it.title" @click="checkImg($event)"></a>
      <Modal v-model="modalImg" :title="title" >
        <Carousel v-model="value1"  style="width:490px">
          <Carousel-item v-for="it in imgUrl" :key="it.url">
              <img :src="it.url" style="width: 100%;" />
          </Carousel-item>
        </Carousel>
      </Modal>
    </div>
</template>

<script>
  export default {
    props:{
        imgUrl:{
            type:Array
        },
        width:{
          type:Number,
          default:100
        },
        height:{
            type:Number,
            default:100
        },
        title:{
            type:String,
            default:"查看图片",
        }
    },
    data:function(){
      return {
        cStyle:'',
        modalImg:false,
        value1:0,
        imgSrc:[]
      }
    },
    methods:{
      checkImg:function(event){
        var tar=event.target;
        this.modalImg = true;
        this.value1=parseInt(tar.getAttribute("keys"))-1;
      }
    },
    watch:{
    },
    created:function(){
    },
    components:{

    }
  }
</script>
