<style lang="less" scoped>
  .sidemenu {
    width: 100%;
    height: 100%;
    float: left;
    color: #A2A7BB;
    .my-title {
      font-size: 16px;
    }
    ul {
      li {
        display: block;
        float: left;
        padding: 10px 0;
        width: 100%;
        color: #373d41;
        cursor: pointer;
        & + li {
          padding-top: 0;
        }
        a {
          padding: 10px 0 10px 20px;
          color: #323C47;
          display: block;
          text-decoration: none;
          &.cur {
            border-right: 2px solid #373d41;
            color: #373d41;
          }
          &:hover {
            color: #373d41;
            background: #f3f3f3;
          }
          i {
            font-size: 18px;
            vertical-align: middle;
            margin: -3px 3px 0 0;
          }
        }
      }
    }
    .seed {
      li {
        a {
          text-indent: 10%;
        }
      }
    }
  }
</style>
<template>
  <div class="sidemenu">
    <ul>
      <li>
        <a href="javascript:void(0)" class="my-title">
          <Icon type="ivu-icon ivu-icon-social-buffer-outline"></Icon>
          我的科室
        </a>
        <ul class="seed">
          <li v-show="leftDate.id!=null">
            <a href="javascript:" :class="[(this.cur==leftDate.id||this.cur=='')?'cur':'']"
               @click="leftTab(leftDate.id)">{{leftDate.name}}</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" :class="[(this.cur==2)?'cur':'']" class="my-title" @click="onSelect()">
          <Icon type="ivu-icon ivu-icon-ios-personadd-outline"></Icon>
          我的患者</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import bus from '@/libs/bus'
  export default {
    data: function () {
      return {
        leftDate: this.getLeftList(),//左则list列表
        cur:'',//this.$route.query.cur? parseInt(this.$route.query.cur):'',
      }
    },
    components: {},
    methods: {
      //最终执行加载数据方法
      getLeftList(){//获取左侧菜单
        let array = localStorage.getItem("muenDoctPc");
        let dept = JSON.parse(array).dept;
        if (dept) {
          this.cur = dept.id;
        }
        return dept;
      },
      leftTab(id){//左侧菜单切换
        this.cur = id;
        this.$router.push({name:'Data',query:{cur:this.cur}, t: new Date().getTime()});
      },
      onSelect(){
          this.cur=2;
          this.$router.push({name:'MyPatient',query:{cur:2}, t: new Date().getTime()});
      }
    },
    created: function () {
      bus.$emit('leftHeight', 25);//控制left 高度
    },
    watch: {
      cur: function () {
      }
    }
  }

</script>
