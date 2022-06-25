<template>
  <div class="action">
    <div class="a-item">
      <input type="button" value="一个参数" @click="todo(1)" />
    </div>
    <div class="a-item">
      <input type="button" value="二个参数" @click="todo2(2, 3)" />
    </div>
    <div class="a-item">参数:{{ strParam }}</div>
  </div>
</template>
 
<script>
export default {
  name: "EventParam",
  data() {
    return {
      strParam: "",
    };
  },
  methods: {
    todo(a) {
      this.strParam = a;
    },
    todo2(a, b) {
      this.strParam = a + "," + b;
    },
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