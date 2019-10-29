<!--用户举报-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1" style="text-align:center;">
                {{title}}
            </Col>
        </Row>
        <Row>
            <Col span="6" push="1" style="">
                圈主：{{belong}}
            </Col>
            <Col span="6" push="1" style="">
                成员数量：{{member}}
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
        name: '',
        props: {},
        data: function () {
            return {
                title:'李主任肺癌交流圈',
                belong:'李铭顺',
                member:'10',
                query:{
                    key:'',
                },
                page: { //分页参数
                    size: 10,
                    index: 1,
                    total: 0,
                },
                tableData:[{name:'李铭顺',role:'群主',enterTime:1513672636113,ifBan:true}],
                tableColumns:[{
                    title: '名字',
                    key: 'name',
                }, {
                    title: '身份',
                    key: 'role'
                },{
                    title: '加入时间',
                    key: 'enterTime',
                    render: (h, params) => {
                        return h('span', {},util.formatTimestamp(params.row.enterTime))
                    }
                },{
                    title: '操作',
                    key: 'action',
                    width: 280,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            params.row.ifBan?
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
                                        this.cancelRemove(params.row);
                                    }
                                }
                            }, '取消踢人')
                            :
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
                                        this.remove(params.row);
                                    }
                                }
                            }, '踢人'),
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
                                        this.setVIP(params.row);
                                    }
                                }
                            }, '设为嘉宾')
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
            remove(obj){
                this.$Modal.confirm({
                    title: '踢人',
                    content: '<p>提示：该用户不能再进入该圈子</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            cancelRemove(obj){
                this.$Modal.confirm({
                    title: '取消踢人',
                    content: '<p>提示：该用户可以重新进入圈子</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            setVIP(obj){
                this.$Modal.confirm({
                    title: '设为嘉宾',
                    content: '<p>提示：将该用户设为嘉宾管理员，可以享受和圈主一样的功能。</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
