<!-- 标签管理组件 -->
<style scoped lang="less">
  .content {
  }
</style>
<template>
  <div class="content">
    <Row>
      <Col span="12">
      <Select v-model="selectValue" multiple filterable remote :label="selectName"
        :remote-method="remoteMethod2" :not-found-text="notFoundText" :placeholder="placeholder"  :size="size"
        :loading="loading2"  @on-change="selectOnChange($event)" >
        <Option   v-for="option in options2" :value="option.value" :key="new Date()">{{option.label}}</Option>
      </Select>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default{
    name: 'TagManage',
    props:{
       length:{type:Number,default:2},//搜索长度
       placeholder:{type:String,default:'请选择'},
       notFoundText:{type:String,default:'没有找到结果'},
       url:{type:String},
       selectValue:{
            type:Array,
             default:function(){
              return  [];
             }
        },
       selectName:{
           type:Array,
           default:function(){
               return [];
           }
       },
      size:{type:String}, //large和small
    },
    data () {
      return {
        loading2: false,
        options2: []
      }
    },
    methods: {
      remoteMethod2 (query) {
        if (query !== ''&& query.length>=this.length) {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            //异步查询操作
            /*this.$http.post(this.url,param.query).then(function(Data){
                if(Data!=''&&Data.length>0){
                   this.options2=Data;
                }else{
                  console.log("搜索无数据")
                }
            }).catch(function(error){
                console.log("搜索出现error"+error)
            });*/
              this.options2 =[{
                value: 'beijing',
                label: '北京市'
              },
                {
                  value: 'shanghai',
                  label: '上海市'
                },
                {
                  value: 'shenzhen',
                  label: '深圳市'
                }];
          }, 200);
        } else {
          //清空
          this.options2 = [];
        }
      },
      selectOnChange(value){//返回值
        this.$emit('input',value);
      }
    },
    created:function(){//初始化
        //this.model14=this.options;
    },
  }
</script>


