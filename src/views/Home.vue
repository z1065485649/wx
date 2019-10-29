<!-- 主页 -->


<template>
    <div class="content">
        <Row>
            <i-col class="left_list" span="6">
                <Tabs class="left_list_tab" type="card">
                    <Tab-pane label="会话">
                        <i-input icon="ios-search" size="large" placeholder="昵称/备注搜索" style="width:92%;margin-left:3%"></i-input>
                        <Row class="row_ql">
                            <i-col class="col_ql" span="4" push="1">
                                <img src="../../static/image/group_newmsg_nor.png" style="width: 20px;"/>
                            </i-col>
                            <i-col class="col_ql" span="4">
                                <span>群聊</span>
                            </i-col>
                            <i-col class="col_ql" span="12">
                                <Icon type="chevron-right"></Icon>
                            </i-col>
                            <i-col class="col_ql" span="4">
                                <img  src="../../static/image/star-green.png" style="width: 20px;margin-top:6px;">
                            </i-col>
                        </Row>
                        <Row class-name="row_lxr" >
                            <i-col class="col_lxr" style=""
                                   span="8">
                               <div class="active_lxr" style="margin-left: -20px;">
                                   <span>最近联系人</span>
                                   <Icon type="refresh" color=""></Icon>
                               </div>
                            </i-col>
                            <i-col span="10" push="4" style="cursor: pointer">
                                <span>星标朋友</span>
                            </i-col>
                        </Row>
                        <ul class="indexsection-friends-ul list index-sec-noread-wrap hhlist">
                            <li onclick="chat('wxid_i3grwzjeerml12','wxid_65p2kkcska5g22')" class="isshow wxid_i3grwzjeerml12 wxid_i3grwzjeerml12____wxid_65p2kkcska5g22 active" style="color: rgba(0, 0, 0, 0.65); display: list-item;">
                                <img  src="http://wx.qlogo.cn/mmhead/ver_1/lQfAliczdjNyZeeoaxCY8R9bOS1KKibWsOTd2CGORuI4GFXEm1A2o1Jia8ghrBCO7TUbhzw8w9LBRxVXWKlVg9sFTkrZAVfOug3FWreDfmLprg/132" class="sec-img sec-l">
                                <i data-v-5a6641cd="" class="icon-num" style="display: inline;margin-left:-4px;" >0</i>
                                <div class="sec-r">
                                    <div class="top">
                                        <span class="name">故人以北</span>
                                        <span class="time">11:25</span>
                                    </div>
                                    <div class="bot">1</div>
                                </div>
                            </li>
                            <li class="isshow wxid_i3grwzjeerml12 wxid_i3grwzjeerml12____wxid_aewht6jqcti111" style="color: rgba(0, 0, 0, 0.65); display: list-item;"><img data-username="wxid_is6je69fmufm22" src="http://wx.qlogo.cn/mmhead/ver_1/ljNNE12RUXPcITI0k8mehu8teZ8fGuIHOzlSX1eGqM1mW5XSj2oGfsFjIG8u8NhhHDibxgwmB2ApmCa2SWn7JDLfTcTPESOwuOs1dQibqAwxI/132" class="sec-img sec-l"><i class="icon-num" style="display: none;">undefined</i>           <div class="sec-r">              <div class="top"><span class="name">Litt</span><span class="time">昨天</span></div>             <div class="bot">                30秒              </div>            </div>          </li>
                        </ul>
                    </Tab-pane>
                    <!-- tab -->
                    <Tab-pane label="通讯录">
                        <div style="margin-top: -13px;">
                            <div class="index-sec-allfri-tab-wrap">
                                <div class="item active"><span>好友</span></div>
                                <div class="item"><span>群聊</span></div>
                                <div class="item"><span>新的朋友</span></div>
                            </div>
                            <i-input icon="ios-search" size="large" placeholder="昵称/备注搜索" style="width:92%;margin-left:3%;margin-top: 10px;"></i-input>
                            <!-- 好友总数 -->
                            <div class="indexsection-friends-div index-sec-noread-scroll">
                                <div class="index-sec-allfri-total">
                                    <div>好友总数（21）</div>
                                </div>
                                <div class="friendlist-div show-alert-icon-f">
                                    <ul id="friends-list" class="indexsection-friends-ul list">
                                        <div class="">
                                        <li style="color: rgb(102, 102, 102);height:22px;">G</li>
                                        <li class="list_why active"  @mouseenter="mouseenter" @mouseleave="mouseleave">
                                            <img onerror="this.src='http://www.lanmaopay.com/Public/moren.png'" data-username="wxid_65p2kkcska5g22" data-uin="3432" src="http://wx.qlogo.cn/mmhead/ver_1/lQfAliczdjNyZeeoaxCY8R9bOS1KKibWsOTd2CGORuI4GFXEm1A2o1Jia8ghrBCO7TUbhzw8w9LBRxVXWKlVg9sFTkrZAVfOug3FWreDfmLprg/132" class="sec-img">
                                            <span class="list_hy">故人以北</span>
                                            <span class="active_t" v-show="like">
                                                <img class="newmsg-alert" src="../../static/image/star-green.png" alt="" style="right: 30px;">
                                                <img class="newmsg-alert" src="../../static/image/msg_nor.png" style="">
                                            </span>
                                        </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab-pane>
                </Tabs>
            </i-col>
            <!-- 聊天窗口 -->
            <i-col class="center_list" span="16">
                <div class="index-contact cover">
                    <Row>
                        <div class="contact-h">
                            <img src="http://wx.qlogo.cn/mmhead/ver_1/lQfAliczdjNyZeeoaxCY8R9bOS1KKibWsOTd2CGORuI4GFXEm1A2o1Jia8ghrBCO7TUbhzw8w9LBRxVXWKlVg9sFTkrZAVfOug3FWreDfmLprg/132"
                                 class="sec-img" style="margin-left: 15px;width: 36px;height: 36px;margin-bottom: 5px;">
                            <h3 class="contact-name">
                                <span style="margin-right: 5px; margin-top:8px;display: inline-block;
                                 width: 490px; min-width: 120px; white-space: pre;
                                 text-overflow: ellipsis; overflow: hidden;font-weight: normal">
                                    <Icon type="edit"></Icon>
                                    <span>(故人以北)</span>
                                </span>
                            </h3>
                         <div>
                         </div>
                        </div>
                        <div class="contact-con" id="showContactDiv" style="height: 653px;">
                            <div style="position: relative; height: 100%;border-left: 1px solid #eee">
                                <ul class="reply-log">
                                    <li style="text-align: right; padding: 5px 0px; cursor: pointer; overflow: hidden;" class="getmore">
                                        <span style="float: right; color: rgb(242, 166, 34);" onclick="getmoremsg('wxid_i3grwzjeerml12','wxid_65p2kkcska5g22');">查看更多...</span>
                                    </li>
                                    <li class="indexReplyLogItemClass" style="position: relative;" msgid="26534">
                                        <div style="text-align: right; margin-bottom: 10px;">
                                            <div class="people">
                                                <em class="time">昨天</em>
                                                林月如
                                            </div>
                                            <pre class="msg showContact-Span" onclick="javascript:void(0);" style="">
                                                <img src="../../static/image/arclist/14.png">
                                                <span class="arrow-right"></span>
                                            </pre>
                                            <img src="http://wx.qlogo.cn/mmhead/ver_1/4Le8DibZXMyh1t95DOdfj4IKSGIqYBbkUnoHn1TTPnvtPUQlAKKWyGLy8dUlJIpu9ACQOOdiaEGQKfd5lBfJzwUAAKficRDUiawmEFk9F4MoiaoY/0" class="wximg">
                                        </div>
                                    </li>
                                    <li class="indexReplyLogItemClass" style="position: relative;" msgid="26535">
                                        <div style="text-align: left; margin-bottom: 10px;">
                                            <div class="people">
                                                <em class="time">昨天</em>
                                                <span>故人以北</span>
                                            </div>
                                            <img src="http://wx.qlogo.cn/mmhead/ver_1/lQfAliczdjNyZeeoaxCY8R9bOS1KKibWsOTd2CGORuI4GFXEm1A2o1Jia8ghrBCO7TUbhzw8w9LBRxVXWKlVg9sFTkrZAVfOug3FWreDfmLprg/132" class="wximgLeft">
                                            <pre class="msg showContact-leftSpan" onclick="javascript:void(0);" style="">
                                                <img src="../../static/image/arclist/21.png">
                                                <span class="arrow-left">
                                                </span>
                                            </pre>
                                        </div>
                                    </li>
                                    <li class="indexReplyLogItemClass" style="position: relative;" msgid="26538">
                                        <div style="text-align: left; margin-bottom: 10px;">
                                            <div class="people">
                                                <em class="time">昨天</em>
                                                <span>故人以北</span>
                                            </div>
                                            <img src="http://wx.qlogo.cn/mmhead/ver_1/lQfAliczdjNyZeeoaxCY8R9bOS1KKibWsOTd2CGORuI4GFXEm1A2o1Jia8ghrBCO7TUbhzw8w9LBRxVXWKlVg9sFTkrZAVfOug3FWreDfmLprg/132" class="wximgLeft">
                                            <pre class="msg showContact-leftSpan" onclick="javascript:void(0);" style="">
                                                在<span class="arrow-left"></span>
                                            </pre>
                                        </div>
                                    </li>
                                    <li class="indexReplyLogItemClass" style="position: relative;" msgid="26534">
                                        <div style="text-align: right; margin-bottom: 10px;">
                                            <div class="people">
                                                <em class="time">昨天</em>
                                                林月如
                                            </div>
                                            <pre class="msg showContact-Span" onclick="javascript:void(0);" style="">
                                                <img src="../../static/image/arclist/14.png">
                                                <span class="arrow-right"></span>
                                            </pre>
                                            <img src="http://wx.qlogo.cn/mmhead/ver_1/4Le8DibZXMyh1t95DOdfj4IKSGIqYBbkUnoHn1TTPnvtPUQlAKKWyGLy8dUlJIpu9ACQOOdiaEGQKfd5lBfJzwUAAKficRDUiawmEFk9F4MoiaoY/0" class="wximg">
                                        </div>
                                    </li>
                                    </ul>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div class="contact-send" id="contact-send" style="border-top: 0px; height: 290.5px;">
                            <div class="contact-send-tools"><span class="span1 show-qqface" style="font-size: 24px;" onclick="$('.qqFace').is(':visible')?$('.qqFace').hide():$('.qqFace').show().focus();">
                                <img class="show-qqface" src="../../static/image/expression.png" alt="" style="width: 20px; height: 20px; position: relative; top: -4px;"></span>
                                <span class="span1"><img src="../../static/image/folder.png"
                                                         onclick="$('.contact-imglist').is(':visible')?$('.contact-imglist').hide():$('.contact-imglist').show().focus();" style="font-size: 0px; width: 20px; height: 18px; position: relative; top: -4px;">
                                </span>
                                <div class="qqFace" style="top: -268px; display: none;" tabindex="999991" onblur="$('.qqFace').hide()">
                                    <div class="qqface-title"><span class="item active">qq表情</span></div>
                                    <ul class="qq" style="display: block;">
                                        <li data-li="0">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[微笑]" src="../../static/image/arclist/1.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[撇嘴]" src="../../static/image/arclist/2.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[色]" src="../../static/image/arclist/3.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[发呆]" src="../../static/image/arclist/4.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[得意]" src="../../static/image/arclist/5.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[流泪]" src="../../static/image/arclist/6.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[害羞]" src="../../static/image/arclist/7.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[闭嘴]" src="../../static/image/arclist/8.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[睡]" src="../../static/image/arclist/9.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[大哭]" src="../../static/image/arclist/10.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[尴尬]" src="../../static/image/arclist/11.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[发怒]" src="../../static/image/arclist/12.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[调皮]" src="../../static/image/arclist/13.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[呲牙]" src="../../static/image/arclist/14.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[惊讶]" src="../../static/image/arclist/15.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="1">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[难过]" src="../../static/image/arclist/16.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[酷]" src="../../static/image/arclist/17.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[冷汗]" src="../../static/image/arclist/18.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[抓狂]" src="../../static/image/arclist/19.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[吐]" src="../../static/image/arclist/20.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[偷笑]" src="../../static/image/arclist/21.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[愉快]" src="../../static/image/arclist/22.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[白眼]" src="../../static/image/arclist/23.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[傲慢]" src="../../static/image/arclist/24.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[饥饿]" src="../../static/image/arclist/25.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[困]" src="../../static/image/arclist/26.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[惊恐]" src="../../static/image/arclist/27.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[流汗]" src="../../static/image/arclist/28.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[憨笑]" src="../../static/image/arclist/29.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[悠闲]" src="../../static/image/arclist/30.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="2">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[奋斗]" src="../../static/image/arclist/31.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[咒骂]" src="../../static/image/arclist/32.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[疑问]" src="../../static/image/arclist/33.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[嘘]" src="../../static/image/arclist/34.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[晕]" src="../../static/image/arclist/35.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[疯了]" src="../../static/image/arclist/36.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[衰]" src="../../static/image/arclist/37.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[骷髅]" src="../../static/image/arclist/38.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[敲打]" src="../../static/image/arclist/39.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[再见]" src="../../static/image/arclist/40.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[擦汗]" src="../../static/image/arclist/41.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[抠鼻]" src="../../static/image/arclist/42.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[鼓掌]" src="../../static/image/arclist/43.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[糗大了]" src="../../static/image/arclist/44.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[坏笑]" src="../../static/image/arclist/45.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="3">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[左哼哼]" src="../../static/image/arclist/46.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[右哼哼]" src="../../static/image/arclist/47.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[哈欠]" src="../../static/image/arclist/48.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[鄙视]" src="../../static/image/arclist/49.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[委屈]" src="../../static/image/arclist/50.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[快哭了]" src="../../static/image/arclist/51.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[阴险]" src="../../static/image/arclist/52.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[亲亲]" src="../../static/image/arclist/53.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[吓]" src="../../static/image/arclist/54.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[可怜]" src="../../static/image/arclist/55.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[菜刀]" src="../../static/image/arclist/56.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[西瓜]" src="../../static/image/arclist/57.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[啤酒]" src="../../static/image/arclist/58.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[篮球]" src="../../static/image/arclist/59.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[乒乓]" src="../../static/image/arclist/60.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="4">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[咖啡]" src="../../static/image/arclist/61.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[饭]" src="../../static/image/arclist/62.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[猪头]" src="../../static/image/arclist/63.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[玫瑰]" src="../../static/image/arclist/64.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[凋谢]" src="../../static/image/arclist/65.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[嘴唇]" src="../../static/image/arclist/66.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[爱心]" src="../../static/image/arclist/67.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[心碎]" src="../../static/image/arclist/68.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[蛋糕]" src="../../static/image/arclist/69.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[闪电]" src="../../static/image/arclist/70.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[炸弹]" src="../../static/image/arclist/71.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[刀]" src="../../static/image/arclist/72.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[足球]" src="../../static/image/arclist/73.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[瓢虫]" src="../../static/image/arclist/74.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[便便]" src="../../static/image/arclist/75.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="5">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[月亮]" src="../../static/image/arclist/76.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[太阳]" src="../../static/image/arclist/77.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[礼物]" src="../../static/image/arclist/78.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[拥抱]" src="../../static/image/arclist/79.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[强]" src="../../static/image/arclist/80.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[弱]" src="../../static/image/arclist/81.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[握手]" src="../../static/image/arclist/82.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[胜利]" src="../../static/image/arclist/83.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[抱拳]" src="../../static/image/arclist/84.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[勾引]" src="../../static/image/arclist/85.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[拳头]" src="../../static/image/arclist/86.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[差劲]" src="../../static/image/arclist/87.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[爱你]" src="../../static/image/arclist/88.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[NO]" src="../../static/image/arclist/89.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[OK]" src="../../static/image/arclist/90.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="6">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[爱情]" src="../../static/image/arclist/91.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[飞吻]" src="../../static/image/arclist/92.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[跳跳]" src="../../static/image/arclist/93.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[发抖]" src="../../static/image/arclist/94.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[怄火]" src="../../static/image/arclist/95.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[转圈]" src="../../static/image/arclist/96.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[磕头]" src="../../static/image/arclist/97.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[回头]" src="../../static/image/arclist/98.png"></li>
                                                <li data-col="8" style="float: left;"><img class="qqImg" data-mean="[跳绳]" src="../../static/image/arclist/99.png"></li>
                                                <li data-col="9" style="float: left;"><img class="qqImg" data-mean="[投降]" src="../../static/image/arclist/100.png"></li>
                                                <li data-col="10" style="float: left;"><img class="qqImg" data-mean="[激动]" src="../../static/image/arclist/101.png"></li>
                                                <li data-col="11" style="float: left;"><img class="qqImg" data-mean="[乱舞]" src="../../static/image/arclist/102.png"></li>
                                                <li data-col="12" style="float: left;"><img class="qqImg" data-mean="[献吻]" src="../../static/image/arclist/103.png"></li>
                                                <li data-col="13" style="float: left;"><img class="qqImg" data-mean="[左太极]" src="../../static/image/arclist/104.png"></li>
                                                <li data-col="14" style="float: left;"><img class="qqImg" data-mean="[右太极]" src="../../static/image/arclist/105.png"></li>
                                            </ul>
                                        </li>
                                        <li data-li="7" style="display: none;">
                                            <ul>
                                                <li data-col="0" style="float: left;"><img class="qqImg" data-mean="[嘿哈]" src="../../static/image/arclist/106.png"></li>
                                                <li data-col="1" style="float: left;"><img class="qqImg" data-mean="[捂脸]" src="../../static/image/arclist/107.png"></li>
                                                <li data-col="2" style="float: left;"><img class="qqImg" data-mean="[奸笑]" src="../../static/image/arclist/108.png"></li>
                                                <li data-col="3" style="float: left;"><img class="qqImg" data-mean="[机智]" src="../../static/image/arclist/109.png"></li>
                                                <li data-col="4" style="float: left;"><img class="qqImg" data-mean="[皱眉]" src="../../static/image/arclist/110.png"></li>
                                                <li data-col="5" style="float: left;"><img class="qqImg" data-mean="[耶]" src="../../static/image/arclist/111.png"></li>
                                                <li data-col="6" style="float: left;"><img class="qqImg" data-mean="[红包]" src="../../static/image/arclist/112.png"></li>
                                                <li data-col="7" style="float: left;"><img class="qqImg" data-mean="[鸡]" src="../../static/image/arclist/113.png"></li>
                                                <li data-col="8" style="float: left;">无</li>
                                                <li data-col="9" style="float: left;">无</li>
                                                <li data-col="10" style="float: left;">无</li>
                                                <li data-col="11" style="float: left;">无</li>
                                                <li data-col="12" style="float: left;">无</li>
                                                <li data-col="13" style="float: left;">无</li>
                                                <li data-col="14" style="float: left;">无</li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                <div class="contact-imglist" style="display: none;">
                                    <div class="qqface-title"><span class="item active">请上传新图片或选择图片发送</span> <span class="item add-new" onclick="$('.contact-imglist').hide();">关闭</span></div>
                                    <ul class="contact-imglist-img" style="display: block;">
                                        <li class="item">
                                            <div class="upload-wrap">
                                                <Icon class="anticon anticon-plus upload" type="plus"></Icon>
                                                <input type="file" class="upload-input">
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <textarea id="contact-send-textarea" class="contact-send-textarea" style="color: rgb(34, 34, 34);" onkeypress="jcmsg(event)"></textarea>
                            <div style="height: 61px;background: #FFFFFF;margin-top: -8px;border-left: 1px solid #eee">
                                <div class="contact-sendmethod" style=""><span>
                    <div>
                    <button class="index-contact-btn" type="button" onclick="sendmsg();" style="float: right;">发送(Enter)</button>
                    <span style="float: right; margin-right: 15px; padding-top: 5px;">Ctrl+V粘贴,&nbsp;&nbsp;Ctrl+Enter换行</span></div>
                  </span></div>
                            </div>
                        </div>
                    </Row>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default{
        name: 'home',
        props: {},
        data: function () {
            return {
                like:false,
            }
        },
        created: function () {

        },
        methods: {
            mouseenter(){
                this.like=true;
                console.info(">>>>")
            },
            mouseleave(){
                this.like=false;
            }
        }
        ,
        computed: {},
        components: {}
        ,
        watch: {}
    }
</script>
<style lang="less" scoped>
    .content {
        margin-left: 1%;
        .left_list{
            background: #f5f5f5;
            height:980px;
            border: 1px solid #dfdfdf;
            .ivu-tabs-tab-active {
                height: 32px;
                padding-bottom: 5px;
                background: #e4e7ea !important;
                transform: translateZ(0);
                border-color: #dddee1;
            }
            .left_list_tab{
                margin-top: 1%;
                margin-left:.3%;
            }
        }
        .center_list{
            margin-left: 1%;
            background: #f5f5f5;
            height:980px;
            border: 1px solid #dfdfdf;
        }
        .row_ql{
            height: 36px;
            border-top: 2px solid #eee;
            border-bottom: 2px solid #eee;
            box-sizing: border-box;
            margin-top: 2px;
        }
        .col_ql{
            line-height: 35px;
            cursor: pointer;
            img{
                margin-top: 8px;
            }
        }
        .row_lxr{
            border-bottom: 2px solid #dfdfdf;
            height: 32px;
            .col_lxr{
                border-right: 2px solid #eee;
                cursor: pointer;
            }
            .active_lxr{
                color: rgb(56, 173, 255);
                border-right: 1px solid rgb(238, 238, 238);
            }
        }
        .list li.active {
            background: #e4e7ea !important;
        }
        .indexsection-friends-ul li, .indexsection-topfriends-ul li {
            padding: 6px 36px 6px 10px;
            position: relative;
        }
        .list li {
            height: 60px;
            padding: 2px 10px;
            cursor: pointer;
            margin: 2px 0;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .sec-l {
            width: 38px;
            height: 38px;
            border-radius: 28px;
        }
        .sec-img {
            width: 46px;
            height: 47px;
            margin-top: 4px;
            border-radius: 23px;
            margin-right: 10px;
        }
        img {
            border-style: none;
        }
        .sec-r {
            width: 210px;
            position: absolute;
            line-height: 26px;
            top: 0;
            left: 64px;
             .top {
                position: relative;
                top: 3px;
                 .name {
                     display: inline-block;
                     width: 88px;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                 }
                 .time {
                     float: right;
                     text-align: right;
                     margin-right: 10px;
                     color: #bbb;
                     width: 40px;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                 }
            }
            .bot {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #bbb;
                position: relative;
                top: -5px;
            }
        }
        .indexsection-friends-ul{
            height: 820px;
            overflow:auto;
        }
        .index-sec-allfri-tab-wrap {
            padding-left: 0 !important;
            height: 42px !important;
            border-bottom: none !important;
            overflow: hidden;
            box-sizing: border-box;
            border-top: none;
        }
        .index-sec-allfri-tab-wrap .item.active {
            color: #38adff;
            border-bottom: 3px solid #38adff;
        }
        .index-sec-allfri-tab-wrap .item {
            width: 33%;
            height: 42px;
            line-height: 42px;
            float: left;
            text-align: center;
            padding: 8px 0;
            border-bottom: 1px solid #e0e0e0;
            cursor: pointer;
        }
        .index-sec-allfri-tab-wrap .item>span {
            display: block;
            height: 26px;
            line-height: 26px;
        }
        .indexsection-friends-div {
            height: 100%;
        }
        .indexsection-friends-div {
            height: 98%;
            overflow: auto;
            /* padding-bottom: 34px; */
        }
        .index-sec-allfri-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 15px;
            height: 24px;
            padding: 0 10px;
            border-bottom: 1px solid #eee;
        }
        #friends-list {
            position: relative;
        }
        .indexsection-friends-ul li, .indexsection-topfriends-ul li {
            padding: 6px 36px 6px 10px;
            position: relative;
        }
        .list_hy{
            position: absolute;
            line-height: 26px;
            top: 19px;
            left: 64px;
        }
        .newmsg-alert{
            position: absolute;
            top:22px;
            right: 10px;
            color: rgb(0, 255, 0);
        }
        .list_why:hover{
            background: #e4e7ea !important;
        }
        .contact-h {
            background: #fffdfa;
        }
        .contact-h {
            display: flex;
            align-items: center;
            height: 42px;
            border-bottom: 1px solid #eee;
            border-left:1px solid #eee;
            position: relative;
        }

        .contact-con {
            background: #fffdfa;
        }
        .contact-con {
            width: 100%;
            border-bottom: 1px solid #eee;
        }
        .reply-log {
            height: 100%;
            overflow: auto;
            padding: 0 10px 20px 10px;
        }
        .people {
            padding: 10px 0 5px 0;
            .time {
                margin-right: 10px;
            }
        }
        .showContact-Span {
            color: #fff;
            font-family: 'å¾®è½¯é›…é»‘';
            background: #77c65d;
            margin-right: 15px;
            text-align: left;
            position: relative;
            display: inline-block;
            top: 7px;
            max-width: 70%;
            word-wrap: break-word;
            /* word-break: break-all; */
            border-radius: 4px;
            padding: 10px;
            min-height: 40px;
            white-space: pre-line;
        }
        .wximg {
            float: right;
            width: 46px;
            height: 46px;
            border-radius: 23px;
            position: relative;
        }
        .arrow-right {
            display: block;
            width: 0;
            height: 0;
            border-width: 5px 0 5px 4px;
            border-style: solid;
            border-color: transparent transparent transparent #77c65d;
            position: absolute;
            top: 10px;
            right: -4px;
        }
        .wximgLeft, .wximgLeftMsg {
            float: left;
            width: 46px;
            height: 46px;
            border-radius: 23px;
            position: relative;
            /* bottom: -6px; */
            left: 6px;
        }
        .showContact-leftSpan {
            /* margin-left: 17px; */
            background: #efebea;
            color: #000000;
            font-family: 'å¾®è½¯é›…é»‘';
            margin-left: 18px;
            text-align: left;
            position: relative;
            display: inline-block;
            top: 7px;
            max-width: 70%;
            word-wrap: break-word;
            /* word-break: break-all; */
            border-radius: 4px;
            padding: 10px;
            min-height: 40px;
            white-space: pre-line;
        }
        .contact-send {
            width: 100%;
            position: relative;
        }
        .contact-send-tools {
            width: 100%;
            height: 40px;
            margin-top: 4px;
            line-height:50px;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            background:#FFFFFF;
            border-left: 1px solid #eee;
            position: relative;
        }
        .contact-send-textarea {
            width: 100%;
            height: 62%;
            padding: 10px;
            overflow: auto;
            border: none;
            resize: none;
            border-left: 1px solid #eee;
        }
        .contact-sendmethod {
            position: absolute;
            right: 20px;
            bottom: 21px;
        }
        .index-contact-btn {
            cursor: pointer;
            color: #666;
            text-decoration: none;
            padding: 0 8px;
            height: 28px;
            line-height: 28px;
            background-color: #e4e7ea;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            float: left;
            outline: none;
        }
        .span1{
            margin-left: 10px;
        }
        .contact-imglist {
            position: absolute;
            z-index: 1000;
            top: -299px;
            left: 2px;
            margin-top: 4px;
            background: #fff;
            padding: 2px;
            border: 1px #dfe6f6 solid;
            width: 470px;
            height: 292px;
            overflow: hidden;
            display: none;
        }
        textarea {
            outline:none
        }
        .qqFace {
            position: absolute;
            z-index: 1000;
            top: -292px;
            left: 2px;
            background: #fff;
            padding: 2px;
            border: 1px #dfe6f6 solid;
            height: 265px;
            /* overflow: auto; */
            width: 470px;
        }
        .qqface-title {
            background: #f5f5f5;
            margin-bottom: 8px;
            padding-top: 10px;
            overflow: hidden;
            padding-left: 10px;
        }
        .qqFace .qq, .qqFace .emoji-face {
            width: 464px;
            overflow-y: auto;
            overflow-x: hidden;
            margin-right: -1px;
            height: 210px;
        }
        .qqface-title .item.active {
            background: #fff;
        }
        .qqface-title .item {
            height: 28px;
            line-height: 28px;
            float: left;
            padding: 0 15px;
            font-size: 14px;
            cursor: pointer;
        }
        .contact-imglist .add-new {
            float: right;
            font-size: 12px;
            display: flex;
        }
        .contact-imglist-img {
            width: 464px;
            height: 236px;
            overflow: auto;
        }
        .contact-imglist-img .item {
            cursor: pointer;
            width: 90px;
            height: 109px;
            padding: 5px 5px 0 5px;
            text-align: center;
            float: left;
            position: relative;
        }
        .contact-imglist .item .upload-wrap {
            background: #eee;
        }
        .contact-imglist .item .upload-wrap {
            line-height: 102px;
        }
        .contact-imglist .item img, .contact-imglist .item .upload-wrap {
            width: 78px;
            height: 78px;
        }
        .contact-imglist .item .upload {
            font-size: 26px;
            color: #eec82c;
            font-weight: bold;
            position: relative;
            top: -8px;
        }
        .anticon {
            display: inline-block;
            font-style: normal;
            vertical-align: baseline;
            text-align: center;
            text-transform: none;
            line-height: 1;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .contact-imglist .item .upload-input {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }
    }
</style>