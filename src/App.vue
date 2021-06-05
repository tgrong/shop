<template>
  <SayHello />
</template>

<script>
import SayHello from "./components/ch3/SayHello.vue";

export default {
  name: "App",
  components: {
    SayHello
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
