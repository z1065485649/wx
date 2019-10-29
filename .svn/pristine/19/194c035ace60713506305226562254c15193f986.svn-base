<template>
    <div>
        <SearchList ref="searchList" api="organization/search" :model="search" :columns="columns">
            <div slot="actions">
                <Button type="success" @click="createNewOrg">添加机构</Button>
            </div>
            <FormItem prop="name" label="选择区域">
                <SelectDistrict v-model="search.districtId"></SelectDistrict>
            </FormItem>
            <FormItem prop="name" label="机构名称">
                <Input type="text" v-model="search.name" placeholder="请输入机构名称"></Input>
            </FormItem>
            <FormItem prop="activated" label="状态">
                <i-switch v-model="search.activated" size="large">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                </i-switch>
            </FormItem>
        </SearchList>

        <OrgModalForm ref="orgModalForm"></OrgModalForm>
    </div>
</template>

<script>
    import OrgModalForm from './OrgModalForm'
    import createColumns from "./createColumns";
    import SelectDistrict from '@/components/SelectDistrict'

    export default {
        name: "OrganizationManager",

        data: function () {
            return {
                search: {
                    name: "",
                    activated: true,
                    districtId: ""
                },
                columns: createColumns(
                    this.editOrg,
                    this.deleteOrg,
                    this.toggleActivate,
                )
            };
        },
        methods: {
            createNewOrg() {
                this.$refs.orgModalForm
                    .createOrg()
                    .then(result => {
                        this.$refs.searchList.forceReload();
                    });
            },

            editOrg(org) {
                this.$refs.orgModalForm
                    .editOrg(org)
                    .then(model => {
                        org = model;
                    });
            },

            deleteOrg(org) {
                this.$http
                    .delete(`organization/${org.id}`)
                    .then(result => {
                        this.$Notice.success({
                            title: '操作成功',
                            desc: `${org.name} 已被删除`
                        });
                        this.$refs.searchList.forceReload();
                    })
                    .catch(error => {
                        this.$Notice.error({
                            title: '删除失败',
                            desc: error.message
                        });
                    });
            },

            toggleActivate(org) {
                this.$http
                    .put(`organization/${org.id}/${org.activated ? "deactivate" : "activate"}`)
                    .then(result => {
                        org.activated = !org.activated;
                        this.$Notice.success({
                            title: '操作成功',
                            desc: `${org.name} 已被 ${org.activated ? '启用' : '禁用'}`
                        });
                    })
                    .catch(error => {
                        this.$Notice.error({
                            title: '操作失败',
                            desc: error.message
                        });
                    });
            },
        },
        components: {
            OrgModalForm,
            SelectDistrict
        }
    };
</script>