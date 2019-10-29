<!--用户反馈-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            关键字&nbsp;&nbsp;<Input v-model="query.key" placeholder="" style="width: 300px"></Input>
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
                tableData:[{userName:'曼丽',content:'不方便，还可以体验更好'}],
                tableColumns:[{
                    title: '用户昵称',
                    key: 'userName',
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
                            }, params.row.userName)
                        ]);
                    }
                }, {
                    title: '反馈内容',
                    key: 'content'
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
                                        this.reply(params.row);
                                    }
                                }
                            }, '回复')
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
            reply(obj){
                
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
