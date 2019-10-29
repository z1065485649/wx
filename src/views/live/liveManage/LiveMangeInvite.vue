<!-- 邀请规则-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col push="1">对该直播设定邀请规则：</Col>
        </Row><br/>
        <Row>
            <Col span="8" push="2"><Radio v-model="lnvite">
            邀请<input v-model="number" :maxlength="50" size="small" style="width:50px;"  onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"
                     onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"></input>个以上的好友加入免费听课
            </Radio>
            </Col>
            <Col span="5">-1为所有用户，默认为3个</Col>
        </Row>
        <br/> <br/> <br/>
        <Row>
            <Col span="6" push="4">
                <Button type="primary" @click="success">&nbsp;&nbsp;提交&nbsp;&nbsp;</Button>
            </Col>
            <Col span="5">
                <Button type="primary" @click="balck">&nbsp;&nbsp;返回&nbsp;&nbsp;</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default{
        name: '',
        props: {},
        data: function () {
            return {
                lnvite:true,
                number:'',
            }
        },
        created: function () {

        },
        methods: {
            balck(){
                this.$router.push({name:'liveManage'})
            },
            success(){
                if(this.number!=''){
                    this.$Message.success("邀请成功!");
                }else{
                    this.$Message.error("邀请人数不能为空!");
                }
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
