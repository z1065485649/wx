<!--精品课程管理 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            课程名称&nbsp;&nbsp;<Input v-model="query.key" placeholder="" style="width: 300px"></Input>
            <Button type="primary">查询</Button>
            </Col>
            <Col span="5" align="right">
            <Button type="primary" @click="addCourse">新增课程</Button>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            <Table border :data="tableData" :columns="tableColumns"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :page-size-opts="[10,20,50,100]" :total="page.total" :page-size="page.size" :current="page.index" @on-change="changePage"></Page>
                </div>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default{
        name: 'CourseMangePage',
        props: {},
        data: function () {
            return {
                query:{
                    key:'',
                },
                page: { //分页参数
                    size: 10,
                    index: 1,
                    total: 0,
                },
                tableData:[{id:'111',name:'xxx',createTime:'aaa',lastUpdateTime:''}],
                tableColumns:[{
                    title: '课程id',
                    key: 'id'
                }, {
                    title: '课程名称',
                    key: 'name'
                },{
                        title: '创建时间',
                        key: 'createTime',
                        render: (h, params) => {
                            return h('span', {},'')
                        }
                    },
                    {
                        title: '最新更新时间',
                        key: 'lastUpdateTime',
                        render: (h, params) => {
                            return h('span', {},'')
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 350,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#4DA1FF'
                                    },
                                    on: {
                                        click: () => {
                                            this.editCourse(params.row);
                                        }
                                    }
                                }, '修改课程'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#4DA1FF'
                                    },
                                    on: {
                                        click: () => {
                                            this.delCourse(params.row);
                                        }
                                    }
                                }, '课程删除'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#4DA1FF'
                                    },
                                    on: {
                                        click: () => {
                                            this.chapterMange(params.row);
                                        }
                                    }
                                }, '章节管理'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#4DA1FF'
                                    },
                                    on: {
                                        click: () => {
                                            this.detailsCourse(params.row)
                                        }
                                    }
                                },'查看详情'),
                            ]);
                        }
                    }],
            }
        },
        created: function () {

        },
        methods: {
            changePage(index){

            },
            editCourse(obj){
                this.$router.push({name:'courseAdd'})
            },
            delCourse(obj){
                this.$Modal.confirm({
                    title: '提示',
                    content:"确定删除该课程吗?",
                    onOk: () => {
                        /*this.$http.post('fuvGroupEduCategory/del?pid='+pid+"&id="+id).then((result) => {
                         if (result.status == "200") {
                         if (result.data.status == "OK") {
                         this.$Message.success(result.data.message);
                         this.restPatients();
                         } else {
                         this.$Message.error(result.data.message);
                         }
                         } else {
                         console.log("搜索无数据")
                         }
                         }).catch((error) => {
                         this.$Message.error("出现error" + error);
                         });*/
                    },
                    onCancel: () => {
                    }
                });
            },
            chapterMange(obj){
                this.$router.push({name:'courseChapter',query:{id:'1'}});
            },
            detailsCourse(obj){
                this.$router.push({name:'courseDetails',query:{id:'1'}});
            },
            addCourse(){
                this.$router.push({name:'courseAdd'});
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
