<template>
    <div>
        <Input :value="value" readonly :placeholder="title" icon="edit" @click="showModal" @on-click="showModal" @on-focus="showModal"/>
        <Modal v-model="show" :title="title" v-if="enable" width="960">
            <Row style="margin-top:20px;">
                <Form ref="form" :model="model" :inline="true" :label-width="120" @submit.native.prevent="submitForm">
                    <Row>
                        <slot :model="model">此处为查询条件</slot>
                        <div style="float:right">
                            <Button type="primary" html-type="submit">查询</Button>
                        </div>
                    </Row>
                </Form>
                <PagedList :loading="loading" :page="page" :columns="columns" :list="list" :total="total" @changePage="changePage" @dblclickRow="dblclickRow"></PagedList>
            </Row>
            <div slot="footer"></div>
        </Modal>
    </div>
</template>


<script>
    import Vue from 'vue'
    import PagedList from '@/components/PagedList'

    export default {
        name: "ModalSelect",
        props: {
            //搜索接口URL
            api: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                default: ""
            },
            //显示标题
            title: {
                type: String,
                default: '请选择'
            },
            //表格schema定义
            columns: {
                type: Array,
                required: true
            },
            //查询参数
            params: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data: function () {
            return {
                show: false,
                enable: false,
                loading: true,

                total: 0,
                list: [],
                page: {
                    page: 1,
                    size: 10
                },
                model: {}
            };
        },
        methods: {
            showModal() {
                this.enable = true;
                Vue.nextTick(() => {
                    this.show = true;
                    this.submitForm();
                });
            },

            dblclickRow(row) {
                this.show = false;
                this.$emit('selected', row);
                setTimeout(() => {
                    this.enable = false;
                }, 1000)
            },

            /**
             * 翻页事件
             */
            changePage(page) {
                Object.assign(this.page, page);
                this.submitSearchParams();
            },
            /**
             * 提交表单
             */
            submitForm() {
                Object.assign(this.page, {page: 1});
                this.submitSearchParams();
            },
            /**
             * 刷新数据
             */
            submitSearchParams() {
                this.loading = true;
                this.$http
                    .get(this.api, {
                        params: Object.assign({}, this.params, this.page, this.model)
                    })
                    .then(result => {
                        this.loading = false;
                        this.list = result.list;
                        this.total = result.totalElements;
                    })
                    .catch(error => {
                        this.list = [];
                        this.loading = false;
                        this.$Message.error("错误：" + error.message);
                    });
            }

        },
        components: {PagedList}
    };
</script>
