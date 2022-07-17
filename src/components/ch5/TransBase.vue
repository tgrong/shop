<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="startTrans()" :value="blnShow ? '隐藏动画' : '显示动画'">
    </div>
    <transition name="fade">
      <div class="mytrans" v-if="blnShow"></div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "TransBase",
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.action .act {
  margin: 10px 0;
}

.action .act input {
  width: 80px;
  height: 32px;
}

.mytrans {
  width: 200px;
  height: 150px;
  background-color: #666;
}
</style>