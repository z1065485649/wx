<!--圈子model-->
<style lang="less" scoped>
    .circleModel {

    }
</style>

<template>
    <div class="circleModel">
        <Modal
                v-model="model"
                :width="width"
                :title="title"
                @on-ok="ok"
                @on-cancel="close">
            <Row>
                <Col span="6">
                <!--<label style="font-size: 14px;margin-right: 2%">姓名</label>-->
                <Input v-model="query.key" placeholder="搜索圈子" style="width: 200px"></Input>
                </Col>
                <Col span="2">
                <Button type="primary" @click="search">搜索</Button>
                </Col>
            </Row>
            <br>
            <Row>
                <Col>
                <Table @on-selection-change="onSelectChange" border :data="tableData" :columns="tableColumns"></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="page.total" :page-size="page.size" :current="page.index" @on-change="changePage"></Page>
                    </div>
                </div>
                </Col>
            </Row>
            <div slot="footer">
                <Button @click="close">取消</Button>
                <Button type="info" @click="ok" :disabled="row.length==0">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import util from '@/libs/util'
    export default{
        name: 'CircleModel',
        props: {
            width:{type:String,default:'900'},
            isModel:{type:Boolean,default:false},
            title:{type:String,default:'选择圈子'}
        },
        data: function () {
            return {
                query:{
                    key:'',
                },
                row:[],
                model:false,
                page: {
                    size: 10,
                    index: 1,
                    total: 0,
                },
                tableData:[],
                tableColumns:[{
                    type: 'selection',
                    width: '8%',
                    align: 'center',
                },{title:'圈子名称',key:'name'},{title:'圈子创建者',key:'createBy'},
                    {title:'创建时间',key:'createDate',
                        render: (h, params) => {
                            return h('div',util.formatTimestamp(params.row.createDate));
                        }
                    },{title:'成员数量',key:'number'},{title:'话题数',key:'topicNumber'}],
            }
        },
        created: function () {

        },
        methods: {
            ok(){
                this.row = [];
                this.$emit('input',false);
            },
            close(){
                this.row = [];
                this.$emit('input',false);
            },
            onSelectChange(){

            },
            changePage(val){
                this.page.index=val;
            },
            search: function () {
                this.page.index = 1;
                this.initDate();
            },
            initDate(){
                /*this.$http.get("fuvGroupMember/findGroupPatientUnbind", {
                    params: {
                        size: this.page.size,
                        page: this.page.index,
                        searchKey: this.query.name,
                        isJoinProject:this.query.isJoinProject=="all"?"":this.query.isJoinProject,
                        fuvGroupId: this.$route.query.key,
                        gender: this.query.sex,
                        startTime: startTime,
                        endTime: endTime,
                        diseases: this.query.disease
                    }
                }).then((result) => {
                    if (result.status == "200" && result.data.status == "OK") {//chief_complaint
                        this.tableData1 = result.data.list;
                        this.row=[];
                        for (var a = 0; a < this.tableData1.length; a++) {
                            this.$set(this.tableData1[a], '_checked', false);
                            for (var i = 0; i < this.row.length; i++) {
                                if (this.row[i].id == this.tableData1[a].id) {
                                    this.$set(this.tableData1[a], '_checked', true);
                                    this.$set(this.tableData1[a], 'fuvStartTime', this.row[i].fuvStartTime);
                                }
                            }
                        }
                        this.page.total = result.data.totalElements;
                    }
                }).catch((error) => {
                    this.$Message.error("出现error" + error);
                });*/
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {
            isModel:function () {
                this.model=this.isModel
                if(this.model){
                    this.initDate();
                }
            }
        }
    }
</script>
