<style scoped lang="less">

</style>

<template>
    <div>
        <h1>BOSS-WEB-DASHBOARD</h1>
        <!--<p>后台管理系统总控台</p>-->
        <Collapse>
            <Panel name="1">
                SearchList
                <p slot="content">
                    查询搜索页面组件，参考UserManager
                </p>
            </Panel>
            <Panel name="1">
                EditModal
                <p slot="content">
                    弹窗编辑页面组件
                </p>
            </Panel>
        </Collapse>
    </div>
</template>

<script>


    export default {
        name: 'Dashboard',
        components: {}
    }
</script>
