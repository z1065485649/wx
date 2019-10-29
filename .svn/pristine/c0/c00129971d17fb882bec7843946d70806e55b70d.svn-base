<!--用户列表-->
<style lang="less" scoped>
@keyframes audioPlay
    {
    0%   {background-image: url('/static/image/r/group-11@3x.png');}
    50%  {background-image: url('/static/image/r/group-22@3x.png');}
    100%  {background-image: url('/static/image/r/group-33@3x.png');}
    }
    @keyframes ani-spin
    {
    0%   {transform: rotate(0);}
    50%  {transform: rotate(180deg);}
    100%  {transform: rotate(1turn);}
    }
    .content {
        .post-card{
            margin-top: 10px;
            display: flex;
            .post-avatar{
                position: relative;
                .icon{
                    position: absolute;
                    left: -10px;
                    top: -10px;
                    font-size: 30px;
                    color: red;
                }
                img{
                    width: 50px;
                    height: 50px;
                }
                flex: 0 0 1;
            }
            .post-content{
                flex: 1;
                .post-top{
                    display: flex;
                    .post-user-info{
                        padding-left: 1%;
                        flex: 1 1 auto;
                        .post-user-name{
                            line-height: 25px;
                        }
                        .post-time{
                            line-height: 25px;
                        }
                    }
                    .post-edit{
                        flex: 0 0 1;
                    }
                }
                .post-text{
                    .audio {
                        background-color: #888;
                        border-radius: 6px;
            padding: 7px 13px;
            max-width: ~'calc(100% - 200px)';
            min-width: 50px;
            position:relative;
            cursor:pointer;
            .audio-icon {
                display: inline-block;
                vertical-align: middle;
                width: 16px;
                height: 23px;
                background-size:16px 23px;
                background-repeat: no-repeat;
                background-image:url('/static/image/r/group-33@3x.png');
            }
            span{
                position: absolute;
                right: -77px;
                width: 55px;
                color: #888;
                cursor: default;
            }
        }

        .audio-playing{
            .audio-icon{
                animation: audioPlay 1.5s linear infinite;
            }
        }
                    padding-top: 20px;
                    .praise{
                        float: right;
                        font-size: 30px;
                    }
                    div{
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="content">
        <div class="post-card">
            <div class="post-avatar">
                <img src="http://www.bainuo.cn/images/ewm.png">
            </div>
            <div class="post-content">
                <div class="post-top">
                    <div class="post-user-info">
                        <div class="post-user-name">田一(嘉宾)</div>
                        <div class="post-time">2017-12-11 9:41</div>
                    </div>
                    <div class="post-edit">
                        <Button type="ghost" icon="arrow-up-a" @click="starPost">置顶</Button>
                        <Button type="ghost" icon="android-delete" @click="delPost">删除</Button>
                        <Button type="ghost" icon="star" @click="foucsPost">精华</Button>
                    </div>
                </div>
                <div class="post-text">
                    <div>为了减少大气污染和海外能源依赖，美国加快生物能源产业的发展步伐，《2005年能源税收政策法案》授权美国环保署全面实施可再生能源标准（Renewable Fuel Standard，RFS），要求每个汽油及柴油生产商和进口商向美国加快生物能源...为了减少大气污染和海外能源依赖，美国加快生物能源产业的发展步伐，《2005年能源税收政策法案》授权美国环保署全面实施可再生能源标准（Renewable Fuel Standard，RFS），要求每个汽油及柴油生产商和进口商向美国加快生物能源...</div>
                    <div><img src="http://www.bainuo.cn/images/icon_ewm.png"></div>
                </div>
            </div>
        </div>

        <div class="post-card">
            <div class="post-avatar">
                <Icon type="ios-star" class="icon"></Icon>
                <img src="http://www.bainuo.cn/images/ewm.png">
            </div>
            <div class="post-content">
                <div class="post-top">
                    <div class="post-user-info">
                        <div class="post-user-name">田一(嘉宾)</div>
                        <div class="post-time">2017-12-11 9:41</div>
                    </div>
                    <div class="post-edit">
                        <Button type="ghost" icon="arrow-up-a">置顶</Button>
                        <Button type="ghost" icon="android-delete">删除</Button>
                        <Button type="ghost" icon="star">精华</Button>
                    </div>
                </div>
                <div class="post-text">
                    <div>为了减少大气污染和海外能源依赖，美国加快生物能源产业的发展步伐，《2005年能源税收政策法案》授权美国环保署全面实施可再生能源标准（Renewable Fuel Standard，RFS），要求每个汽油及柴油生产商和进口商向美国加快生物能源...为了减少大气污染和海外能源依赖，美国加快生物能源产业的发展步伐，《2005年能源税收政策法案》授权美国环保署全面实施可再生能源标准（Renewable Fuel Standard，RFS），要求每个汽油及柴油生产商和进口商向美国加快生物能源...</div>
                    <div><img src="http://www.bainuo.cn/images/icon_ewm.png"></div>
                    <div class="audio" :style="{width:50 + 11*5+'px'}" @click.stop="audioPlay($event)">
                        <i class="audio-icon"></i>
                        <audio src="" preload="preload" @playing="audioPlaying($event,'121')" @pause="audioPause($event,'121')"></audio>
                        <span>11"</span>
                    </div>
                    <div class="praise"><Icon type="ios-checkmark"></Icon>1111</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import util from '@/libs/util'
    export default{
        name: 'userList',
        props: {},
        data: function () {
            return {
                timer:null,
            }
        },
        created: function () {

        },
        methods: {
            audioPlay(event){
                let audioDOM;
                if($(event.target).hasClass('audio')){
                    audioDOM = $(event.target).find('audio')[0];
                }else{
                    audioDOM = $(event.target).parent().find('audio')[0];
                }
                let $audioDOM = $(audioDOM);
                for(let i=0,j=$('audio').length;i<j;i++){
                    $('audio')[i].pause();
                }
                if(!audioDOM.readyState) return;
                let src = $audioDOM.attr("src");
                $audioDOM.attr("src","");
                $audioDOM.attr("src",src);
                audioDOM.play();
            },
            audioPlaying(event,length){
                $(event.target).parent().addClass("audio-playing");
                clearInterval(this.timer);
                this.timer = setInterval(()=>{
                    length -= 1;
                    $(event.target).next().html(this.audioTime(length))
                },1000)
            },
            audioPause(event,length){
                $(event.target).parent().removeClass("audio-playing");
                clearInterval(this.timer);
                $(event.target).next().html(this.audioTime(length));
            },
            audioTime(second){
                return (second >= 60)?(parseInt(second/60) + '\'' + (second%3).toString().replace(/^(\d)$/,'0$1') + '"'):(second + '"')
            },
            starPost(){
                this.$Modal.confirm({
                    title: '设为置顶',
                    content: '<p>提示：此动态将设为群公告，置顶在贴子最上方</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    },
                });
            },
            delPost(){
                this.$Modal.confirm({
                    title: '删除贴子',
                    content: '<p>提示：将删除此动态</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    },
                });
            },
            foucsPost(){
                this.$Modal.confirm({
                    title: '移入精选',
                    content: '<p>提示：此贴子移入精华区</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    },
                });
            }
                
            
        }
        ,
        computed: {},
        components: {}
        ,
        filters:{
            audioTime(second){
                return (second >= 60)?(parseInt(second/60) + '\'' + (second%3).toString().replace(/^(\d)$/,'0$1') + '"'):(second + '"')
            }
        },
        watch: {}
    }
</script>
