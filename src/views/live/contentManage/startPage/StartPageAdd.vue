<!-- 新增启动页 -->
<style lang="less" scoped>
    .content {

    }
</style>

<template>
    <div class="content">
        <div style="margin-left: 5%">
            <Form ref="formBanner" :model="formBanner" :rules="ruleBanner" :label-width="180">
                <FormItem label="标题：" prop="title">
                    <Input type="text" v-model="formBanner.title" :maxlength="50" style="width: 500px"></Input>
                </FormItem>
                <FormItem label="图标：" prop="mainPic">
                    <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formBanner.mainPic]" @removeImage="removeImage" @newImage="newImage"/>
                </FormItem>
                <FormItem label="排序号：" prop="sort">
                    <InputNumber :min="0" :max="999999" :step="1" v-model="formBanner.sort"></InputNumber>
                </FormItem>
                <FormItem label="类型：" prop="type">
                    <RadioGroup v-model="formBanner.type" @on-change="radioType">
                        <Radio label="0">网址</Radio>
                        <Radio label="1">图文</Radio>
                        <Radio label="2">APP页面</Radio>
                        <Radio label="3">无详情页</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="网址：" prop="url" v-if="formBanner.type==0">
                    <Input type="text" v-model="formBanner.url" :maxlength="50" style="width: 500px"></Input>
                </FormItem>
                <FormItem label="图文：" prop="url" v-else-if="formBanner.type==1">
                    <Summernote  v-if="formBanner.type==1" id="imgText" @summernoteCode="summernoteCode"></Summernote>
                </FormItem>
                <FormItem label="跳转页面类型：" prop="url" v-if="formBanner.type==2">
                    <Select v-model="formBanner.url" style="width: 500px">
                        <Option :value="x.id" v-for="(x,index) in bizList" :key="x.id">{{x.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formBanner',1)">保存</Button>&nbsp;&nbsp;
                    <Button type="primary" @click="handleSubmit('formBanner',2)">发布</Button>&nbsp;&nbsp;
                    <Button type="ghost" @click="handleReset('formBanner')" style="margin-left: 8px">返回</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import util from '@/libs/util'
    import Summernote from "@/components/Summernote";
    import UploadImage from "@/components/UploadImage";
    export default{
        name: '',
        props: {},
        data: function () {
            const validateUrl = (rule, value, callback) => {
                let type = this.formBanner.type;
                if(type==0){//网址
                    if(value.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'')==''){
                        callback(new Error('网址不能为空!'));
                    }
                }
                if(type==1){//图文
                    if(value.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'')==''||value=='<p><br></p>'){
                        callback(new Error('图文不能为空!'));
                    }
                }
                callback();
            };
            return {
                formBanner:{
                    title:'',
                    mainPic:'',
                    type:'0',
                    url:'',
                    sort:0,
                },
                ruleBanner:{
                    title:[{ required: true, message: '标题不能为空',trigger: 'blur',validator:util.validateEmptys}],
                    mainPic:[{ required: true, message: '图标不能为空',trigger: 'newImage',validator:util.validateEmptys}],
                    url:[{ required: true,trigger: 'blur',validator:validateUrl},{ required: true,message:'请选择跳转页面类型!',trigger: 'change'}],
                },
                bizList:[{id:'1',name:'医生认证页面'}]
            }
        },
        created: function () {

        },
        methods: {
            handleSubmit(from,type){
                this.$refs[from].validate((valid) => {
                    if (valid) {
                        if(type==1){//保存
                            this.$Message.success('保存Success!');
                        }else{//发布
                            this.$Message.success('发布Success!');
                        }
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(from){
                this.$router.push({path:'startPageList'})
            },
            removeImage(image) {
                console.log(`删除image ${image}`);
            },
            newImage(image) {
                this.formBanner.mainPic = image.url;
                this.$refs['formBanner'].validate();
                //$(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            summernoteCode(content){
                this.formBanner.url=content;
                console.info(content)
            },
            radioType(type){
                this.formBanner.url='';
                $(".note-editor").remove();
                this.$forceUpdate();
            }
        }
        ,
        computed: {},
        components: {
            UploadImage,Summernote
        }
        ,
        watch: {}
    }
</script>
