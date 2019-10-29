export default function () {

    let rule = {
        name: {
            required: true,
            message: "请填写角色名称",
            trigger: "blur"
        },
        // activated: {
        //     required: true,
        //     message: "请选择状态",
        //     trigger: "blur"
        // }
    };
    return rule;
}