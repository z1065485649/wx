<template>
    <Cascader :value="selected" :data="provinces" :load-data="loadCitiesForProvince" :transfer="true" @input="handleInput"></Cascader>
</template>

<script>

    import cache from '@/libs/cache'

    function createDistrictConverter(childrenFilter) {
        return function (district) {
            let target = {
                data: district,
                value: district.id,
                label: district.name,
            };
            if (childrenFilter(district)) {
                Object.assign(target, {
                    children: [],
                    loading: false,
                })
            }
            return target;
        }
    }

    export default {
        name: 'SelectDistrict',
        props: {
            value: {
                type: String | Number
            }
        },
        data: function () {
            return {
                selected: [],
                provinces: []
            }
        },
        created() {
            this.loadProvinces().then(result => {
                this.handleValueChange();
                this.$watch('value', () => {
                    this.handleValueChange();
                });
            });
        },
        methods: {

            handleInput(value) {
                let [provinceId, cityId] = value;
                let districtId = cityId || provinceId;
                this.$emit('input', districtId);
            },

            handleValueChange() {
                if (this.value) {
                    this.loadDistrict(this.value).then(result => {
                        let district = result.data;
                        if (!district.parentId) {
                            this.selected = [district.id]
                        } else {
                            this.selected = [district.parentId, district.id];
                        }
                    });
                } else {
                    this.selected = [];
                }
            },

            loadDistrict(districtId) {
                return cache(`district:${districtId}`, () => this.$http.get(`/district/${districtId}`), 60);
            },

            loadDistrictChildren(districtId) {
                return cache(`district:${districtId}:children`, () => this.$http.get(`/district/${districtId}/children`), 60)
            },

            loadProvinces() {
                return this.loadDistrictChildren(0)
                    .then(result => {
                        this.provinces = result.data.map(createDistrictConverter(d => d.id < '710000'));
                    });
            },

            loadCitiesForProvince(province, callback) {
                province.loading = true;
                this.loadDistrictChildren(province.value)
                    .then(result => {
                        province.children = result.data.map(createDistrictConverter(d => false));
                        province.loading = false;
                        callback();
                    });
            },

        }
    }
</script>