<style scoped lang="less">
    .tree-node {
        cursor: pointer;
        position: relative;
        .info {
            display: flex;
            padding-right: 20px;
            border: 1px solid #DDDDDD;
            border-top: none;
            .fa {
                font-size: 16px;
                font-weight: bold;
                position: absolute;
            }
            &.root {
                border-top: 1px solid #DDDDDD;
            }
        }
        & > div {
            font-size: 16px;
            line-height: 40px;
            &:hover {
                background-color: #F5F5F5;
            }
        }
        .pull-left {
            flex: 1;
        }
    }
</style>

<template>
    <div class="tree-node">
        <div :class="{info:true, root:isRoot}" :style="{paddingLeft: left + 'px'}">
            <Icon v-if='hasChild && !isRoot' :type="iconType" @click.native='toggleChildren' class="fa" :style="{left: left - 20 + 'px',top:12 + 'px'}"></Icon>
            <Checkbox v-if="!isRoot" :value="checked" @input="checkedNode"></Checkbox>
            <div class="pull-left" :title="data.description">{{data.name}}</div>
        </div>
        <ul v-show="showChildren" v-if='hasChild'>
            <li>
                <ResourceTree ref="children" v-for='child in children' :key="child.id" :data='child' :allOpen="allOpen" :resources="resources" :isRoot="false" @checked="checkedChild" :left='left+20' :level='level + 1'></ResourceTree>
            </li>
        </ul>
    </div>
</template>


<script>

    import Vue from 'vue'

    //iview的tree太丑了，且不支持搜索
    export default {
        name: 'ResourceTree',
        props: {
            left: {
                type: Number,
                default: 20
            },
            level: {
                type: Number,
                default: 1
            },
            data: {
                type: Object,
                required: true
            },
            resources: {
                type: Array,
                required: true
            },
            isRoot: {
                type: Boolean,
                default: false
            },
            allOpen: {
                type: Boolean,
                default: false
            },
        },
        data: function () {
            return {
                open: this.isRoot,
            }
        },
        computed: {
            checked: function () {
                if (!this.data || !this.resources || !this.resources.length) return false;
                return this.resources.filter(it => it.id === this.data.id).length === 1;
            },
            hasChild: function () {
                return this.data && this.data.children && this.data.children.length;
            },
            children: function () {
                return this.data.children.filter(it => it !== null);
            },
            iconType: function () {
                return this.open ? 'minus-round' : 'plus-round';
                //return this.allOpen || this.open || this.checked ? 'minus-round' : 'plus-round';
            },
            showChildren: function () {
                return this.open;
            }
        },
        methods: {
            /**
             * 选中当前节点
             */
            checkedNode(checked, prevent) {
                if (this.hasChild) {
                    this.$refs.children.forEach(child => {
                        child.checkedNode(checked, true);
                    });
                }
                this.changeResources(this.data, checked);
                if (!prevent) {
                    this.$emit('checked', this.data, checked);
                }
            },

            /**
             * 子节点选中
             */
            checkedChild(checked) {
                if (this.isRoot) return;

                if (!checked) {
                    let allChildrenUnchecked = this.$refs.children
                        .filter(child => child.checked)
                        .length === 0;
                    if (allChildrenUnchecked && this.checked) {
                        this.changeResources(this.data, false);
                        this.$emit('checked', this.data, false);
                    }
                } else {
                    if (!this.checked) {
                        this.changeResources(this.data, true);
                        this.$emit('checked', this.data, true);
                    }
                }
            },

            changeResources(data, checked) {
                if (checked) {
                    this.resources.push(data);
                } else {
                    this.resources.splice(this.resources.findIndex(it => it.id === data.id), 1)
                }
            },

            /**
             * 当前节点展开/收缩
             */
            toggleChildren() {
                if (this.isRoot) return;
                this.open = !this.open;
            },

        },
        watch: {
            allOpen: function (open) {
                if (open) {
                    this.open = true;
                }
            },
            checked: function (isChecked) {
                if (isChecked) {
                    this.open = true;
                }
            }
        }
    }
</script>