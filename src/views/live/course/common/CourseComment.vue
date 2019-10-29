<!-- 课程评论 -->
<style lang="less" scoped>
    .CourseComment {
        .ccBody{
            border:1px solid rgb(221, 222, 225);
            margin-bottom: 2%;
        }
    }
</style>

<template>
    <div class="CourseComment">
        <div class="ccBody" v-for="(x,index) in list" :key="x.id">
            <Row style="margin: 0% 0.8% 2% 2%;">
                <p align="right"><span  @click="del(index)"><Icon type="close" style="cursor: pointer;"></Icon></span></p>
                <Col span="2">
                    <div style="width:43px;height: 43px;border-radius:50%; overflow:hidden;">
                        <img width="43" height="43" src="http://tb.himg.baidu.com/sys/portrait/item/c98ee98193e4bca6e9a2965a07"/>
                    </div>
                </Col>
                <Col span="21">
                    <div><a>曼丽</a></div>
                    <div><a>09-30 16：30</a></div>
                    <div>
                        <span>就那样吧，没什么特别的，还不如我讲的好,就那样吧，没什么特别的，还不如我讲的好就那样吧，没什么特别的，还不如我讲的好就那样吧，没什么特别的，还不如我讲的好就那样吧，没什么特别的，还不如我讲的好</span>
                    </div>
                    <div><a>百诺名医汇回复：</a>我讲得不好呢</div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'CourseComment',
        props: {
            commentList:{
                type:Array,
                default:function () {
                    return [];
                }
            }
        },
        data: function () {
            var temList=[];
            this.commentList.forEach((x=>{
                temList.push(x);
            }));
            return {
                list:temList
            }
        },
        created: function () {

        },
        methods: {
            del(index){
                this.list.splice(index,1);
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
