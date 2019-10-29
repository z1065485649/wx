<!--订单列表-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            订单号&nbsp;&nbsp;<Input v-model="query.key" placeholder="" style="width: 300px"></Input>
                <Button type="primary">查询</Button>
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
        name: '',
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
                tableData:[{orderId:'20170630011',userName:'阿海',phone:'13823456734',status:'待支付',type:'直播'}],
                tableColumns:[{
                    title: '订单号',
                    key: 'orderId',
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
                                        
                                    }
                                }
                            }, params.row.orderId)
                        ]);
                    }
                }, {
                    title: '用户昵称',
                    key: 'userName'
                },{
                    title: '手机号',
                    key: 'phone'
                },{
                    title: '订单状态',
                    key: 'status'
                },{
                    title: '业务类型',
                    key: 'type'
                },{
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
                                        this.detail(params.row);
                                    }
                                }
                            }, '详情')
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
            detail(obj){

            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
