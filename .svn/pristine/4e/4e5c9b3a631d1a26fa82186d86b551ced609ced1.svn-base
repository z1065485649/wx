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
    }
</style>

<template>
    <div class="content">
        <Form  ref="formLiveItem"  :model="formLiveItem" :rules="ruleValidate" :label-width="120">
            <FormItem label="直播主题:" prop="theme">
                <Input v-model="formLiveItem.theme" placeholder="请输入直播主题,不超过15字..." :maxlength="15" style="width:316px;"></Input>
            </FormItem>
            <FormItem label="主讲人:">
                <Input v-model="formLiveItem.keynote" placeholder="请输入主讲人,可多个以；分开" :maxlength="50" style="width:316px;"></Input>
            </FormItem>
            <FormItem label="绑定圈子:">
                <span  @dblclick="circleModel" style="border: 1px solid #dddee1;cursor: pointer;font-size:14px;margin-right: 1%">
                    <Tooltip content="双击删除" placement="top-start">绑定圈子</Tooltip>
                </span>
                <a @click="bindCircleEvent">选择</a>
               <!-- <Input v-model="formLiveItem.bindCircle"  :maxlength="50" style="width:316px;"></Input>-->
            </FormItem>
            <FormItem label="计费类型:">
                <RadioGroup v-model="formLiveItem.billingType" vertical>
                    <Radio label="1" style="margin-bottom: 3%;font-weight: normal">免费</Radio>
                    <Radio label="2" style="margin-bottom: 3%;font-weight: normal">
                        <span>圈子内免费,圈外收费
                        价格:<Input v-model="chargingPrice.circlePrice"  :maxlength="50" style="width:56px;"></Input>元/次，填大于0以上的数字</span>
                    </Radio>
                    <Radio label="3" style="font-weight: normal">所有人收费,
                        价格：<Input v-model="chargingPrice.userAllPrice"  :maxlength="50" style="width:56px;"></Input>元/次，填大于0以上的数字</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="用户限制:">
                <RadioGroup v-model="formLiveItem.userAstrict">
                    <Radio label="all">所有</Radio>
                    <Radio label="doctor">所有</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="直播封面:" prop="liveCover">
                    <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formLiveItem.liveCover]" @removeImage="removeImage" @newImage="newImage"/>
            </FormItem>
            <FormItem label="直播日期:" prop="liveDate">
                    <DatePicker type="date" placeholder="请选择直播日期" v-model="formLiveItem.liveDate"></DatePicker>
            </FormItem>
            <FormItem label="开始时间:" prop="createDate">
                <DatePicker type="date" placeholder="请选择开始时间" v-model="formLiveItem.createDate"></DatePicker>
            </FormItem>
            <FormItem label="结束时间:" prop="finishDate">
                <DatePicker type="date" placeholder="请选择开始时间" v-model="formLiveItem.finishDate"></DatePicker>
            </FormItem>
            <FormItem label="直播详情:" prop="liveDetails">
                <EditTheme :themeList="formLiveItem.liveDetails" @listTheme="listTheme"></EditTheme>
            </FormItem>
            <FormItem label="开启机器人:">
                <RadioGroup v-model="formLiveItem.robot">
                    <Radio label="1">是</Radio>
                    <Radio label="0">否</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="组织者口令:">
                <Input v-model="formLiveItem.organizerWord" placeholder="请输入组织者口令..." :maxlength="50" style="width:316px;"></Input>
            </FormItem>
            <FormItem label="嘉宾口令:">
                <Input v-model="formLiveItem.visitorWord" placeholder="请输入嘉宾口令..." :maxlength="50" style="width:316px;"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="saveSubmit()" style="margin-left:15%">保存</Button>
            </FormItem>
        </Form>
        <!-- 绑定圈子 -->
        <CircleModel v-model="CircleModel" :isModel="CircleModel"></CircleModel>
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
            const validLiveDetails = (rule, value, callback) => {
                let arry =this.formLiveItem.liveDetails;
                if(arry.length==0){
                    callback(new Error('直播详情请填写完完整!'));
                }else{
                    arry.forEach(x=>{
                        if(x.title.trim()==''){
                            callback(new Error('直播详情请填写完完整!'));
                            return;
                        }else if(x.content.trim()==''){
                            callback(new Error('直播详情请填写完完整!'));
                            return;
                        }
                    });
                    callback();
                }
            };
            return {
                CircleModel:false,//圈子model
                chargingPrice:{
                    free:0,
                    circlePrice:'',
                    userAllPrice:'',
                },
                formLiveItem:{
                    theme:'',
                    keynote:'',
                    bindCircle:'',
                    billingType:'1',
                    userAstrict:'all',
                    liveCover:'',
                    liveDate:'',
                    createDate:'',
                    finishDate:'',
                    liveDetails:[],
                    robot:'1',
                    organizerWord:'',
                    visitorWord:'',
                },
                ruleValidate:{
                    theme: [{ required: true,message: '直播主题不能为空!', trigger: 'blur',validator:util.validateEmptys}],
                    liveCover: [{ required: true,message: '直播封面不能为空!', trigger: 'newImage' }],
                    liveDate: [{ required: true,type: 'date',message: '直播日期不能为空', trigger: 'change' }],
                    createDate: [{ required: true,type: 'date',message: '开始时间不能为空', trigger: 'change' }],
                    finishDate: [{ required: true,type: 'date',message: '结束时间不能为空', trigger: 'change' }],
                    liveDetails: [{ required: true,trigger: 'blur',validator:validLiveDetails}],
                }
            }
        },
        created: function () {

        },
        methods: {
            removeImage(image) {
                console.log(`删除image ${image}`);
            },
            newImage(image) {
                this.formLiveItem.liveCover = image.url;
                $(".container .ivu-upload").parent().parent().find(".ivu-form-item-error-tip").hide();
            },
            summernoteCode(code){
                console.info(code)
            },
            listTheme(list){//详情回调
                this.formLiveItem.liveDetails=list;
            },
            bindCircleEvent(){//绑定圈子单击
                this.CircleModel=true;
            },
            circleModel(){//删除当前圈子

            },
            saveSubmit(){//保存
                this.$refs['formLiveItem'].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
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
