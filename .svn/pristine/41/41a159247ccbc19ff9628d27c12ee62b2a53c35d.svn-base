<!-- 新增直播 -->
<style lang="less" scoped>
    .content {
        .title{
            margin-bottom: 20px;
            span{
                padding: 5px 10px;
                border: 1px solid #495060;
            }
        }
        .avatar{
            border-radius: 50%;
        }
        .sub-btn{
            text-align: center;
        }
    }
</style>

<template>
    <div class="content">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="120">
            <Row class="title"><span>基本信息</span></Row>
            <Row>
                <Col span="6">
                    <FormItem label="头像" prop="avatar">
                        <UploadImage class="avatar" :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formCustom.avatar]" @removeImage="removeImage" @newImage="newImage_avatar"/>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="昵称" prop="name">
                        <Input type="text" v-model="formCustom.name" placeholder="昵称"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="手机号码" prop="phone">
                        <Input type="text" v-model="formCustom.phone" placeholder="请输入手机号码"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="性别" prop="sex">
                        <Select v-model="formCustom.sex">
                            <Option value="man">男</Option>
                            <Option value="woman">女</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row class="title"><span>医生认证</span></Row>
            <Row>
                <Col span="8">
                    <FormItem label="真实姓名" prop="realName">
                        <Input type="text" v-model="formCustom.realName" placeholder="请输入真实姓名" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="职称" prop="positional">
                        <Input type="text" v-model="formCustom.positional" placeholder="请输入职称" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="工作单位" prop="work">
                        <Input type="text" v-model="formCustom.work" placeholder="请输入工作单位" style="width:316px;"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="科室" prop="departments">
                        <Input type="text" v-model="formCustom.departments" placeholder="请输入科室" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="资质证书" prop="certificate">
                        <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formCustom.certificate]" @removeImage="removeImage" @newImage="newImage_certificate"/>
                    </FormItem>
                </Col>
            </Row>
            <Row class="title"><span>实名认证</span></Row>
            <Row>
                <FormItem label="证件号码" prop="idCard">
                    <Input type="text" v-model="formCustom.idCard" placeholder="证件号码" style="width:316px;"></Input>
                </FormItem>
            </Row>
            <Row>
                上传的图片大小在2M以内，支持文件格为jpg,gif,png,jpeg
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="证件正面照片" prop="correct">
                        <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formCustom.correct]" @removeImage="removeImage" @newImage="newImage_correct"/>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="证件反面照片" prop="opposite">
                        <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formCustom.opposite]" @removeImage="removeImage" @newImage="newImage_opposite"/>
                    </FormItem>
                </Col>
            </Row>
            <FormItem class="sub-btn">
                <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                <Button type="ghost" @click="back" style="margin-left: 8px">返回</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    let _this;
    import UploadImage from "@/components/UploadImage";
    import util from '@/libs/util'
    export default{
        name: '',
        props: {},
        data () {
            return {
                formCustom: {
                    avatar: '',
                    name: '',
                    phone: '',
                    sex: '',
                    realName: '',
                    positional: '',
                    work: '',
                    departments: '',
                    certificate: '',
                    idCard: '',
                    correct: '',
                    opposite: ''
                },
                ruleCustom: {
                    avatar: [
                        { required: true, message: '请上传头像', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请填写昵称', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请填写手机号', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别 ', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            _this = this;
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            removeImage(image) {
                console.log(`删除image ${image}`);
            },
            newImage_avatar(image) {
                this.formCustom.avatar = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            newImage_certificate(image){
                this.formCustom.certificate = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            newImage_correct(image){
                this.formCustom.correct = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            newImage_opposite(image){
                this.formCustom.opposite = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            back(){
                history.back();
            }
        },
        computed: {},
        components: {
            UploadImage
        }
        ,
        watch: {
            'formCustom.phone':{
                deep:true,
                handler:(val,oldval) => {
                    _this.$nextTick(()=>{
                        _this.formCustom.phone = val.replace(/[^0-9]/g, "");
                    })
                    
                }
            }
        }
    }
</script>
