<template>
  <div>
    <div>
      <input type="checkbox" v-model="blnHtml" /> 插入{{
        blnHtml ? "HTML" : "文本"
      }}格式
    </div>
    <div v-show="!blnHtml">{{ HTML }}</div>
    <div v-show="blnHtml" v-html="HTML"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blnHtml: true,
      HTML: "<span style='font-weight:700'>你好，小明！</span>",
    };
  },
};
</script>
<style scoped>
div {
  margin: 10px;
  text-align: left;
}
</style>