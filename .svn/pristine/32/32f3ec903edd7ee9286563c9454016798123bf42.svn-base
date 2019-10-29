<style scoped lang="less">
    .container {
        left:45%;
        top:300px;
        position:absolute;
        border: 1px solid red;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div :style="heights">
        <div v-if="!_loading">
            <slot></slot>
        </div>
        <div class="container" v-else>
            <slot name="spin">
                <Spin fix>
	                <Icon type="load-c" size=40 class="demo-spin-icon-load"></Icon>
	                <div style="width: 60px;">加载中</div>
	            </Spin>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: ['loading'],
        computed: {
            _loading: function () {
                return this.loading
            }
        },
      data:function(){
            return{
              heights:''
            }
      },
      created:function(){
        this.heights="height:"+document.body.clientHeight+"px";
      },
      watch:{
        loading:function(){
        }
      }

    }

</script>
