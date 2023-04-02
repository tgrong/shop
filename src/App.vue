<template>
  <!-- <a href="/list">学校首页</a>
  <router-link to="/list">学校首页</router-link>

  <a href="/list/1001">一年级</a>
  <a href="/list?gradeId=1001">一年级</a>

  <router-link :to="{
    name: 'list2',
    params: {
      gradeId: 1001
    }
  }">一年级</router-link>

  <div @click="router.push({
    name: 'list2',
    params: {
      gradeId: 1001
    }
  })">一年级</div>

  <div @click="router.push({
    name: 'list'
  })">
    学校首页
  </div> -->
  <router-link to="/stulist">学生列表</router-link>
  <span v-show="router.currentRoute.name == 'dispstu'"> > 学生详细 </span>
  <router-view></router-view>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  name: "App",
  data() {
    return {
      router: useRouter()
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  color: #666;
  margin: 5px 0;
  font-size: 13px;
}
</style>
