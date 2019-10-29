<template>
    <Modal v-model="show" title="资源设置" :width="600">
        <div>
            <Form :model="{}" :label-width="100" label-position="left" @submit.native.prevent="submitSearch">
                <FormItem label="资源名称：">
                    <Input v-model="keyword" placeholder="资源名称" style="width: 300px"/>
                </FormItem>
            </Form>
        </div>

        <Spin v-if="loading" size="large" fix></Spin>
        <ResourceTree v-if="!loading" ref="tree" :left="20" :level="1" :data="currentTree" :isRoot="true" :resources="resources" :allOpen="allOpen"></ResourceTree>
        <div slot="footer">
            <Button type="ghost" @click="show=false">取消</Button>
            <Button type="primary" @click="submitResources">提交</Button>
        </div>
    </Modal>
</template>


<script>

    import ResourceTree from './ResourceTree'
    import ResourceTreeLoader from './ResourceTreeLoader'

    export default {
        name: 'SetPermissionModal',
        data: function () {
            return {
                role: null,
                show: false,
                loading: true,
                keyword: '',
                allOpen: false,

                fullTree: null,
                currentTree: null,

                resources: []
            }
        },

        methods: {
            showModal(role) {
                this.role = role;
                this.loading = true;
                ResourceTreeLoader.load(this.$http).then(root => {
                    this.$http.get(`role/${role.id}/resources`).then(result => {
                        this.fullTree = root;
                        this.currentTree = root;
                        this.resources = result.data;
                        this.show = true;
                        this.loading = false;
                    });
                });
            },

            submitSearch() {
                if (!this.keyword) {
                    this.allOpen = false;
                    this.currentTree = this.fullTree;
                } else {
                    let children = this.filterNodes(this.fullTree.children, this.keyword);
                    if (children && children.length) {
                        this.allOpen = true;
                        this.currentTree = {
                            name: `包含“${this.keyword}”的资源`,
                            children: children
                        }
                    } else {
                        this.$Notice.error({
                            title: `没有找到包含“${this.keyword}”的资源，请检查输入关键字`
                        });
                    }
                }
            },

            submitResources() {
                console.log(this.resources.map(it => it.id));
                console.log(this.resources.map(it => it.name));
                this.$http.put(`role/${this.role.id}/resources`, this.resources.map(it => it.id))
                    .then(result => {
                        this.show = false;
                        this.$Notice.success({
                            title: '操作成功',
                            desc: `角色 ${this.role.name} 的权限已被更新`
                        });
                    });
            },

            /**
             * 递归搜索整颗树，如果节点或其任意一个后代节点包含指定关键词则保留
             * @param nodes
             * @param keyword
             * @returns {*}
             */
            filterNodes(nodes, keyword) {
                if (!keyword) return nodes;
                if (!nodes || !nodes.length) return null;

                let $nodes = [];
                nodes.forEach(node => {
                    let selfHasKeyword = node.name && (node.name.indexOf(keyword) != -1);
                    let filteredChildren = this.filterNodes(node.children, keyword);
                    let hasFilteredChildren = filteredChildren && filteredChildren.length;
                    if (selfHasKeyword || hasFilteredChildren) {
                        $nodes.push(Object.assign({}, node, {
                            children: filteredChildren
                        }));
                    }
                });
                return $nodes;
            },
        },
        components: {
            ResourceTree
        },
    }
</script>

