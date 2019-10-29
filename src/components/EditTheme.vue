<!--主题编辑器 -->
<style lang="less" scoped>
    .editTheme {
        width:586px;
        margin-bottom:1%;
        border: 1px solid #dddee1;
    }
</style>
<style>
    .guoImg{
        width:320px;
        margin: 14px;
    }
</style>
<template>
    <div class="editThemeClass">
        <div  class="editTheme" v-for="(it,index) in item" :key="it.id">
        <Row  style="margin:2% 2% 2% 2%;">
            <Col>
                <Row>
                    <Col span="15">
                        <Input v-model="it.title" placeholder="请输入主题" :maxlength="50" style="width:316px;margin-bottom:1%"></Input>
                    </Col>
                    <Col span="9" align="right" v-if="index!=0">
                        <Button type="dashed" @click="deleTheme(index)">删除</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span="15">
                        <div :id="'guo'+index" v-html="it.content" @keydown="deyDownContent($event,it)" style="width:350px; height:auto;min-height:150px;border:1px solid #e4e5e7;line-height: 1.5;"  contenteditable="true">

                        </div>
                        <!--<Input v-model="it.content" type="textarea"  :maxlength="500" :rows="6" placeholder="请输入内容..." style="width:316px;"  contenteditable="true"></Input>-->
                    </Col>
                    <Col span="4" push="1">
                     <UploadFile  @uploadFile="uploadFile($event,it,index)"></UploadFile>
                    </Col>
                </Row>
                <Row v-if="it.image">
                    <Col span="15">
                        <img :src="it.image" @click="showImg(it)" style="width:316px;margin-top:1%;cursor: pointer"></img>
                    </Col>
                    <Col span="3">
                        <Button type="dashed" @click="deleImg(it)">删除图片</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        <Row>
            <Col span="11" align="right">
                 <Button type="dashed" @click="addTheme()">添加</Button>
            </Col>
        </Row>
        <Modal v-show="showThemeModal" class="uploadFile-modal" class-name="uploadFileTheme" title="预览" v-model="showThemeModal">
            <img :src="showImageUrl" v-if="showThemeModal" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    import UploadFile from "@/components/UploadFile";
    export default{
        name: '',
        props: {
            themeList:{
                type:Array,
                default:function(){
                    return [{
                        id:'1',
                        title:'',
                        content:'aaaa',
                        text:'',
                        url:'',
                        image:'',
                    }];
                }
            }
        },
        data: function () {
            return {
                showThemeModal:false,
                showImageUrl:'',
                item:[{
                    id:'',
                    title:'',
                    content:'aaaa',
                    text:'',
                    url:'',
                    image:'',
                }]
            }
        },
        created: function () {

        },
        methods: {
            uploadFile(file,obj,index){
                let imgSrc="<img class='guoImg' src='"+file.url+"' />";
                $("#guo"+index).append(imgSrc);
                this.item[index].text = $("#guo"+index).html();
                console.info(this.item[index].text)
            },
            showImg(obj){
                this.showThemeModal=true;
                this.showImageUrl=obj.image;
            },
            deleImg(obj){
                obj.image='';
                obj.url='';
            },
            deleTheme(index){
                this.item.splice(index, 1);
            },
            addTheme(){
                this.item.push({id:new Date().getTime(),title:'',content:'',text:'',url:'',image:''});
            },
            deyDownContent(obj,ev){
                ev.text=$(obj.srcElement).html();
                console.info($(obj.srcElement).html(),ev)
            }
        }
        ,
        computed: {},
        components: {
            UploadFile
        }
        ,
        watch: {
            themeList:function(){
                this.item=this.themeList;
            },
            item:{
                deep: true,
                handler: function (list) {
                    this.$emit("listTheme",list)
                },
            }
        }
    }
</script>
