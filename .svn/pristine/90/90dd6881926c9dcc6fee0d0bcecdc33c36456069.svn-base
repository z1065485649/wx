<template>
    <div>
        <Row style="margin-bottom:20px;">
            <div style="float:right">
                <slot name="actions"></slot>
            </div>
        </Row>

        <Form ref="search" :model="model" :inline="true" :label-width="120" @submit.native.prevent="submitForm">
            <Row>
                <slot>此处为查询条件</slot>
                <div style="float:right">
                    <Button type="primary" html-type="submit">查询</Button>
                    <Button type="ghost" @click="resetSearchForm">清空</Button>
                </div>
            </Row>
        </Form>

        <PagedList :loading="loading" :page="page" :columns="columns" :list="list" :total="total" @changePage="changePage"></PagedList>
    </div>
</template>

<script>
    import qs from 'qs'
    import Vue from 'vue'
    import PagedList from "./PagedList";

    /**
     * 识别并转换字符串的实际类型
     * 1. 尝试识别true/false
     * 2. 尝试识别日期字符串
     * 3. 尝试识别数字：float/int
     * 4. 其他类型原样返回
     * @param value
     * @returns {*}
     */
    function castToTypedValue(value) {
        if ((typeof value) !== 'string' || !value.length) {
            return value;
        }
        //for boolean
        if (value === 'true' || value === 'false') {
            return value === 'true';
        }

        if (isNaN(value)) {
            //for Date
            let date = Date.parse(value);
            if (isNaN(date)) {
                return value;
            } else {
                return new Date(date);
            }
        } else {
            //for Number:float or int
            if (value.indexOf('.') === -1) {
                return Number.parseInt(value);
            } else {
                return Number.parseFloat(value);
            }
        }
    }

    /**
     * 从查询字符串中提取出强类型参数（query中的参数都是string类型）
     * @param query
     * @returns {*}
     */
    function parseParamsFromQuery(query) {
        if (!query) return query;

        let params = {};
        Object.getOwnPropertyNames(query)
            .forEach(prop => {
                let value = query[prop];
                params[prop] = castToTypedValue(value);
            });
        return params;
    }

    /**
     * 过滤指定source对象的所有字段，符合过滤条件的字段将包含在返回的目标对象中
     * @param source
     * @param filter
     * @returns {*}
     */
    function filterProps(source, filter) {
        if (!source) return source;

        let target = {};
        Object.getOwnPropertyNames(source)
            .filter(filter)
            .filter(prop => prop !== '__ob__')
            .forEach(prop => {
                target[prop] = source[prop];
            });
        return target;
    }

    function restorePage(target, source) {
        Object.assign(target, filterProps(source, prop => ['page', 'size'].indexOf(prop) !== -1));
    }

    function restoreModel(target, source) {
        let temp = filterProps(source, prop =>
            ['page', 'size'].indexOf(prop) === -1
        );
        Object.assign(target, temp);
        let targetProps = Object.getOwnPropertyNames(temp);
        Object.getOwnPropertyNames(target).forEach(prop => {
            if (targetProps.indexOf(prop) === -1 && prop !== '__ob__') {
                target[prop] = undefined;
            }
        });
    }


    export default {
        name: "UserManager",
        props: {
            //搜索接口URL
            api: {
                type: String,
                required: true,
            },
            //查询参数对象
            model: {
                type: Object,
                required: true
            },
            //表格schema定义
            columns: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            //指定查询参数是否与路由中的参数字符串绑定
            bindWithRoute: {
                type: Boolean,
                default: true
            }
        },
        data: function () {
            return {
                total: 0,
                list: [],
                loading: true,
                page: {
                    page: 1,
                    size: 10
                },
                originModel: null,
            };
        },
        created() {
            this.originModel = Object.assign({}, this.model);
            this.forceReload();
        },
        watch: {
            $route: function () {
                this.forceReload();
            }
        },
        methods: {
            /**
             * 刷新数据
             */
            forceReload() {
                if (this.bindWithRoute) {
                    let query = this.$route.query;
                    if (Object.getOwnPropertyNames(query).length) {
                        let params = parseParamsFromQuery(query);
                        restorePage(this.page, params);
                        restoreModel(this.model, params);
                        this.fetchData(params);
                    } else {
                        //无查询参数时
                        restoreModel(this.model, this.originModel);
                        Object.assign(this.page, {page: 1, size: 10});
                        this.fetchData(Object.assign({}, this.page, this.model));
                    }
                } else {
                    let params = Object.assign(
                        {page: 1, size: 10}, this.page, this.model
                    );
                    this.fetchData(params);
                }
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
             * 提交查询参数事件
             */
            submitSearchParams() {
                let params = Object.assign(
                    {}, this.model, this.page
                );
                if (this.bindWithRoute) {
                    this.$router.push({
                        query: params
                    });
                } else {
                    this.fetchData(params);
                }
            },
            /**
             * 清空表单事件
             */
            resetSearchForm() {
                this.$refs.search.resetFields();
                Object.assign(this.page, {page: 1});
                Vue.nextTick(() => {
                    this.submitSearchParams();
                });
            },
            /**
             * 刷新数据
             */
            fetchData(params) {
                this.loading = true;
                this.$http
                    .get(this.api, {
                        params: params
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
            },
        },
        components: {
            PagedList
        }
    };
</script>

