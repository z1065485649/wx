<style lang="less" scoped>
.backtop {
    background-color: rgba(0, 0, 0, .6);
}
</style>

<template>
    <MainLayout :left="leftSpans" :main='mainSpans' style="overflow: hidden;">
        <!--header slots-->
        <Logo slot="logo"></Logo>
        <Navbar slot="navbar"></Navbar>
        <UserMenu :user="principal" slot="user"></UserMenu>
        <!--left side slot-->
        <SideMenu slot="leftside">
            <!-- 组件在 vm.currentview 变化时改变！ -->
        </SideMenu>
        <!--right side slot
        <Toolbar slot="toolbar"></Toolbar> style="background-color: #EEEEEE;"-->
        <div slot="footer" >
            <span>Copyright © 2016-2017 Bainuo. All Rights Reserved.</span>
            <br/> <br/>
            <span>狂风客服会话系统</span>
        </div>
        <!--default slot-->
        <Back-top :height="100">
            <div class="backtop">
                <Icon type="chevron-up"></Icon>
            </div>
        </Back-top>

    </MainLayout>
</template>

<script>
import bus from '@/libs/bus'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Toolbar from '@/components/Toolbar'
import UserMenu from '@/components/UserMenu'
import SideMenu from '@/components/SideMenu'
import MainLayout from '@/components/layout/MainLayout'
export default {
    name: 'Master',
    data: function() {
        return {
            leftSpans: 3,
            mainSpans: 21,
            principal: '',
        }
    },
    created:function(){
        this.principal=JSON.parse(localStorage.getItem("principal"));
    },
    components: {
        Logo,
        Navbar,
        Toolbar,
        UserMenu,
        SideMenu,
        MainLayout
    }
}

</script>
