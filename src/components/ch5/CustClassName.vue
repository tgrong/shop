<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="startTrans()" :value="blnShow ? '隐藏动画' : '显示动画'">
    </div>
    <transition enter-active-class="enter" leave-active-class="leave" appear>
      <div class="mytrans" v-if="blnShow"></div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "CustClassName",
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
.enter {
  animation: myanimate 0.5s;
}

.leave {
  animation: myanimate 0.5s reverse;
}

@keyframes myanimate {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
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
  height: 30px;
  background-color: #ccc;
}
</style>