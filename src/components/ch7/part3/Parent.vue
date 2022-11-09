<template>
    <div class="iframe">
        <div class="i-left">
            <span>父组件：</span>
            <span>{{ name }}</span>
        </div>
        <div class="i-right">
            <button @click="onGetName">取值</button>
        </div>
    </div>
    <!-- 在父组件中调用子组件 -->
    <Child ref="retNameChild" />
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
    },
    methods: {
        onGetName() {
            this.name = this.$refs.retNameChild.name;
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
    padding: 16px 8px;
    border: solid 1px #ccc;
}

.i-left {
    display: flex;
    align-items: center;
}

.iframe:last-child {
    border-top: none;
    background-color: #eee;
}
</style>