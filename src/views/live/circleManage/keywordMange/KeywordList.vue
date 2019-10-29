<!-- 关键字管理 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18">&nbsp;</Col>
            <Col span="5" align="right">
                <Button type="primary" @click="allDel">批量删除</Button>&nbsp;&nbsp;&nbsp;
                <Button type="primary" @click="addKey">新增关键字</Button>
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
                tableData:[{id:'630011',name:'李主任肺癌交流圈',createTime:1513672636113},{id:'63002211',name:'李111主任肺癌交流圈',createTime:1513672636113}],
                tableColumns:[{
                    type: 'selection',
                    width: 60,
                    key: '_checked',
                    align: 'center',
                }, {
                    title: '关键字',
                    key: 'name',
                    width:900,
                },{
                        title: '创建时间',
                        key: 'createTime',
                        render: (h, params) => {
                            return h('span', {},util.formatTimestamp(params.row.createTime))
                        }
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
                                            this.delKey(params.row);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }],
            }
        },
        created: function () {
            this.tableData.forEach(x=>{
                x._checked=false;
            });
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
            allDel(){
                if(this.selectData.length==0){
                    this.$Message.error("请选择要删除的项!");
                    return;
                }
                this.$Modal.confirm({
                    title: "确认删除",
                    content: `<p>确定要删除选中项吗？</p>`,
                    onOk: () => {
                        /* this.$http
                         .delete(`/resource/${resource.id}`)
                         .then(result => {
                         this.$Message.success("删除成功");
                         this.fetchMenuTree();
                         });*/
                    }
                });
                //console.info(this.selectData)
                //console.info(JSON.stringify(this.tableData))
            },
            addKey(){
                this.$router.push({path:'/keywordAdd'})
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
