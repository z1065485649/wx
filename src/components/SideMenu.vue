<style lang="less" scoped>
    .sidemenu{
        width: 100%;
        height: 980px;
        float: left;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        //background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .index-wxid-list{
        height: 100%;
        background: #4a5064;
    }
    .cover {
        border: 1px solid #dfdfdf;
    }
     .index-wxid-list .IndexWxSearch-box {
        border-bottom: 1px solid #373d41 !important;
    }
    .IndexWxSearch-box {
        font-weight: bold;
        height: 42px;
        padding-top: 12px;
        margin: 0 10px 5px 10px;
        position: relative;
        border-bottom: 1px solid #eee;
    }
    .IndexWxSearch-box i {
        color: #ddd;
    }
    .input-search {
        width: 78%;
        height: 28px;
        border: none;
        background: transparent;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
     .IndexWxSearch-box input::-webkit-input-placeholder,  .IndexWxSearch-box input {
        color: #ddd;
    }
    input {
        outline:none;
    }
    .index-wxid-list .list li.active,  .index-wxid-list .list li{
        background: #505874 !important;
        cursor: pointer;
        color: #ddd;
    }
    .all{
        cursor: pointer;
        color: #ddd;
    }
    .wx-list:hover{
        background: #505874 !important;
    }

    .wx-img {
        width: 46px;
        height: 46px;
        border-radius: 23px;
        margin-right: 10px;
        position: relative;
    }
    .wx-list li {
        padding: 0 10px;
        margin: 0;
        display: flex;
        height: 58px;
        align-items: center;
    }
    .name_font{
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 108px;
        font-size: 16px;
        text-align: left;
        color: #ddd;
        cursor: pointer;
    }
    .name_font:hover{
        color: #38adff;
    }
    .gray {
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        color: #ddd;
    }
    .indexwxlist-con li{
        position: relative;
        padding-right: 20px;
    }
    .index-wxid-list-msg li{
        position: relative;
    }
    .indexwxlist-con li.online:after {
        background: #07fc01;
    }
    .all-wxhao:after {
        left: 45px !important;
    }
    .index-wxid-list-msg li.online:after {
        background: #07fc01;
    }
    .indexwxlist-con li.offline:after {
        background: #bbb;
    }
    .index-wxid-list-msg li.offline:after {
        background: #bbb;
    }
    .indexwxlist-con li:after {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        position: absolute;
        top: 36px;
        left: 45px;
    }
    .index-wxid-list-msg li:after {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        position: absolute;
        top: 36px;
        left: 56px;
    }

    element.style {
        display: inline;
    }
    .icon-num {
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 8px;
        background-color: #fa0808;
        color: #fff !important;
        font-size: 12px;
        font-style: normal;
        position: absolute;
        top: 2px;
        left: 45px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

<template>
    <div class="sidemenu">
        <div class="index-wxid-list cover" style="height: 100%">
            <audio id="aud" class="hide" src="/static/images/tishi.mp3" preload="preload"></audio>
            <div class="IndexWxSearch-box">
                <Icon type="search" size="21"></Icon>
                <input value="" placeholder="请输入微信号搜索" class="input-search input-search-wxhao" >
            </div>

            <div class="indexwxlist-con" style="max-height: 930px; overflow: auto;">
                <ul class="all wx-list">
                    <li wxid="" class="online active">
                        <img src="../../static/image/wechat.jpg" class="wx-img">
                        <i class="icon-num" style="display: inline;">1</i>
                        <span id="online" class="online">所有微信号(0/2)</span>
                    </li>
                </ul>
                <ul class="list wx-list">
                    <li class="offline" data-search=".">
                        <img  src="http://wx.qlogo.cn/mmhead/ver_1/jgQvbwEgVo9fSunVFTe0ibrXib2ia7LFmt4g1AvWQg2LrqdkgAGicSWQLB2Fa768ibLibra33RibDqorxJcpB2iaewDyY99ibl2J26lbrffvg99CL8fU/132"
                              class="wx-img " style="margin-right: 10px;">
                        <i class="icon-num" style="display: inline;">0</i>
                        <div style="display: flex; align-items: center;">
                            <span class="name_font">.</span>
                        </div></li>
                </ul>
                <ul class="wx-list"><li class="offline" wxid="wxid_i3grwzjeerml12" data-search="林月如">
                    <img src="http://wx.qlogo.cn/mmhead/ver_1/lhvxYyzG3es0GR2JKTmbqRWfbYnn2O3dV6N2gXrUlziamJRmcC2WggIY1zKicZKzlpdica2G9Gj8gUTY0aricb8slibmbOK3wyjq6WaYBWVxmplc/132"
                         class="wx-img" style="margin-right: 10px;">
                    <i class="icon-num" style="display: none;">0</i>
                    <div style="display: flex; align-items: center;">
                        <span class="name_font">林月如</span>
                    </div>
                </li>
                </ul>
            </div>

             <div>
            </div>
        </div>
        <!--<Menu active-name="1-" width="auto" :open-names="['1']" @on-select="onClickMenu">
            <Submenu :name="index" v-for="(it,index) in submenu" :key="it.id">
                <template slot="title">
                    <Icon :type="it.iconCode?it.iconCode:'ios-navigate'"></Icon>
                    {{it.name}}
                </template>
                <MenuItem :name="x.url" v-for="(x,idx) in it.children" :key="x.id" >
                    {{x.name}}
                </MenuItem>
            </Submenu>
        </Menu>-->
        <span>&nbsp;</span>
    </div>
</template>


<script>

    import bus from '@/libs/bus'

    let $menus = [];

    export default {
        name: 'SideMenu',
        data: function () {
            return {
                submenu:[],
                module: null,
                current: null
            }
        },
        created: function () {
            $menus = this.getMenusData();
            this.autoDetectModuleItems();
        },

        watch: {
            '$route': function () {
                this.autoDetectModuleItems();
            }
        },

        methods: {
            onClickMenu(url) {
                this.$router.push(url);
            },
            autoDetectModuleItems() {
                this.submenu=$menus;
                this.module = this.getCurrentMatchItem($menus);
                if (this.module) {
                    this.current = this.getCurrentMatchItem(this.module.children);
                }
            },

            getMenusData() {
                let value = localStorage.getItem("menus");
                if (!value) return [];

                return JSON.parse(value);
            },

            getCurrentMatchItem(items) {
                for (let idx = 0; idx < this.$route.matched.length; idx++) {
                    let route = this.$route.matched[idx];
                    for (let jdx = 0; jdx < items.length; jdx++) {
                        let item = items[jdx];
                        if (item.url == route.path) {
                            return item;
                        }
                    }
                }
                return null;
            },
        }
    }

</script>
