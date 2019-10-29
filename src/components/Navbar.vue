<style lang="less" scoped>
    .navbar {
        height: 90px;
        background: #373d41;
        .toggleSide {
            width: 50px;
            font-size: 30px;
            text-align: center;
        }
        .hea-nav {
            width: 670px;
            overflow: hidden;
        }
        .hea-flo {
            float: left;
            height:90px;
        }
        .active {
            background-color: #4a5064;
        }
        .hea-nav>li {
            height: 90px;
            margin: 0 5px;
            float: left;
            text-align: center;
            cursor: pointer;
        }
        .hea-nav>li a {
            color: #fff;
            display: flex;
            padding: 6px 12px 0;
            cursor: pointer;
            align-items: center;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
        }
        .index-menu-title {
            font-size: 12px;
            margin: 6px 0 0;
        }
    }
</style>

<template>
    <div class="navbar">
        <!--<ul>
            <li v-for="nav in navigations" :key="nav.id">
                <router-link :to="nav.url" active-class="cur">
                    <Icon :type="nav.icon"></Icon> {{nav.name}}
                </router-link>
            </li>
        </ul>-->
        <ul class="hea-nav hea-flo">

            <li id="session">
                <router-link to="/home" active-class="active">
                    <img src="../../static/image/session-selected-icon.png">
                    <span class="index-menu-title">会话</span>
                </router-link>
            </li>

            <li id="message">
                <router-link to="/home">
                    <img src="../../static/image/clock-icon.png">
                    <span class="index-menu-title">历史消息</span>
                </router-link>
            </li>
            <li id="helper">
                <a href="javascript:layer.msg('功能开发中,请稍后');" href2="/helper.html">
                    <img src="../../static/image/navigation-icon.png">
                    <span class="index-menu-title">群发助手</span>
                </a>
            </li>
            <li id="circle">
                <a href="javascript:layer.msg('功能开发中,请稍后');" href2="/circle.html">
                    <img src="../../static/image/friend-circle-icon.png">
                    <span class="index-menu-title">朋友圈</span>
                </a>
            </li>
            <li id="customer">
                <a href="javascript:layer.msg('功能开发中,请稍后');" href2="/customer.html">
                    <img src="../../static/image/customer-icon.png">
                    <span class="index-menu-title">客户管理</span>
                </a>
            </li>
            <li id="analysis">
                <a href="javascript:layer.msg('功能开发中,请稍后');" href2="/analysis.html">
                    <img src="../../static/image/report-icon.png">
                    <span class="index-menu-title">报表管理</span>
                </a>
            </li>
            <li id="set">
                <a href="javascript:layer.msg('功能开发中,请稍后');" href2="/set.html">
                    <img src="../../static/image/setting-icon.png">
                    <span class="index-menu-title">账号管理</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        data: function() {
            return {
                navigations: [],
            }
        },
        created: function() {
            let menus = localStorage.getItem("menus");
            if (menus) {
                this.navigations = JSON.parse(menus);
            }
        }
    }

</script>
