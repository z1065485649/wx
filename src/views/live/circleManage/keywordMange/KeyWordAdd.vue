<!-- 新增关键字 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <Row>
                <Tabs value="1" @on-click="tabsClick">
                    <TabPane label="单个增加" name="1">
                        <div style="margin-left: 5%;margin-top:2%">
                        <Form ref="formKey" :model="formKey" :rules="rulesKey">
                            <FormItem label="关键字：" prop="name">
                                <Input type="text" v-model="formKey.name" placeholder="请输入关键字" :maxlength="50" style="width:200px"></Input>
                                &nbsp;&nbsp;
                                <Button type="primary" @click="addOne('formKey')">添加</Button>
                            </FormItem>
                        </Form>
                        </div>
                    </TabPane>
                    <TabPane label="批量导入" name="2">
                        <div style="margin-left: 5%;margin-top:2%">
                            <!--<Form ref="formKey" :model="formKey" :rules="rulesKey">
                                <FormItem label="关键字：" prop="name">-->
                                    <UploadFile
                                            name="导入关键字" @uploadFile="uploadFile($event)" :formats="['xls']"></UploadFile>
                                    &nbsp;&nbsp;
                             <!--   </FormItem>
                            </Form>-->
                        </div>
                    </TabPane>
                </Tabs>
        </Row>
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
                formKey:{
                    name:'',
                },
                rulesKey:{
                    name:[{required: true, message: '关键字不能为空!', trigger: 'blur',validator:util.validateEmptys}]
                },
            }
        },
        created: function () {

        },
        methods: {
            // this.$refs[name].resetFields();
            tabsClick(name){
                this.$refs['formKey'].resetFields();
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
            uploadFile(file){
                console.info(file)
                //console.info(obj)
                //$("#guo").append("<img src='"+file.url+"' />");
            },
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
