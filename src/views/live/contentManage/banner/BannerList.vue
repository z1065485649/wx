<!-- banner管理-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">&nbsp;</Col>
            <Col span="5" align="right">
                 <Button type="primary" @click="bannerMangeAdd">新增Banner</Button>
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
        name: 'banner',
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
                tableData:[{name:'森林',from:'微信',createTime:1513672636113,phone:'139234554322',state:'已认证'}],
                tableColumns:[{
                    title: '序号',
                    type: "index",
                    align: 'center'
                }, {
                    title: '标题',
                    key: 'title'
                },{
                    title: '类型',
                    key: 'type',
                    render: (h, params) => {
                        return h('span', {},params.row.type==0?'图文':'链接')
                    }
                },{
                    title: '排序号',
                    key: 'title'
                },
                    {
                        title: '更新时间',
                        key: 'updateTime',
                        render: (h, params) => {
                            return h('span', {},util.formatTimestamp(params.row.updateTime))
                        }
                    },{
                        title: '状态',
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
                                            this.pushBanner(params.row);
                                        }
                                    }
                                }, '取消发布'),
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
                                            this.detailsBanner(params.row);
                                        }
                                    }
                                }, '详情'),
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
                                            this.delBanner(params.row);
                                        }
                                    }
                                }, '删除')
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
            pushBanner(obj){
                this.$Message.success("取消成功");
            },
            bannerMangeAdd(){
                this.$router.push({name:'bannerAdd',query:{id:'1'}});
            },
            delBanner(obj){
                this.$Modal.confirm({
                    title: '提示',
                    content:"确定删除该Banner吗?",
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
            detailsBanner(obj){
                this.$router.push({name:'bannerAdd',query:{id:''}});
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
