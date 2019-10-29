<!-- 新增分类 -->
<style lang="less" scoped>
    .content {
        margin-left:9%;
    }
</style>

<template>
    <div class="content">
        <Form ref="formType" :model="formType" :rules="rulesType" :label-width="180">
            <FormItem label="分类名称：" prop="name">
               <Input type="text" v-model="formType.name" placeholder="请输入关键字" :maxlength="50" style="width:300px"></Input>
            </FormItem>
            <FormItem label="分类描述：" prop="desc">
                <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="formType.desc" placeholder="请输入关键字" :maxlength="50" style="width:300px"></Input>
            </FormItem>
            <FormItem label="状态：" prop="status">
                <Select v-model="formType.status" style="width:300px">
                    <Option value="0">启用</Option>
                    <Option value="1">禁用</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formType')">保存</Button>
                <Button type="ghost" @click="handleReset('formType')" style="margin-left: 8px">返回</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import util from '@/libs/util'
    import UploadFile from "@/components/UploadFile";
    export default{
        name: '',
        props: {},
        data: function () {
            return {
                formType:{
                    name:'',
                    desc:'',
                    status:'0',
                },
                rulesType:{
                    name:[{required: true, message: '分类名称不能为空!', trigger: 'blur',validator:util.validateEmptys}],
                    desc:[{required: true, message: '分类描述不能为空!', trigger: 'blur',validator:util.validateEmptys}],
                    status:[{required: true, trigger: 'change',validator:util.validateEmptys}]
                },
            }
        },
        created: function () {

        },
        methods: {
            // this.$refs[name].resetFields();
            tabsClick(name){
                this.$refs['formType'].resetFields();
            },
            addOne(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleSubmit(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name){
                this.$router.push({path:'circleTypeList'})
            }
        }
        ,
        computed: {},
        components: {
            UploadFile
        }
        ,
        watch: {}
    }
</script>
