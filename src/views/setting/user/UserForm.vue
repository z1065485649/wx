<template>
    <div>
        <FormItem label="手机号码" prop="phone">
            <Input :maxlength="11" v-model="model.phone" placeholder="请输入手机号码" :disabled="!!model.id"/>
        </FormItem>
        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="model.gender">
                <Radio label="MAN">男</Radio>
                <Radio label="LADY">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="姓名" prop="name">
            <Input v-model="model.name" placeholder="请输入姓名"/>
        </FormItem>
        <FormItem label="生日" prop="birthday">
            <DatePicker type="date" :options="birthdayOptions" placeholder="选择日期" v-model="model.birthday"></DatePicker>
        </FormItem>
        <FormItem label="状态" prop="activated">
            <i-switch v-model="model.activated" size='large'>
                <span slot="open">启用</span>
                <span slot="close">禁用</span>
            </i-switch>
        </FormItem>
        <FormItem label="上传头像" prop="pic">
            <UploadImage :maxNum='1' :maxSize="1024" purpose="useravatar" :images="[model.avatar]" @removeImage="removeImage" @newImage="newImage"/>
        </FormItem>
        <FormItem label="角色" prop="role">
            <Select v-model="model.role">
                <Option v-for="x in roles" :value="x.id" :key="x.id">{{x.name}}</Option>
            </Select>
        </FormItem>
        <FormItem label="组织机构" prop="org">
            <OrgModalSelect v-model="model.orgId"></OrgModalSelect>
        </FormItem>
    </div>
</template>

<script>
    import UploadImage from "@/components/UploadImage";
    import OrgModalSelect from "../organization/OrgModalSelect";

    export default {
        name: 'UserForm',
        props: {
            model: {
                type: Object,
                required: true
            }
        },
        data: function () {
            return {
                roles: [],
                organizations: [],
                birthdayOptions: {
                    disabledDate(date) {
                        return date && date.valueOf() > Date.now();
                    }
                }
            }
        },
        created() {
            if (!this.roles || !this.roles.length) {
                this.$http.get('/role/all')
                    .then(result =>
                        this.roles = mapObjectToIdNameList(result.data)
                    );
            }
//            if (!this.organizations || !this.organizations.length) {
//                this.$http.get('/organization/all')
//                    .then(result =>
//                        this.organizations = mapObjectToIdNameList(result.data)
//                    );
//            }
        },

        methods: {
            removeImage(image) {
                console.log(`删除image ${image}`);
            },

            newImage(image) {
                console.log(`新增image ${image}`);
            },

        },
        components: {
            UploadImage,OrgModalSelect
        }
    }

    function mapObjectToIdNameList(data){
        let list=[];
        for(let key in data){
            list.push({
                id:key,
                name:data[key]
            })
        }
        return list;
    }
</script>