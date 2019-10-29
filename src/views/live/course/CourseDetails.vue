<!-- 课程详情 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col push="1" span="2">课程名称：</Col>
            <Col span="10" style="margin-left:1%">医聊xxxx</Col>
        </Row><br/>
        <Row>
            <Col push="1" span="2">课程圈子：</Col>
            <Col span="10" style="margin-left:1%">课程圈子xxxxx</Col>
        </Row><br/>
        <Row>
            <Col push="1" span="2">课程介绍：</Col>
            <Col span="20" style="margin-left:1%">
                <div >随着医学的发展，肺癌的治疗方式越来越多，针对这个我们要怎么做到提前预防，是需要有有针对性的进行</div>
            </Col>
        </Row><br/>
        <Row>
            <Col push="1" span="2">课程海报：</Col>
            <Col span="10" style="margin-left: 1%">
                <img src="http://192.168.13.21//useravatar-pub/d3/d33d1e10c70f64964baefef7f3044055.jpg"/>
            </Col>
        </Row><br/>
        <Row>
            <Col  push="1" span="20"><span>数据区：</span></Col>
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
        <Row>
            <Col  push="1" span="20"><span>评论：</span></Col>
        </Row><br/>
        <Row>
           <!-- <Col  push="1" span="2"><span>&nbsp;</span></Col>-->
            <Col push="2" span="14" style="margin-left: 1%">
                 <CourseComment :commentList="[{test:'aa'},{test:'aa'}]"></CourseComment>
            </Col>
        </Row><br/>
    </div>
</template>
<script>
    import CourseComment from '@/views/live/course/common/CourseComment'
    export default{
        name: '',
        props: {},
        data: function () {
            return {}
        },
        created: function () {

        },
        methods: {}
        ,
        computed: {},
        components: {
            CourseComment
        }
        ,
        watch: {}
    }
</script>
