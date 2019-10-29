<!-- 新增课程-->
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
            <FormItem label="课程名称:" prop="name">
                <Input v-model="formLiveItem.name" placeholder="请输入直播主题,不超过15字..." :maxlength="15" style="width:316px;"></Input>
            </FormItem>
            <FormItem label="绑定圈子:" prop="bindCircle">
                <span  @dblclick="circleModel" style="border: 1px solid #dddee1;cursor: pointer;font-size:14px;margin-right: 1%">
                    <Tooltip content="双击删除" placement="top-start">绑定圈子</Tooltip>
                </span>
                <a @click="bindCircleEvent">选择</a>
                <!-- <Input v-model="formLiveItem.bindCircle"  :maxlength="50" style="width:316px;"></Input>-->
            </FormItem>
            <FormItem label="课程介绍:" prop="introduce">
                <EditTheme :themeList="formLiveItem.introduce" @listTheme="listTheme"></EditTheme>
            </FormItem>
            <FormItem label="课程标签:" prop="label">
                <TagsInput :source="formLiveItem.label" @tagsList="tagsList"></TagsInput>
            </FormItem>
            <FormItem label="位置排序:" prop="sort">
                    <input class="ivu-input"  v-model="formLiveItem.sort"  :maxlength="50" style="width:170px;"  onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"
                           @blur="blurValidate"
                           onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"></input>
            </FormItem>
            <FormItem label="" prop="pSort">
                <div>
                    <Checkbox v-model="formLiveItem.isIndex">设置为首页</Checkbox>
                    排序位置&nbsp;<input class="ivu-input"  v-model="formLiveItem.pSort" :maxlength="50" size="small" style="width:50px;height:26px"  onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"
                                      @blur="blurValidate"
                                     onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"></input>
                </div>
            </FormItem>
            <FormItem label="系列课海报:" prop="liveCover">
                <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[formLiveItem.liveCover]" @removeImage="removeImage" @newImage="newImage"/>
            </FormItem>
            <FormItem label="收费类型：">
                <Select v-model="formLiveItem.tollType" style="width: 316px" @on-change="tollSelect">
                    <Option value="0">免费</Option>
                    <Option value="1">固定收费</Option>
                </Select>
            </FormItem>
            <FormItem label="价格（元）:" prop="price" v-show="formLiveItem.tollType!=0">
                    <Input v-model="formLiveItem.price"  style="width:170px;"></Input>
            </FormItem>

            <FormItem label="用户限制:" v-if="formLiveItem.tollType!=0">
                <RadioGroup v-model="formLiveItem.userAstrict">
                    <Radio label="all">所有</Radio>
                    <Radio label="doctor">医生</Radio>
                </RadioGroup>
            </FormItem>

            <FormItem label="连载:" v-if="formLiveItem.tollType!=0">
                <RadioGroup v-model="formLiveItem.serialize">
                    <Radio label="1">是</Radio>
                    <Radio label="0">否</Radio>
                </RadioGroup>
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
    import TagsInput from "@/components/TagsInput";
    export default{
        name: '',
        props: {},
        data: function () {
            const validLiveDetails = (rule, value, callback) => {
                let arry =this.formLiveItem.introduce;
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
            const validateBindCircle = (rule, value, callback) => {
                let arry =this.formLiveItem.bindCircle;
                if(arry.length==0){
                    callback(new Error('请选择绑定圈子!'));
                }else{
                    callback();
                }
            };
            const validatorSort=(rule, value, callback) => {
                if(this.formLiveItem.sort==''){
                    callback(new Error('位置排序不能为空!'));
                }
                callback();
            };
            const validatorPsort=(rule, value, callback) => {
                let index = this.formLiveItem.isIndex;
                if(index){
                    if(this.formLiveItem.pSort==''){
                        callback(new Error('排序位置不能为空!'));
                    }
                }
                callback();
            };
            const validPrice=(rule, value, callback) => {
                let toll =this.formLiveItem.tollType;
                if(toll!=0){
                     if(this.formLiveItem.price==''){
                         callback(new Error('价格不能为空!'));
                     }else if(this.formLiveItem.price!=''){
                         let price=this.formLiveItem.price;
                         let str =price.split('.');
                         let fix_amountTest=/^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
                         if(str[1] != undefined ? str[1].length>2 : ''||price<1){
                             callback(new Error('价格输入错误，请重新输入!'));
                         }
                         if(!fix_amountTest.test(price)){
                             callback('价格输入错误，请重新输入!');
                         }
                     }
                    callback();
                }else{
                    callback();
                }
            };
            return {
                CircleModel:false,//圈子model
                formLiveItem:{
                    name:'',
                    bindCircle:[],
                    userAstrict:'all',
                    liveCover:'',
                    tollType:'0',
                    introduce:[],
                    sort:'',
                    price:'',
                    isIndex:'',
                    pSort:'',
                    label:[],
                    serialize:'1',
                },
                ruleValidate:{
                    name: [{ required: true,message: '课程名称不能为空!', trigger: 'blur',validator:util.validateEmptys}],
                    price:[{ required: true,trigger:'blur',validator:validPrice}],
                    sort:[{ required: true,trigger:'blur',validator:validatorSort}],
                    pSort:[{ required: true,trigger:'blur',validator:validatorPsort}],
                    bindCircle: [{ required: true, trigger: 'blur',validator:validateBindCircle}],
                    liveCover: [{ required: true,message: '直播封面不能为空!', trigger: 'newImage' }],
                    introduce: [{ required: true,trigger: 'blur',validator:validLiveDetails}],
                }
            }
        },
        created: function () {

        },
        methods: {
            blurValidate(){
                this.$refs['formLiveItem'].validate();
            },
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
                this.formLiveItem.introduce=list;
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
            },
            tollSelect(val){
                console.info(val);
            },
            tagsList(list){
                this.formLiveItem.label=list;
                console.info(list)
            }
        }
        ,
        computed: {},
        components: {
            UploadImage,EditTheme,CircleModel,TagsInput
        }
        ,
        watch: {}
    }
</script>
