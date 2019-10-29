<!-- 新增直播 -->
<style lang="less" scoped>
    .content {
        margin-left: 10%;
        *{
            font-weight:normal;
        }
        .center-left{
            float: left;
        }
        .sub-btn{
            text-align: center;
        }
    }
</style>

<template>
    <div class="content">
        <Form  ref="formCircleItem"  :model="formCircleItem" :rules="ruleValidate" :label-width="120">
            <FormItem label="创建人:" prop="createUser">
                <Input v-model="formCircleItem.createUser" placeholder="" disabled="disabled" :maxlength="15" style="width:316px;"></Input>
                <a @click="selectCreate">选择</a>
            </FormItem>
            <FormItem label="圈子图像:" prop="circleCover">
                    <UploadImage :maxNum='1' :maxSize="1024" style="width:375px;heigth:222px;" purpose="useravatar" :images="[formCircleItem.circleCover]" @removeImage="removeImage" @newImage="newImage"/>
            </FormItem>
            <FormItem label="圈子名称:" prop="name">
                <Input v-model="formCircleItem.name" placeholder="10字以内" :maxlength="10" style="width:316px;"></Input>
            </FormItem>
            <FormItem label="圈子分类:" prop="type">
                <Select v-model="formCircleItem.type" style="width:316px;">
                    <Option v-for="item in circleTypes" :value="item" :key="item">{{item}}</Option>
                </Select>
                <a @click="typeEdit">分类管理</a>
            </FormItem>
            <FormItem label="圈子介绍" prop="textarea">
                <Input v-model="formCircleItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入圈子介绍"></Input>
            </FormItem>
            <FormItem label="圈子权限:" prop="root">
                <RadioGroup v-model="formCircleItem.root">
                    <Radio label="1">仅限医生用户</Radio>
                    <Radio label="0">仅限患者用户</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="圈子费用:" prop="pay">
                <RadioGroup v-model="formCircleItem.pay" vertical>
                    <Radio label="1" style="margin-bottom: 3%;font-weight: normal">免费</Radio>
                    <Radio label="2" style="margin-bottom: 3%;font-weight: normal">
                        <span>收费，按
                        <Input v-model="formCircleItem.payNumber"  :maxlength="5" style="width:56px;"></Input> 一年</span>
                    </Radio>
                </RadioGroup>
            </FormItem>
            <FormItem class="sub-btn">
                <Button type="primary" @click="saveSubmit()">提交</Button>
                <Button type="ghost" @click="back" style="margin-left: 8px">返回</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import UploadImage from "@/components/UploadImage";
    import EditTheme from "@/components/EditTheme";
    import util from '@/libs/util'
    import CircleModel from "@/views/live/liveManage/common/CircleModel";
    export default{
        name: '',
        props: {},
        data: function () {
            const validCirclePay = (rule, value, callback) => {
                if(value=='1'){
                    callback();
                }else{
                    if(this.formCircleItem.payNumber==''){
                        callback(new Error('请填写大于50到1000的整数'));
                    }else{
                        let count = parseFloat(this.formCircleItem.payNumber);
                        if(count%1 === 0){
                            if(count<=1000 && count >= 50){
                                callback();
                            }else{
                                callback(new Error('请填写大于50到1000的整数'));
                            }
                        }else{
                            callback(new Error('请填写大于50到1000的整数'));
                        }
                    }
                }
            };
            return {
                formCircleItem:{
                    createUser:'',
                    circleCover:'',
                    name:'',
                    type:'',
                    textarea:'',
                    root:'',
                    pay:'',
                    payNumber:''
                },
                ruleValidate:{
                    createUser: [{ required: true,message: '创建人不能为空!', trigger: 'change'}],
                    circleCover: [{ required: true,message: '圈子图像不能为空!', trigger: 'newImage' }],
                    name: [{ required: true,message: '圈子名称不能为空', trigger: 'blur' }],
                    type: [{ required: true,message: '圈子分类不能为空', trigger: 'blur' }],
                    textarea: [{ required: true,message: '圈子介绍不能为空', trigger: 'blur' }],
                    root: [{ required: true,message: '圈子权限不能为空',trigger: 'blur'}],
                    pay: [{ required: true,trigger: 'blur',validator:validCirclePay}],
                },
                circleTypes:['临床诊疗','学术会议','疑难病诊','科研课题','论文交流','其他']
            }
        },
        created: function () {
            if(this.$route.query.id){
            }
        },
        methods: {
            removeImage(image) {
                console.log(`删除image ${image}`);
            },
            newImage(image) {
                this.formCircleItem.liveCover = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            saveSubmit(){//保存
                this.$refs['formCircleItem'].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            selectCreate(){

            },
            back(){
                window.history.back();
            },
            typeEdit(){
                this.$router.push({name:'circleTypeList'})
            }
        },
        computed: {},
        components: {
            UploadImage,EditTheme,CircleModel
        }
        ,
        watch: {}
    }
</script>
