<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="increment()" value="动画数字">
    </div>
    <div class="change">{{ counter.toFixed(0) }}</div>
  </div>
</template>
 
<script>
import gsap from 'gsap'
export default {
  name: "GsapAnimate",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      gsap.to(this, { duration: 20, counter: this.counter + 100 })
    }
  },
};
</script>
<style>
.action .act {
  margin: 10px 0;
}
.action .change{
  font-size: 30px;
  font-weight: 700;
  font-family:'微软雅黑'
}
</style>