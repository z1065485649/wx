<!-- 简单封装 -->
<style scoped lang="less">
    .image-list {
        display: inline-block;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
        img {
            width: 100%;
            height: 100%;
        }
        .cover {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, .6);
            i {
                color: #fff;
                font-size: 20px;
                cursor: pointer;
                margin: 80px 2px;
            }
        }
        &:hover .cover {
            display: block;
        }
    }

</style>

<style lang="less">
    .preview-modal > div {
        z-index: 2000 !important;
    }
</style>
<template>
    <div class="container">
        <div class="image-list" v-for="item in list">
            <template v-if="item.status === 'finished'">
                <img :src="item.url" :title="item.id">
                <div class="cover">
                    <Icon type="ios-eye-outline" :size="36" @click.native="previewImage(item)" style="margin-right:20px;font-weight: bold;"></Icon>
                    <Icon type="ios-trash-outline" :size="36" @click.native="removeImage(item)" style="color:#ff3333;font-weight: bold;"></Icon>
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
        </div>
        <Upload v-show="list.length<maxNum"
                ref="uploader"
                :type="mode"
                :format="formats"
                :max-size="maxSize"
                :multiple="multiple"
                :data="uploadParams"
                :action="uploadApiUrl"
                :show-upload-list="false"
                :on-success="uploadSuccess"
                :before-upload="beforeUpload"
                :on-format-error="formatError"
                :on-exceeded-size="largeFileError"
                style="display: inline-block;width:200px;">
            <div style="width: 200px;height:200px;line-height:200px;">
                <Icon type="camera" size="35"></Icon>
            </div>
        </Upload>
        <Modal class="preview-modal" class-name="preview" title="预览" v-model="showPreviewModal" :width="800">
            <img :src="previewImageUrl" v-if="showPreviewModal" style="width: 100%">
        </Modal>
        <Spin size="large" fix v-if="loadingParams"></Spin>
    </div>

</template>

<script>

    export default {
        name: 'UploadImage',
        props: {
            //是否允许多选
            multiple: {
                type: Boolean,
                default: false
            },
            //最多上传100张，默认
            maxNum: {
                type: Number,
                default: 100
            },
            //上传大小kb,默认5M
            maxSize: {
                type: Number,
                default: 5002880
            },
            //上传方式
            mode: {
                type: String,
                default: "drag"
            },
            //上传图片类型
            formats: {
                type: Array,
                default() {
                    return ["jpg", "jpeg", "png"];
                }
            },
            //已有的图片列表
            images: {
                type: Array,
                default() {
                    return [];
                }
            },
            //图片用途
            purpose: {
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                list: [],
                uploadParams: {},
                uploadApiUrl: '',
                loadingParams: true,
                previewImageUrl: '',
                showPreviewModal: false,
            }
        },
        methods: {
            previewImage(image) {
                this.showPreviewModal = true;
                this.previewImageUrl = image.url;
            },
            removeImage(image) {
                this.list.splice(this.list.indexOf(image), 1);
                this.$emit("removeImage", {
                    url: image.url,
                    path: image.filepath
                });
            },
            uploadSuccess(response, file) {
                let data = response.data;
                let url = data.location + data.filepath;
                Object.assign(file, data, {url: url});
                this.$emit("newImage", {
                    url: url,
                    path: data.filepath
                });
            },
            formatError(file) {
                this.$Notice.error({
                    title: '无效文件',
                    desc: '文件 ' + file.name + ' 格式不正确，仅支持' + this.formats + '格式的图片。'
                });
            },
            largeFileError(file) {
                this.$Notice.error({
                    title: '无效文件',
                    desc: '文件 ' + file.name + ' 太大，不能超过' + (this.maxSize / 1024).toFixed() + "MB" + '。'
                });
            },
            beforeUpload() {
                if (this.list.length > this.maxNum) {
                    this.$Notice.error({
                        title: '最多只能上传"' + this.maxNum + '" 张图片'
                    });
                    return false;
                }
                return true;
            },
        },
        mounted() {
            this.list = this.$refs.uploader.fileList;
        },
        created() {//初始化获取上传地址
            this.loadingParams = true;
            this.$http
                .get('/api/getUploadParams', {
                    params: {purpose: this.purpose}
                })
                .then((result) => {//上传
                    let data = result.data;
                    this.uploadApiUrl = data.url;
                    Object.assign(this.uploadParams, {
                        policy: data.policy,
                        Signature: data.Signature
                    });
                    this.loadingParams = false;
                });
            this.images.forEach(image => {
                this.list.push({'status': 'finished', 'url': image});
            })
        },
    }
</script>
