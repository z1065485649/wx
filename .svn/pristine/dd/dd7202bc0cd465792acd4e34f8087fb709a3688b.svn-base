<template>
    <GenericForm :title="title" :model="user" :rules="rules" @submit="submit">
        <UserForm slot-scope="{model}" :model="model"></UserForm>
    </GenericForm>
</template>


<script>
    import UserForm from './UserForm'

    export default {
        name: 'CreateUserPage',
        data: function () {
            return {
                user: {},
                rules: {},
                title: '添加用户',
            }
        },
        methods: {
            submit(model) {
                console.log(model);
                this.$http.post('user/create', model)
                    .then(result => {
                        this.$router.go(-1);
                        this.$Notice.success({
                            title: '添加用户成功'
                        });
                    })
                    .catch(error => {
                        this.$Notice.error({
                            title: '提交失败',
                            desc: error.message
                        });
                    });
            }
        },
        components: {
            UserForm
        }
    };
</script>