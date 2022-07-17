<template>
  <div class="action">
    <div class="act">
      <input type="button" @click="add()" value="增加" />
      <input type="button" @click="remove()" value="删除" />
    </div>
    <transition-group name="fade" tag="ul">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>
 
<script>
export default {
  name: "TransGroup",
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    add() {
      this.list.push(this.getRndIndex())
    },
    remove() {
      this.list.splice(this.getRndIndex(), 1)
    },
    getRndIndex() {
      let len = this.list.length;
      return Math.floor(Math.random() * len);
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 10px;
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  font-family: '微软雅黑'
}

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
  margin-right: 5px;
}
</style>