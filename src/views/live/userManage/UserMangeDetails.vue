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
        img{
            width: 200px;
            height: 200px;
            cursor: pointer;
        }
    }
</style>

<template>
    <div class="content">
        <Form ref="formCustom" :model="formCustom" :label-width="120">
            <Row class="title"><span>基本信息</span></Row>
            <Row>
                <Col span="6">
                     <FormItem label="头像" prop="avatar">
                        <img class="avatar" src="//www.baidu.com/img/bd_logo1.png" @click="handleView('//www.baidu.com/img/bd_logo1.png')">
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="昵称" prop="name">
                        <Input type="text"  disabled="disabled" v-model="formCustom.name" placeholder="昵称"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="手机号码" prop="phone">
                        <Input type="text"  disabled="disabled" v-model="formCustom.phone" placeholder="请输入手机号码"></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="性别" prop="sex">
                        <Select v-model="formCustom.sex" disabled="disabled">
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
                        <Input type="text"  disabled="disabled" v-model="formCustom.realName" placeholder="请输入真实姓名" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="职称" prop="positional">
                        <Input type="text"  disabled="disabled" v-model="formCustom.positional" placeholder="请输入职称" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="工作单位" prop="work">
                        <Input type="text"  disabled="disabled" v-model="formCustom.work" placeholder="请输入工作单位" style="width:316px;"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="科室" prop="departments">
                        <Input type="text"  disabled="disabled" v-model="formCustom.departments" placeholder="请输入科室" style="width:316px;"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="资质证书" prop="certificate">
                        <img src="//www.baidu.com/img/bd_logo1.png" @click="handleView('//www.baidu.com/img/bd_logo1.png')">
                    </FormItem>
                </Col>
            </Row>
            <Row class="title"><span>实名认证</span></Row>
            <Row>
                <FormItem label="证件号码" prop="idCard">
                    <Input type="text"  disabled="disabled" v-model="formCustom.idCard" placeholder="证件号码" style="width:316px;"></Input>
                </FormItem>
            </Row>
            <Row>
                <Col span="12">
                    <FormItem label="证件正面照片" prop="correct">
                        <img src="//www.baidu.com/img/bd_logo1.png" @click="handleView('//www.baidu.com/img/bd_logo1.png')">
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="证件反面照片" prop="opposite">
                        <img src="//www.baidu.com/img/bd_logo1.png" @click="handleView('//www.baidu.com/img/bd_logo1.png')">
                    </FormItem>
                </Col>
            </Row>
        </Form>
        <Modal title="View Image" v-model="visible">
            <img :src="currPhoto" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    import UploadImage from "@/components/UploadImage";
    import util from '@/libs/util'
    export default{
        name: '',
        props: {},
        data () {
            return {
                visible: false,
                currPhoto: '',
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
                }
            }
        },
        created: function () {
        },
        methods: {
            handleView (src) {
                this.currPhoto = src;
                this.visible = true;
            },
        },
        computed: {},
        components: {
            UploadImage
        }
        ,
        watch: {}
    }
</script>
