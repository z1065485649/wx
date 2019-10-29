<!--预览问卷-->
<style lang="less" scoped>
  .content {

  }

  .details {
    .title {
      p {
        text-align: center;
        font-size: 24px;
        color: #333333;
        font-weight: normal;
      }
    }
    .description{
      margin: 4% 10% 4% 10%;
    }
    .bodyText {
           margin-left: 10%;
           margin-right: 10%;
          .topic{
            margin-bottom: 3%;
          }
          h2{
            font-size: 14px;
            font-weight:500;
          }
          .item{
            margin-left:1%;
          }
    }
  }
</style>

<template>
  <div class="content">
    <Modal v-model="isShow"
           :title="title"
           :width="width"
           @on-ok="ok"
           @on-cancel="cancel">
      <div class="details">
        <div class="title">
          <p style="word-break:break-all">{{dataList.name}}</p>
        </div>
        <div class="description" style="word-break:break-all">
            {{dataList.description}}
        </div>
        <div class="bodyText">
          <div class="topic" v-for="(data,index) in dataList.subList" :key="data.subName">
            <h2 style="word-break:break-all">{{index+1}}.{{data.subName}}</h2>
            <div class="inputs">
              <div class="item" v-show="data.subType=='radio'" style="word-break:break-all">
                  <Row v-for="(answ,idx) in data.answerList" :key="answ.id" >
                    <input :name="data.id"  type="radio">{{idx+1}}.{{answ.answerContent}} <span v-show="data.scale">({{answ.score}}分)</span>
                  </Row>
               </div>
              <div class="item" v-show="data.subType=='checkbox'" style="word-break:break-all">
                  <div v-for="(answ,idx) in data.answerList" :key="answ.id">
                      <Checkbox :label="idx" :disabled="isDisabled">{{idx+1}}.{{answ.answerContent}}</Checkbox>
                    <br/>
                  </div>
              </div>
              <div class="item" v-show="data.subType=='textarea'">
                  <Input :rows="2" type="textarea" :disabled="isDisabled" placeholder="请输入..."></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer"> </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      showPreviewModel: {type: Boolean, default: false},
      dataList: {type: Object, default:function(){
          return {};
      }},
      querstionId:{type:String,default:''},//问卷id
      title: {type: String, default: '查看'},
      width: {type: Number, default: 900},
      isDisabled:{type:Boolean,default:false}//是否可编辑
    },
    data: function () {
      return {
        Radio:'',
        disabledGroup:[],
        isShow: false,
      }
    },
    created: function () {
    },
    methods: {
      ok () {
        this.$emit("input", false);
      },
      cancel () {
        this.$emit("input", false);
      },
    },
    watch: {
      showPreviewModel: function () {
        this.isShow = this.showPreviewModel;
        if(this.showPreviewModel&&this.querstionId!=''){
          this.$http.get("questionNaire/get?id="+this.querstionId).then((result)=>{
            if(result.status=="200"){//chief_complaint
              if(result.data.status=="OK"){
                let obj=result.data.data;
                this.dataList.id=obj.id;
                this.dataList.name=obj.name;
                this.dataList.description=obj.description;
                this.dataList.naireType=obj.naireType;
                this.dataList.subList=obj.subList;
                this.$forceUpdate();
              }else{
                this.$Message.error(result.data.message);
              }
            }
          }).catch((error)=>{
            this.$Message.error("出现error"+error);
          });
        }else{
        }
      },
      dataList: function () {
          this.questionList=this.dataList;
      },
    },
    computed: {},
    components: {},
  }
</script>
