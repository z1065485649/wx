<template>

    <Card>
        <p slot="title">{{title}}</p>
        <Form ref="form" :model="model" :rules="rules" :label-width="100" @submit.native.prevent="submitEditForm">
            <slot :model="model">请在此设计表单</slot>
            <FormItem>
                <Button type="ghost" @click="$refs.form.resetFields()">重置</Button>
                <Button type="primary" html-type="submit">提交</Button>
            </FormItem>
        </Form>
    </Card>

</template>


<script>
    export default {
        name: "GenericForm",
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object,
                required: true
            },
            title: {
                type: String,
                default: "编辑页面"
            }
        },
        methods: {
            submitEditForm() {
                this.$refs.form.validate(valid => {
                    if (!valid) return;
                    this.$emit('submit', this.model);
                });
            }
        },
    };
</script>
