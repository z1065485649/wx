<!--用户列表-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            姓名/手机号&nbsp;&nbsp;<Input v-model="query.key" placeholder="" style="width: 300px"></Input>
                <Button type="primary">查询</Button>
            </Col>
            <Col span="5" align="right">
                <Button type="primary" @click="userMangeAdd">新增用户</Button>
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
    import util from '@/libs/util'
    export default{
        name: 'userList',
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
                tableData:[{id:'20171211010',name:'森林',from:'微信',createTime:1513672636113,phone:'139234554322',state:'已认证'}],
                tableColumns:[{
                    title: '用户ID',
                    key: 'id'
                }, {
                    title: '用户昵称',
                    key: 'name'
                },{
                    title: '用户来源',
                    key: 'from',
                    render: (h, params) => {
                            return h('span', {},params.row.from)
                        }
                },
                 {
                    title: '注册时间',
                    key: 'createTime',
                    render: (h, params) => {
                        return h('span', {},util.formatTimestamp(params.row.createTime))
                    }
                }, {
                    title: '手机号码',
                    key: 'phone'
                }, {
                        title: '认证状态',
                        key: 'state',
                        render: (h, params) => {
                            return h('span', {},params.row.state)
                        }
                    },
                    {
                    title: '操作',
                    key: 'action',
                    width: 280,
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
                                        this.detailsUser(params.row);
                                    }
                                }
                            }, '查看详情'),
                            '1'?
                            (h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                },
                                style: {
                                    color: '#4DA1FF'
                                },
                                on: {
                                    click: () => {
                                        this.checkUser(params.row);
                                    }
                                }
                            }, '审核')):null
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
            checkUser(obj){
                this.$router.push({name:'userMangeCheck',query:{id:'1'}});
            },
            detailsUser(obj){
                this.$router.push({name:'userMangeDetails',query:{id:'1'}});
            },
            userMangeAdd(){
                this.$router.push({name:'userMangeAdd'});
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
