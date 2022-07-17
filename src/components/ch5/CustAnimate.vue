<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="startTrans()" :value="blnShow ? '隐藏动画' : '显示动画'">
    </div>
    <transition name="sc" type="animation">
      <div class="mytrans" v-if="blnShow"></div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "CustAnimate",
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
.sc-enter-active {
  animation: myanimate 10s;
}

.sc-leave-active {
  animation: myanimate 10s reverse;
}

@keyframes myanimate {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
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
  background-color: #ccc;
}
</style>