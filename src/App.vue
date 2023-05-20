<template>
  <div class="frame">
    <div class="f-left">
      <router-link to="/s-1">显示数据</router-link>
    </div>
    <div class="f-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
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
a{
  text-decoration: none;
}
.frame{
  display: flex;
}
.frame .f-left{
  width: 120px;
  padding: 10px;
}
</style>
