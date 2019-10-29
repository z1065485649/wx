<template>
    <Modal v-model="show" :title="title" v-if="enable">
        <Form ref="form" :model="model" :rules="rules" :label-width="100" @submit.native.prevent="submitForm">
            <slot :model="model">请在此设计表单</slot>
            <div style="display: none">
                <button type="submit">用于使表单支持enter提交</button>
            </div>
        </Form>
        <div slot="footer">
            <Button type="ghost" @click="$refs.form.resetFields()">重置</Button>
            <Button type="primary" @click="submitForm">提交</Button>
        </div>
    </Modal>
</template>


<script>
    import Vue from 'vue'

    export default {
        name: "ModalForm",
        data: function () {
            return {
                show: false,
                enable: false,
                title: '请按照提示输入',
                model: {},
                rules: {},
                submitter: null
            };
        },
        methods: {
            showForm(options) {
                Object.assign(this, options);
                this.enable = true;
                Vue.nextTick(() => {
                    this.show = true;
                });
            },

            validate() {
                this.$refs.form.validate(valid => {
                    console.debug(`表单验证${valid ? '通过' : '不通过'}`);
                });
            },

            submitForm() {
                this.$refs.form.validate(valid => {
                    if (!valid || !this.submitter) return;
                    //将model交由调用者提交，此处负责处理返回结果

                    let $model = this.deleteProperties(
                        this.model, ['_index', '_rowKey']
                    );
                    this.submitter($model)
                        .then(result => {
                            this.show = false;
                            Vue.nextTick(() => {
                                this.enable = false;
                                this.$Notice.success({
                                    title: '提交成功'
                                });
                            });
                        })
                        .catch(error => {
                            this.$Notice.error({
                                title: '提交失败',
                                desc: error.message
                            });
                        });
                });
            },

            deleteProperties(source, props) {
                let target = Object.assign({}, source);
                let $props = Object.getOwnPropertyNames(target);
                props.forEach(prop => {
                    if ($props.some(p => p === prop)) {
                        delete target[prop];
                    }
                });
                return target;
            },
        }
    };
</script>
