<template>
    <div class="iframe">
        <div class="i-left">
            <span>父组件：</span>
            <input v-model="name" placeholder="请输入用户名" />
        </div>
        <div class="i-right">
            {{ len }}
        </div>
    </div>
    <!-- 在父组件中调用子组件 -->
    <Child :inputName="name" @getLength="onGetLength" />
</template>
<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            name: "",
            len: 0
        }
    },
    components: {
        Child
    },
    methods: {
        onGetLength(data) {
            this.len = data
        }
    }
}
</script>
<style>
.iframe {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border: solid 1px #ccc;
}

.i-left {
    display: flex;
    align-items: center;
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