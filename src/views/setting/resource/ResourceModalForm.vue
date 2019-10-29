<template>
    <ModalForm ref="formModal">
        <template slot-scope="{model}">
            <FormItem label="名称" prop="name">
                <Input v-model="model.name" placeholder="请输入菜单名称"></Input>
            </FormItem>
            <FormItem label="编号" prop="code">
                <Input v-model="model.code" placeholder="请输入唯一编号"></Input>
            </FormItem>
            <FormItem label="URL" prop="url">
                <Input v-model="model.url" placeholder="请输入链接地址"></Input>
            </FormItem>
            <FormItem label="排序" prop="sort">
                <InputNumber :min="0" :max="99999" :step="100" v-model="model.sort"></InputNumber>
            </FormItem>
            <FormItem label="图标" prop="iconCode">
                <Input v-model="model.iconCode" placeholder="请输入图标"></Input>
            </FormItem>
            <FormItem label="描述" prop="description">
                <Input v-model="model.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入..."></Input>
            </FormItem>
        </template>
    </ModalForm>
</template>


<script>

    import formRules from './formRules'

    export default {
        name: "ResourceModalForm",
        methods: {
            addResource(parent) {
                return new Promise((resolve, reject) => {
                    this.$refs.formModal.showForm({
                        title: `添加`,
                        rules: formRules,
                        model: {
                            parentId: parent.id
                        },
                        submitter: (model) => {
                            return this.$http.post(`resource/create`, model)
                                .then(resolve)
                                .catch(reject);
                        }
                    });
                });
            },
            editResource(resource) {
                return new Promise((resolve, reject) => {
                    this.$refs.formModal.showForm({
                        title: `编辑`,
                        rules: formRules,
                        model: Object.assign({}, resource),
                        submitter: (model) => {
                            return this.$http.put(`resource/${resource.id}`, model)
                                .then(resolve)
                                .catch(reject);
                        }
                    });
                });
            },
        }
    };
</script>
