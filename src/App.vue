<template>
  <a href="/list">学校首页</a>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav{
  color:#666;
  margin: 5px 0;
  font-size: 13px;
}
</style>
