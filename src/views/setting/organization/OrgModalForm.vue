<template>
    <ModalForm ref="formModal">
        <template slot-scope="{model}">
            <FormItem label="所属地区" prop="district">
                <SelectDistrict v-model="model.districtId"></SelectDistrict>
            </FormItem>
            <FormItem label="机构名称" prop="name">
                <Input v-model="model.name" placeholder="请输入机构名称"/>
            </FormItem>
            <FormItem label="状态" prop="activated">
                <i-switch size="large">
                    <span slot="open">启用</span>
                    <span slot="close">禁用</span>
                </i-switch>
            </FormItem>
            <FormItem label="机构描述" prop="description">
                <Input v-model="model.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入机构描述..."/>
            </FormItem>
        </template>
    </ModalForm>
</template>

<script>

    import SelectDistrict from '@/components/SelectDistrict'

    let rules = {
        name: {
            required: true,
            trigger: "blur",
            message: "请填写机构名称",
        },
        districtId: {
            required: true,
            trigger: "blur",
            message: "请选择机构所在地区",
        }
    };

    export default {
        name: 'OrgModalForm',

        methods: {
            createOrg() {
                return new Promise((resolve, reject) => {
                    this.$refs.formModal.showForm({
                        title: `添加组织机构`,
                        rules: rules,
                        model: {},
                        submitter: (model) => {
                            return this.$http.post(`organization/create`, model)
                                .then(resolve)
                                .catch(reject);
                        }
                    });
                });
            },

            editOrg(org) {
                return new Promise((resolve, reject) => {
                    this.$refs.formModal.showForm({
                        title: `修改组织机构资料`,
                        rules: rules,
                        model: Object.assign(org),
                        submitter: (model) => {
                            return this.$http.put(`organization/${org.id}`, model)
                                .then(resolve)
                                .catch(reject);
                        }
                    })
                });
            },
        },
        components: {SelectDistrict}
    }
</script>