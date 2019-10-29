<template>
    <div>
        <Row style="margin-bottom: 20px;">
            <Col span="22">
            <Input v-model="keyword" :maxlength="20" placeholder="名称/URL" style="width: 346px" @on-enter="query"></Input>
            <Button type="primary" @click="query">查询</Button>
            <Button type="ghost" @click="reset">清空</Button>
            </Col>
            <Col span="2" align="right">
                <!--<Button type="primary" @click="add">添加</Button>-->
            </Col>
        </Row>
        <Row>
            <Table border :data="table" :columns="columns"></Table>
        </Row>
        <ResourceModalForm ref="resourceChildModalForm"/>
    </div>
</template>

<script>

    import createColumns from './createColumns'
    import ResourceModalForm from "./ResourceModalForm";
    export default {
        name: "LeafList",
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        data: function () {
            return {
                keyword: "",
                table: this.list || [],
                columns: createColumns(this.handleEdit, this.handleDelete)
            };
        },
        watch: {
            list: function () {
                this.table = this.list || [];
            }
        },
        methods: {
            reset() {
                this.keyword = "";
                this.query();
            },
            add(){
                console.info(this.$route.path)
            },
            query() {
                if (!this.list || !this.list.length) return;

                if (!this.keyword) {
                    this.table = this.list;
                } else {
                    this.table = this.list.filter(
                        it =>
                            it.url.indexOf(this.keyword) != -1 ||
                            it.name.indexOf(this.keyword) != -1
                    );
                }
            },

            handleEdit(resource) {
                this.$emit("editResource", resource);
            },

            handleDelete(resource) {
                this.$emit("deleteResource", resource);
            }
        }
        ,
        components: {
            ResourceModalForm,
        }
    };
</script>

