<template>
    <ul>
        <li @click="push(stu.id)" 
            v-for="(stu, index) in stus" 
            :key="index">
            {{ stu.name }}
        </li>
    </ul>
</template>
<script>
import { useRouter } from "vue-router";
export default {
    name: "stuList",
    data() {
        return {
            router: useRouter(),
            stus: [
                { id: 10101, name: "张立清" },
                { id: 10102, name: "李明明" },
                { id: 10103, name: "陈小欢" }
            ]
        }
    },
    methods: {
        push(id) {
            this.router.push({
                name: "dispstu",
                params: {
                    id: id
                }
            })
        }
    }
}
</script>
<style scoped>
ul li {
    cursor: pointer;
}
</style>