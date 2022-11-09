<template>
    <div class="iframe">
        <div class="i-left">
            <span>组件A：</span>
            <input v-model="name" @input="onInputName" placeholder="请输入用户名" />
        </div>
    </div>
</template>
<script>
import Bus from "./Bus"
export default {
    emits: ["inputName"],
    data() {
        return {
            name: ""
        }
    },
    methods: {
        onInputName() {
            Bus.emit("inputName", this.name)
        }
    }
}
</script>