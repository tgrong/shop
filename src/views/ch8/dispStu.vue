<template>
    <h3>{{ curStu[0].name }}</h3>
    <div>{{ curStu[0].sex }},{{ curStu[0].score }}分</div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
    name: "dispStu",
    data() {
        return {
            router: useRouter(),
            stus: [
                { id: 10101, name: "张立清", sex: "男", score: 70 },
                { id: 10102, name: "李明明", sex: "女", score: 80 },
                { id: 10103, name: "陈小欢", sex: "女", score: 90 }
            ],
            curStu: [{
                name: "",
                sex: "",
                score: ""
            }]
        }
    },
    mounted() {
        // 获取传入的参数
        let _id = this.router.currentRoute.params.id;
        // 根据id获取用户
        this.curStu = this.stus.filter(item => item.id == _id);
    }
}
</script>