<template>
    <ModalSelect ref="modalSelect" api="organization/search" title="请选择组织机构" :multiple="true" :columns="columns" :params="params" :value="showText" @selected="selectedOrg">
        <template slot-scope="{model}">
            <FormItem label="所属地区" prop="district">
                <SelectDistrict v-model="model.districtId"></SelectDistrict>
            </FormItem>
            <FormItem label="机构名称" prop="name">
                <Input v-model="model.name" placeholder="请输入机构名称"/>
            </FormItem>
        </template>
    </ModalSelect>
</template>


<script>
    import createColumns from "./createColumns";
    import SelectDistrict from '@/components/SelectDistrict'

    export default {
        name: "OrgModalSelect",
        props: {
            value: {},
            text: {
                type: String,
                default: ""
            }
        },
        data: function () {
            return {
                showText: this.text,
                params: {
                    activated: true
                },
                columns: [
                    {
                        width: 80,
                        title: "序号",
                        type: "index",
                        align: 'center'
                    },
                    {
                        width: 150,
                        key: 'provinceName',
                        title: '所属省份'
                    },
                    {
                        width: 150,
                        key: 'cityName',
                        title: '所属城市',
                    },
                    {
                        key: 'name',
                        title: '机构名称',
                    },
                ]
            }
        },
        methods: {
            show() {
                this.$refs.modalSelect.showModal();
            },
            selectedOrg(org) {
                if (org) {
                    this.showText = org.name;
                    this.$emit('input', org.id);
                }
            }
        },
        components: {SelectDistrict}
    }
</script>