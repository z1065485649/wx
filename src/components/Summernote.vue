<!-- -->
<style lang="less" scoped>
    @import "../../node_modules/font-awesome/css/font-awesome.css";
    @import "../../node_modules/summernote/dist/summernote.css";
    .content {

    }
</style>

<template>
    <div class="content" :id="id"></div>
</template>
<script>
    import util from '@/libs/util'
    import backup from '@/libs/backup'
    function loadjscssfile() {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", "../../static/css/bootstrap.css");
        fileref.setAttribute("id", "bootstrapcss");
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref);
    };
    function removejscssfile() {
        $("#bootstrapcss").remove();
        $(".note-popover").remove();
    }
    export default{
        name: '',
        props: {
            id:{
                type:String,
                default:'summernote',
            }
        },
        data: function () {
            return {
                uploadApi:{},
            }
        },
        created: function () {
            loadjscssfile();
            this.$http.get('/api/getUploadParams', {
                    params: {purpose:"editor"}
                })
                .then((result) => {//上传
                    let data = result.data;
                    this.uploadApiUrl = data;
                });
        },
        methods: {
            sendFile(files) {
                var _this=this;
                for (var i = 0; i < files.length; i++) {
                    var data = new FormData();
                    data.append("file", files[i]);
                    data.append("policy", this.uploadApiUrl.policy);
                    data.append("Signature", this.uploadApiUrl.Signature);
                    $.ajax({
                        data: data,
                        type: "POST",
                        url: this.uploadApiUrl.url,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (res) {
                            if (res) {
                                var result = eval("(" + res + ")");
                                $("#"+_this.id).summernote('insertImage', result.data.location + result.data.filepath, 'image name'); // the insertImage API
                            } else {
                                alert("上传图片失败！");
                            }
                        },
                        error: function () {
                            alert("上传图片失败！");
                        }
                    });
                }
            },
        }
        ,
        mounted(){
            var _this = this;
            $('#'+this.id).summernote({
                height: 200, // set editor height
                minHeight: null, // set minimum height of editor
                maxHeight: null, // set maximum height of editor
                focus: false,
                lang: 'zh-CN',
                toolbar: [
                    ['style', ['bold','italic','underline','clear']],
                    ['font', ['strikethrough']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['fullscreen', ['fullscreen']],
                    ['picture', ['picture']],
                    ['link', ['link']],
                    ['codeview', ['codeview']]
                ],
                callbacks: {
                    onImageUpload: function (files) {
                        _this.sendFile(files);
                        _this.$emit("summernoteCode",$('#'+_this.id).summernote('code'))
                    },
                    onBlur: function(e) {
                        _this.$emit("summernoteCode",$('#'+_this.id).summernote('code'))
                    },
                    onKeyup:function (e) {
                        _this.$emit("summernoteCode",$('#'+_this.id).summernote('code'))
                    },
                    onKeydown:function (e) {
                        _this.$emit("summernoteCode",$('#'+_this.id).summernote('code'))
                    },
                    onSubmit:function (e) {
                        _this.$emit("summernoteCode",$('#'+_this.id).summernote('code'))
                    }
                },
            });
            $(".note-editable").on('blur',function(){
                setTimeout(function(){
                    $(".note-popover").hide();
                },500)
            });
        } ,
        computed: {},
        components: {}
        ,
        destroyed: function () {
            removejscssfile("#bootstrapcss");
        },
        watch: {}
    }
</script>
