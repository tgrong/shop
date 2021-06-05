<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ sayHelloName }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "李四",
    };
  },
  computed: {
    sayHelloName() {
      return this.name + "，你好！";
    }
  },
};
</script>
<style scoped>
div {
  margin: 10px;
  text-align: left;
}
</style>