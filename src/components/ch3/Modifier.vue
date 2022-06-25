<template>
  <div>
    <div>lazy 修饰符：<input type="text" v-model.lazy="name" />{{ name }}</div>
    <div>
      number 修饰符：<input type="text" v-model.number="name" />{{ name + 1 }}
    </div>
    <div>
      trim 修饰符：<input type="text" v-model.trim="name" />{{ name.length }}
    </div>
    <!-- <div v-once>{{name}}</div>
    <div v-bind:class="red">{{name}}</div>
    <div :class="red">{{name}}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "123",
      red:"red"
    };
  },
};
</script>
<style scoped>
/* .red{
    color:red;
} */
div {
  margin: 10px;
  text-align: left;
}
input {
  padding: 8px;
  margin-right: 5px;
}
</style>