<template>
    <div>
        <nav>首页 > 列表</nav>
        <a href="/list/grade">进入年级</a>
        <router-view></router-view>
    </div>
</template>
<script>
import { useRouter } from "vue-router"
export default {
    name: "List",
    data() {
        return {
            router: useRouter()
        }
    },
    mounted() {
        console.log(this.router);
        console.log(this.router.currentRoute.params.gradeId);
        console.log(this.router.currentRoute.query.gradeId);
    }
}
</script>