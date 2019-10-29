<!-- 步骤：第一步，第二步，第三步，完成 -->
<style lang="less" scoped>
  .content {
  	padding: 10px 0;
    .step-btn {
      //text-align: center;
    }
  }
</style>

<template>
  <div class="content">
    <Steps :current="current">
      <Step :title="title[0]"></Step>
      <Step :title="title[1]"></Step>
      <Step :title="title[2]"></Step>
      <Step :title="title[3]"></Step>
    </Steps>
    <div class="step-content">
      <div class="step-content-1" v-show="isShow==1?true:false">
        <slot name="slot-content-1">

        </slot>
      </div>
      <div class="step-content-2" v-show="isShow==2?true:false">
        <slot name="slot-content-2">

        </slot>
      </div>
      <div class="step-content-3" v-show="isShow==3?true:false">
        <slot name="slot-content-3">

        </slot>
      </div>
      <div class="step-content-4" v-show="isShow==4?true:false">
        <slot name="slot-content-4">

        </slot>
      </div>
    </div>
    <div style="text-align: center;margin-top: 30px;">
      <i-button type="primary" @click="last" v-show="isShow>1&&isShow<4&&last1.indexOf(isShow)==-1">上一步</i-button>&nbsp;
      <i-button type="primary" @click="next" v-show="isShow!=4&&next1.indexOf(isShow)==-1">下一步</i-button>
      <i-button type="primary" @click="back" v-show="isShow==4&&back1.indexOf(isShow)==-1">{{lastBtn}}</i-button>
    </div>
  </div>
</template>

<script>
  import bus from '@/libs/bus'
  export default {
    name: '',
    props: {
      currents: {type: Number, default: 0},
      title: {
        type: Array,
        default: function () {
          return ["第一步：填写基本信息", "第二步：选择随访模板", "第三步：编辑随访模板(可跳过)", "完成"];
        }
      },
      last1: {
        type: Array,
        default: function () {
          return [3,4];
        }
      },
      next1: {
        type: Array,
        default: function () {
          return [];
        }
      },
      back1: {
        type: Array,
        default: function () {
          return [];
        }
      },
      leftStyle: {
        type: String,
        default: function () {
          return "margin:2% 0 0 30%";
        }
      },
      lastBtn: {
        default: '返回'
      }
    },
    data: function () {
      return {
        current: 0,
        isShow: 1
      }
    },
    created: function () {
      this.current = this.currents;
      bus.$on('next',(valid)=>{//监听下一步验证事件,传入true和false，通过、不通过
         if(valid){
           if (this.current == 4) {
             this.current = 0;
           } else {
             this.current += 1;
           }
           this.isShow = this.current + 1;
         }
      });
    },
    methods: {
      next () {//下一步
        this.$emit('next',this.current+1);//this.current验证是否进入下一步
      },
      last(){//上一步
        if (this.current == 4) {
          this.current = 0;
        } else {
          this.current -= 1;
        }
        this.isShow = this.current + 1;
        this.$emit('last', this.current);
      },
      back(){//返回
        this.$emit('back');
      }
    },
    watch: {
      currents: function () {
        this.current = this.currents;
        this.isShow = this.current + 1;
      }
    },
    computed: {},
    components: {},
  }
</script>
