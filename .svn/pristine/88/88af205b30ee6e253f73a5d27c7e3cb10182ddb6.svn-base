<template>
    <SearchList ref="searchList" api="user/search" :model="search" :columns="columns">
        <div slot="actions">
            <Button type="success" @click="createNewUser">添加用户</Button>
        </div>
        <FormItem prop="phone" label="手机号码：">
            <Input type="text" v-model="search.phone" placeholder="请输入手机号码"/>
        </FormItem>
        <FormItem prop="name" label="用户名称：">
            <Input type="text" v-model="search.name" placeholder="请输入用户名称"/>
        </FormItem>
        <!-- <FormItem prop="createTimeRange" label="创建日期范围：" >
        <DatePicker type="datetimerange" placeholder="选择创建日期范围" format="yyyy-MM-dd HH:mm:ss" ></DatePicker>
        </FormItem> -->
        <FormItem prop="activated" label="状态">
            <i-switch v-model="search.activated" size="large">
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
            </i-switch>
        </FormItem>
    </SearchList>
</template>

<script>
    import qs from 'qs'
    import createColumns from "./createColumns";

    export default {
        name: "UserManager",
        data: function () {
            return {
                search: {
                    searchKey: "",
                    activated: true
                },
                columns: createColumns(
                    this.handleEditUser,
                    this.handleToggleActivate,
                    this.handleResetPassword
                ),
            };
        },
        methods: {

            createNewUser() {
                this.$router.push({
                    path: `user/create`
                });
            },

            handleEditUser(user) {
                this.$router.push({
                    path: `user/${user.id}`
                });
            },

            handleToggleActivate(user) {
                this.$http
                    .put(`user/${user.id}/${user.activated ? "deactivate" : "activate"}`)
                    .then(result => {
                        user.activated = !user.activated;
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '用户已被 ' + (user.activated ? '启用' : '禁用')
                        });
                    })
                    .catch(error => {
                        this.$Notice.error({
                            title: '操作失败',
                            desc: error.message
                        });
                    });
            },
            handleResetPassword(user) {
                let newPassword = '123456';
                this.$Modal.confirm({
                    title: '请输入新密码：',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                autofocus: true,
                                value: newPassword,
                                placeholder: '请输入新密码'
                            },
                            on: {
                                input: (value) => {
                                    newPassword = value;
                                }
                            }
                        })
                    },
                    onOk() {
                        this.$http
                            .put(`user/${user.id}/password`, newPassword, {
                                headers: {'Content-Type': 'application/json'}
                            })
                            .then(result => {
                                this.$Notice.success({
                                    title: '操作成功',
                                    desc: `用户 ${user.name} 的密码已被重置`
                                });
                            })
                            .catch(error => {
                                this.$Notice.error({
                                    title: '操作失败',
                                    desc: error.message
                                });
                            });
                    }
                })

            }
        }
    };
</script>

