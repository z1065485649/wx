<template>
    <GenericForm :title="title" :model="user" :rules="rules" @submit="submit">
        <UserForm slot-scope="{model}" :model="model"></UserForm>
    </GenericForm>
</template>


<script>
    import UserForm from './UserForm'

    export default {
        name: 'EditUserPage',
        data: function () {
            return {
                user: {},
                rules: {},
                title: '修改用户资料',
            }
        },
        created() {
            let userId = this.$route.params.user_id;
            this.$http.get(`user/${userId}`)
                .then(result => {
                    this.user = result.data;
                });
        },
        methods: {
            submit(model) {
                console.log(model);
                let userId = this.$route.params.user_id;
                this.$http.put(`user/${userId}`, model)
                    .then(result => {
                        this.$router.go(-1);
                        this.$Notice.success({
                            title: '用户资料已更新成功'
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