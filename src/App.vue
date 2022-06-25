<template>
  <EventObject />
</template>

<script>
import EventObject from "./components/ch4/EventObject.vue";

export default {
  name: "App",
  components: {
    EventObject
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
