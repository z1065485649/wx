<style lang="less" scoped>
    .box {
        position: relative;
        height: 60px;
        .logo {
            position: absolute;
            top: 20px;
            left: 50px;
            display: inline-block;
            width: 120px;
            height: 23px;
            background: url(../../static/image/icon_Logob.png) no-repeat;
        }
        .text {
            position: absolute;
            color: #fff;
            opacity: 0.7;
            top: 1px;
            left: 180px;
            font-size: 16px;
        }

    }

</style>
<template>
    <div class="box">
        <router-link to="/">
            <span class="logo"></span>
        </router-link>
    </div>
</template>
