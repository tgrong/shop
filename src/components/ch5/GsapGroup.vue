<template>
  <div class="action">
    <div class="act">
      <input type="text" v-model="search">
    </div>
    <transition-group name="list" tag="ul" 
      @before-enter="beforeEnter" 
      @enter="handleEnter" 
      @leave="handleLeave">
      <li v-for="(item,index) in showUsers" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>
 
<script>
import gsap from 'gsap'
export default {
  name: "TransGroup",
  data() {
    return {
      search: '',
      users: ['张三', '李四', '李小四', '张明明', '陈小丰']
    };
  },
  computed: {
    showUsers() {
      if (this.search) {
        return this.users.filter(user => user.includes(this.search))
      } else {
        return [];
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0px'
      el.style.opacity = '0'
    },
    handleEnter(el, done) {
      gsap.to(el, {
        height: '1.5em',
        opacity: 1,
        delay: el.dataset.index * 0.1,
        onComplete: done
      })
    },
    handleLeave(el, done) {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        delay: el.dataset.index * 0.1,
        onComplete: done
      })
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  width: 188px;
}

ul li {
  padding: 2px 0;
}

.action {
  width: 188px;
}

.action .act input {
  padding: 8px;
}
</style>