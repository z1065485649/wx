<style lang="less" scoped>
  .ivu-select-dropdown {
    width:100%;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    position: absolute;
    z-index: 900;
  }
  .ivu-dropdown-menu {
    min-width: 100px;
  }
  .ivu-dropdown-item{
      margin: 0;
      line-height: normal;
      padding: 7px 16px;
      clear: both;
      color: #495060;
      font-size: 12px!important;
      white-space: nowrap;
      list-style: none;
      cursor: pointer;
      transition: background .2s ease-in-out;
    }
</style>

<template>
  <div class="container">
    <input hidden v-model="id" >
    <Input v-model="value" :size="size" :placeholder="placeholder" @on-change="onChange" @on-blur="onBlur($event)"></Input>
    <div class="ivu-select-dropdown" style="transform-origin: center top 0px;" v-show="isShow">
      <ul class="ivu-dropdown-menu">
        <li :class="['ivu-dropdown-item']" :id="it.id" v-for="it in tips" v-on:click.stop="elect($event)">{{it.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      minLength:{
          default:2
      },
      size:{
          default:'large'
      },
      placeholder:{
        default:'请输入...'
      },
      tipsData:{
        type:Array,
      }
    },
    data: function () {
      return {
        id:'',
        value:'',
        isShow:false,
        tips: []
      }
    },
    methods: {
      onChange: function () {
        if(this.value.length>=this.minLength){
            this.tips=this.tipsData;
            if(this.tips.length>0){
              this.isShow=true;
            }
            this.$emit('onChange',this.value);
        }else{
          this.tips = [];
          this.value='';
          this.id='';
          this.isShow=false;
        }
      },
      elect:function(event){
        var tar = event.target;
        this.id=tar.id;
        this.value=tar.innerHTML;
        //清空
        this.tips = [];
        this.isShow=false;
      },
      onBlur:function(event){
          setTimeout(1000,function(){
            this.tips = [];
            this.isShow=false;
          });
      }
    }
  }
</script>
