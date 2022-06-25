<template>
  <div class="action">
    <div class="a-item">
      <input type="button" value="v-on 绑定" v-on:click="num += 1" />
    </div>
    <!-- @ 等价于v-on 指令-->
    <div class="a-item">
      <input type="button" value="@ 绑定" @click="num += 1" />
    </div>
    <div class="a-item">数量:{{ num }}</div>
  </div>
</template>
 
<script>
export default {
  name: "BindEvent",
  data() {
    return {
      num: 1,
    };
  },
};
</script>
<style scoped>
.action .a-item {
  margin: 10px 0;
}
.action .a-item input {
  width: 80px;
  height: 32px;
}
</style>