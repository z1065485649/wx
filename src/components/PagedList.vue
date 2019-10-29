<style lang="less" scoped>
    .paged-list {
        padding-top: 20px;

        .page {
            margin: 40px 0px 40px 0px;
        }
        .spin-container {
            width: 100%;
            height: 300px;
            position: relative;
            display: inline-block;
        }

        .spin-icon-load {
            animation: ani-spin 1.5s linear infinite;
        }
        @keyframes ani-spin {
            from {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
</style>

<template>
    <div class="paged-list">
        <Table class="list" stripe border :columns="columns" :data="list" :loading="loading" @on-selection-change="onChangeSelection" @on-row-dblclick="onDblclickRow">
            <div class="spin-container" slot="loading">
                <Spin size="large" fix>
                    <Icon type="load-a" size="48" class="spin-icon-load"></Icon>
                </Spin>
            </div>
        </Table>
        <div style="float: right;">
            <Page class="page"
                  :total="total" :current="page.page" :page-size="page.size"
                  @on-change="onChangePage" @on-page-size-change="onChangePageSize"
                  show-sizer show-elevator show-total :page-size-opts="[10, 20, 50,100,400]"
            ></Page>
        </div>
    </div>

</template>

<script>
    export default {
        name: "PagedList",

        props: {
            loading: {
                type: Boolean,
                default: true
            },

            total: {
                type: Number,
                default: 0
            },

            page: {
                type: Object,
                default: function () {
                    return {
                        page: 1,
                        size: 10
                    };
                }
            },

            list: {
                type: Array,
                default: function () {
                    return [];
                }
            },

            columns: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        methods: {
            onChangePage(newPage) {
                this.$emit("changePage", {
                    page: newPage,
                    size: this.page.size
                });
            },

            onChangePageSize(newSize) {
                this.$emit("changePage", {
                    size: newSize,
                    page: this.page.page
                });
            },

            onDblclickRow(row){
                this.$emit('dblclickRow',row);
            },

            onChangeSelection(selection){
                this.$emit('changeSelection',selection);
            },
        }
    };
</script>
