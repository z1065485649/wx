<style lang="less" scoped>
    .backtop{
        background-color: rgba(0,0,0,.6);
    }
</style>

<template>
    <MainLayout :left="leftSpans" :main='mainSpans' style="overflow: hidden;">
        <!--header slots-->
        <Logo slot="logo"></Logo>
        <Navbar  slot="navbar"></Navbar>
        <UserMenu :user="user" slot="user"></UserMenu>
        <!--left side slot-->
        <component v-bind:is="currentView" slot="leftside">
		  <!-- 组件在 vm.currentview 变化时改变！ -->
		  </component>
        <!--right side slot-->
        <Toolbar slot="toolbar"></Toolbar>
        <div slot="footer" style="background-color: #EEEEEE;">
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
	  import ContentMenu from '@/components/ContentMenu'
    export default {
        name: 'Master',
        data: function () {
            return {
                leftSpans: 4,
                mainSpans: 20,
                currentView:SideMenu,
                user:JSON.parse( localStorage.getItem("userDoctPc"))

            }
        },
        created:function(){
        	bus.$on('showContentMenu',()=>{
        		this.currentView = ContentMenu;
        	});
        	bus.$on('showSideMenu',()=>{
        		this.currentView = SideMenu;
        	});
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
