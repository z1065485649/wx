<!-- 上传附件 -->
<style lang="less" scoped>
    .content {
        margin-left:5%;
    }
</style>

<template>
    <div class="content">
        <Row><Col>直播ID：XXXXXX</Col></Row><br/>
        <Row><Col>直播主题：预防肺癌大讲堂</Col></Row><br/>
        <Row>
            <Col span="2">上传附件：</Col>
        </Row>
        <br/>
        <Row>
            <Col push="1" span="12">
            <UploadFile name="上传附件" @uploadFile="uploadFile" @removeFile="removeFile" :formats="['PPT','PDF','jpg']" :showUploadList="true"
                        :fileList="fileList"
                        :multiple="true">
            </UploadFile>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col push="2" span="2">
                <Button type="primary" @click="success">&nbsp;&nbsp;提交&nbsp;&nbsp;</Button>
            </Col>
            <Col push="2" span="2">
                <Button type="primary" @click="balck">&nbsp;&nbsp;返回&nbsp;&nbsp;</Button>
            </Col>
        </Row>
        <br/>
    </div>
</template>
<script>
    import UploadFile from "@/components/UploadFile";
    export default{
        name: '',
        props: {},
        data: function () {
            return {
                fileList:[],
            }
        },
        created: function () {

        },
        methods: {
            uploadFile(obj){
                this.fileList.push(obj);
            },
            removeFile(file){
                this.fileList.forEach((x,index)=>{
                    if(x.url==file.url){
                        this.fileList.splice(index,1);
                        return;
                    }
                });
            },
            balck(){
                this.$router.push({name:'liveManage'})
            },
            success(){
                if(this.fileList.length!=0){
                    this.$Message.success("上传成功!");
                }else{
                    this.$Message.error("上传文件不能为空!");
                }
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
