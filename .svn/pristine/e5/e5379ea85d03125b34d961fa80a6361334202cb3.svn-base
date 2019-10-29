<template>
    <div>
        <!--查询搜索页面-->
        <SearchList ref="searchList" api="role/search" :model="search" :columns="columns">
            <div slot="actions">
                <Button type="success" @click="createNewRole">添加角色</Button>
            </div>
            <FormItem prop="name" label="角色名称：">
                <Input v-model="search.name" :maxlength="20" placeholder="请输入角色名称"/>
            </FormItem>
            <FormItem prop="activated" label="状态">
                <i-switch v-model="search.activated" size="large">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                </i-switch>
            </FormItem>
        </SearchList>

        <!--弹窗新增编辑页面-->
        <ModalForm ref="formModal">
            <template slot-scope="{model}">
                <FormItem label="角色名称" prop="name">
                    <Input v-model="model.name" placeholder="请输入角色名称"></Input>
                </FormItem>
                <FormItem label="状态" prop="activated">
                    <i-switch size="large" v-model="model.activated">
                        <span slot="open">启用</span>
                        <span slot="close">禁用</span>
                    </i-switch>
                </FormItem>
                <FormItem label="备注" prop="description">
                    <Input v-model="model.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入角色描述..."></Input>
                </FormItem>
            </template>
        </ModalForm>
        <SetPermissionModal ref="setPermissionModal"></SetPermissionModal>
    </div>
</template>

<script>
    import createColumns from "./createColumns";
    import createValidRules from './createValidRules'
    import SetPermissionModal from './SetPermissionModal'

    export default {
        name: "RoleManager",
        components: {SetPermissionModal},
        data: function () {
            return {
                search: {
                    name: "",
                    activated: true
                },
                columns: createColumns(
                    this.handleEditRole,
                    this.handleToggleActivated,
                    this.handleDeleteRole,
                    this.handleSetPermission
                ),
            };
        },

        methods: {
            createNewRole() {
                this.$refs.formModal.showForm({
                    model: {},
                    title: `添加角色`,
                    rules: createValidRules(),
                    submitter: (model) => {
                        return this.$http.post(`role/create`, model)
                            .then(result => {
                                this.$refs.searchList.forceReload();
                            });
                    }
                })
            },

            handleEditRole(role) {
                this.$refs.formModal.showForm({
                    title: `修改角色`,
                    rules: createValidRules(),
                    model: Object.assign({}, role),
                    submitter: (model) => {
                        return this.$http.put(`role/${role.id}`, model)
                            .then((result) => {
                                role = model;
                            });
                    }
                })
            },

            handleDeleteRole(role) {
                this.$http.delete(`role/${role.id}`)
                    .then(result => {
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '角色已被删除'
                        });
                        this.$refs.searchList.forceReload();
                    });
            },

            handleToggleActivated(role) {
                this.$http
                    .put(`role/${role.id}/${role.activated ? "deactivate" : "activate"}`)
                    .then(result => {
                        role.activated = !role.activated;
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '角色已被 ' + (role.activated ? '启用' : '禁用')
                        });
                    })
                    .catch(error => {
                        this.$Notice.error({
                            title: '操作失败',
                            desc: error.message
                        });
                    });
            },

            handleSetPermission(role) {
                this.$refs.setPermissionModal.showModal(role);
            }
        }
    };
</script>


