<template>
    <div class="iframe">
        <span>父组件：</span>
        <input v-model="name" placeholder="请输入用户名" />
    </div>
    <!-- 在父组件中调用子组件 -->
    <Child :inputName="name" />
</template>
<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            name: ""
        }
    },
    components: {
        Child
    }
}
</script>
<style>
.iframe {
    width: 260px;
    display: flex;
    align-items: center;
    padding: 8px;
    border: solid 1px #ccc;
}

.iframe input {
    padding: 8px;
}

.iframe:last-child {
    border-top: none;
    padding: 16px 8px;
    background-color: #eee;
}
</style>