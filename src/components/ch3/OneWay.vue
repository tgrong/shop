<template>
  <div>
    <div>
      姓名：<span v-bind:class="fs">{{ name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "李小明",
      fs: "fs",
    };
  },
};
</script>
<style scoped>
.fs {
  font-size: 26px;
  color: red;
}
div {
  margin: 10px;
  text-align: left;
}
</style>