<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="startTrans()" :value="blnShow ? '隐藏动画' : '显示动画'">
    </div>
    <transition name="animate__animated animate__bounce" :duration="3000" enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp">
      <div class="mytrans" v-if="blnShow"></div>
    </transition>
  </div>
</template>
 
<script>
import "animate.css";
export default {
  name: "PlugAnimate",
  data() {
    return {
      blnShow: true
    };
  },
  methods: {
    startTrans() {
      this.blnShow = !this.blnShow;
    }
  },
};
</script>
<style>
.action .act {
  margin: 10px 0;
}

.action .act input {
  width: 80px;
  height: 32px;
}

.mytrans {
  width: 200px;
  height: 30px;
  background-color: #ccc;
}
</style>