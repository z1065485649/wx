<!--用户列表-->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
            <Col span="18" push="1">
            <Input v-model="query.key" placeholder="" style="width: 300px"></Input>
            <Select v-model="query.type" style="width: 120px">
                <Option value="主题">主题</Option>
                <Option value="问答">问答</Option>
                <Option value="直播回放">直播回放</Option>
            </Select>
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
    import util from '@/libs/util'
    export default{
        name: 'userList',
        props: {},
        data: function () {
            return {
                query:{
                    key:'',
                    type:''
                },
                page: { //分页参数
                    size: 10,
                    index: 1,
                    total: 0,
                },
                tableData:[{title:'肺癌病例讨论',createUser:'李铭顺',createTime:1513672636113,type:'主题',count:'10'}],
                tableColumns:[{
                    title: '贴子标题',
                    key: 'title'
                }, {
                    title: '贴子创建人',
                    key: 'createUser'
                },
                 {
                    title: '创建时间',
                    key: 'createTime',
                    render: (h, params) => {
                        return h('span', {},util.formatTimestamp(params.row.createTime))
                    }
                },{
                    title: '贴子类型',
                    key: 'type'
                }, {
                    title: '点赞数',
                    key: 'count'
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
                                        this.enterPost(params.row);
                                    }
                                }
                            }, '进入帖子')
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
            enterPost(obj){
                this.$router.push({name:'circlePostDetail',query:{id:'1'}})
            },
            fetchData(){
                this.$http.get("fuvTodo/page", {
                    params: {
                        name:startTime,
                    }
                }).then((result)=>{
                    if (result.status == "200" && result.data.status == "OK") {//chief_complaint
                        this.list = result.data.list;
                        this.list.forEach(x=>{
                            x.check=false;
                        });
                        this.page.total = result.data.totalElements;
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
