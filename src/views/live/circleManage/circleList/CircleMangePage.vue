<!--用户列表-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            圈子名称&nbsp;&nbsp;<Input v-model="query.key" placeholder="" style="width: 300px"></Input>
                <Button type="primary" @click="refer">查询</Button>
            </Col>
            <Col span="5" align="right">
                <Button type="primary" @click="addCircle">新增圈子</Button>
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
        <Modal
            v-model="showQR"
            title="二维码与推广链接">
            <div>
                <img src="http://www.bainuo.cn/images/logo.png">
                <Button type="primary" @click="downQR" style="margin-left: 2%">下载二维码</Button>
            </div>
            <Input v-model="QRherf" placeholder="" disabled="disabled" :maxlength="50" style="width:316px;"></Input>
            <Button type="primary" style="margin-left: 2%"
               v-clipboard:copy="QRherf"
               v-clipboard:success="onCopy"
               v-clipboard:error="onError">复制链接</Button>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>
<script>
    import util from '@/libs/util'
    export default{
        name: 'userList',
        props: {},
        data: function () {
            return {
                showQR:false,
                QRherf:'www.bainuo.cn',
                query:{
                    key:'',
                },
                page: { //分页参数
                    size: 10,
                    index: 1,
                    total: 0,
                },
                tableData:[],
                tableColumns:[{
                    title: '圈子ID',
                    key: 'id'
                }, {
                    title: '圈子名称',
                    key: 'name',
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
                                        this.$router.push({name:'circleMangeDetails',query:{id:params.row.id}});
                                    }
                                }
                            }, params.row.name)
                        ]);
                    }
                },{
                    title: '圈主',
                    key: 'leaderInfo.name',
                    render: (h, params) => {
                            return h('span', {},params.row.from)
                        }
                },
                 {
                    title: '创建时间',
                    key: 'createTime',
                    render: (h, params) => {
                        return h('span', {},util.formatTimestamp(params.row.createTime))
                    }
                }, {
                    title: '成员管理',
                    key: 'memberNo',
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
                                        this.$router.push({name:'circleMangeMember',query:{id:params.row.id}});
                                    }
                                }
                            }, params.row.number)
                        ]);
                    }
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
                                        this.$router.push({name:'circlePostList',query:{id:params.row.id}});
                                    }
                                }
                            }, '管理圈子'),
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
                                        this.closeCircle(params.row);
                                    }
                                }
                            }, '关闭圈子'),
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
                                        this.createdQR(params.row);
                                    }
                                }
                            }, '生成二维码'),
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
                            }, '设置首页')
                        ]);
                    }
                }],
            }
        },
        created: function () {
            this.fetchData();
        },
        methods: {
            changePage(index){
                this.page.index=index;
                this.fetchData();
            },
            refer(){
                this.page.index=1;
                this.fetchData();
            },
            addCircle(){
                this.$router.push({name:'circleMangeAdd'});
            },
            closeCircle(obj){
                this.$Modal.confirm({
                    title: '关闭圈子',
                    content: '<p>提示：你将从现在起关闭。</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    },
                });
            },
            createdQR(obj){
                this.showQR = true;
            },
            onCopy: function (e) {
                this.$Message.success("复制成功!");
            },
            onError: function (e) {
                this.$Message.error("复制失败!");
            },
            downQR(){
                window.open("http://www.bainuo.cn/images/logo.png")
            },
            fetchData(){
                this.$http.get("group/search", {
                    params: {
                        size:this.page.size,
                        page:this.page.index,
                        name:this.query.key
                    }
                }).then((result)=>{
                    if (result.status == "OK") {//chief_complaint
                        this.tableData = result.list;
                        this.page.total = result.totalElements;
                    } else {
                        this.$Message.error(result.data.message);
                    }
                }).catch(function (error) {
                    //_this.$Message.error("搜索出现error" + error);
                });
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        }
    }
</script>
