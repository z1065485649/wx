<!-- 分类管理 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18">&nbsp;</Col>
            <Col span="5" align="right">
            <Button type="primary" @click="addType">创建分类</Button>
            </Col>
        </Row><br/>
        <Row>
            <Col>
            <Table border ref="selection" :data="tableData" :columns="tableColumns"
                   @on-select="onSelectOne"
                   @on-selection-change="onSelectChanges" @on-select-all="onSelectAll"></Table>
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
        name: 'keyword',
        props: {},
        data: function () {
            return {
                page: { //分页参数
                    size: 10,
                    index: 1,
                    total: 0,
                },
                selectData:[],//
                tableData:[{id:'630011',name:'李主任肺癌交流圈',desc:'desc',createTime:1513672636113,sort:1}],
                tableColumns:[ {
                    title: '分类名称',
                    key: 'name',
                },{
                    title: '分类描述',
                    key: 'desc',
                },{
                    title: '创建时间',
                    key: 'createTime',
                    render: (h, params) => {
                        return h('span', {},util.formatTimestamp(params.row.createTime))
                    }
                },{
                    title: '排序号',
                    key: 'sort',
                },{
                    title: '操作',
                    key: 'action',
                    width: 200,
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
                                        this.editType(params.row);
                                    }
                                }
                            }, '编辑'),
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
                                        this.delKey(params.row);
                                    }
                                }
                            }, '删除'),
                        ]);
                    }
                }],
            }
        },
        created: function () {
        },
        methods: {
            changePage(val){

            },
            delKey(obj){
                this.$Modal.confirm({
                    title: "确认删除",
                    content: `<p>确定要删除吗？</p>`,
                    onOk: () => {
                        /* this.$http
                         .delete(`/resource/${resource.id}`)
                         .then(result => {
                         this.$Message.success("删除成功");
                         this.fetchMenuTree();
                         });*/
                    }
                });
            },
            onSelectChanges(obj){
                this.selectData=obj;
            },
            onSelectOne(obj){
                console.info(obj)
            },
            onSelectAll(obj){
                console.info(obj);
            },
            editType(obj){
                this.$router.push({path:'/circleTypeAdd',query:{id:'1',edit:true}})
            },
            addType(){
                this.$router.push({path:'/circleTypeAdd'})
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
