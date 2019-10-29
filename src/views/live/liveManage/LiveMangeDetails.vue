<!-- 直播详情 -->
<style lang="less" scoped xmlns:v-clipboard="http://www.w3.org/1999/xhtml"
       xmlns:v-clipboard="http://www.w3.org/1999/xhtml" xmlns:v-clipboard="http://www.w3.org/1999/xhtml"
       xmlns:v-clipboard="http://www.w3.org/1999/xhtml" xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col push="1" span="8">直播主题：预防肺癌大讲堂</Col>
            <Col span="5">主讲人：李铭顺</Col>
        </Row>
        <br/>
        <Row>
            <Col push="1" span="8">绑定圈子： 田耕XXX交友圈</Col>
            <Col span="5">计费类型 ：收费</Col>
        </Row>
        <br/>
        <Row>
            <Col  push="1" span="8">直播时间：2017年9月30日</Col>
        </Row>
        <br/>
        <Row>
            <Col  push="1" span="8">开始时间：14：00</Col>
        </Row>
        <br/>
        <Row>
            <Col  push="1" span="8">结束时间：16：00</Col>
        </Row>
        <br/>
        <Row>
            <Col  push="1" span="2">预告详情：</Col>
            <Col push="1" span="5">
                    <div style="margin-bottom:2%">直播主题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预防肺癌大讲堂 </div>
                    <div><img width="368" @click="showImg" height="181" src="http://192.168.13.21//useravatar-pub/d3/d33d1e10c70f64964baefef7f3044055.jpg" style="cursor: pointer" /></div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col  push="1" span="20">加入URL(web)：http://bainuo8.gensee.com/webcast/site/entry/join-b56684bda06948fe854a02d133b4ce2c
            <a style="margin-left: 2%"
               v-clipboard:copy="'www.baidu.com'"
               v-clipboard:success="onCopy"
               v-clipboard:error="onError">复制链接</a>
            </Col>
        </Row><br/>
        <Row>
            <Col  push="1" span="20">加入URL(Client)：http://bainuo8.gensee.com/webcast/site/entry/join-b56684bda06948fe854a02d133b4ce2c
            <a style="margin-left: 2%"
               v-clipboard:copy="'www.baidu.com'"
               v-clipboard:success="onCopy"
               v-clipboard:error="onError">复制链接</a>
            </Col>
        </Row><br/>
        <Row>
            <Col  push="1" span="20">组织者口令：888888</Col>
        </Row><br/>
        <Row>
            <Col  push="1" span="20">嘉宾口令：888888</Col>
        </Row><br/>
        <Row>
        <Col  push="1" span="20"><h4>数据区：</h4></Col>
        </Row><br/>
        <Row>
            <Col  push="4" span="5">
                <div style="width: 125px;height: 87px;border:1px solid #dddee1">
                    <div  style="text-align: center;line-height:32px">观看人数</div>
                    <div style="text-align: center;line-height:32px">xxx</div>
                </div>
            </Col>
            <Col  push="4" span="5">
                <div style="width: 125px;height: 87px;border:1px solid #dddee1">
                    <div  style="text-align: center;line-height:32px">购买人数</div>
                    <div style="text-align: center;line-height:32px">xxx</div>
                </div>
            </Col>
        </Row>
        <br/>
        <Modal v-show="showModal" class="uploadFile-modal" class-name="uploadFileTheme" title="预览" v-model="showModal">
            <img :src="showImageUrl" v-if="showModal" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    export default{
        name: '',
        props: {},
        data: function () {
            return {
                showModal:false,
                showImageUrl:'http://192.168.13.21//useravatar-pub/d3/d33d1e10c70f64964baefef7f3044055.jpg',
            }
        },
        created: function () {

        },
        methods: {
            showImg(){
                this.showModal=true;
            },
            onCopy: function (e) {
                this.$Message.success("复制成功!");
            },
            onError: function (e) {
                this.$Message.error("复制失败!");
            }
        }
        ,
        computed: {},
        components: {
        }

        ,
        watch: {}
    }
</script>
