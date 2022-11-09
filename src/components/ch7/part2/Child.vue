<template>
    <div class="iframe">
        <div class="i-left">
            <span>子组件：</span>
            <span>{{ inputName }}</span>
        </div>
        <div class="i-right">
            <button @click="onGetLength">长度</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        inputName: {
            type: String,
            required: true
        }
    },
    emits: ["getLength"],
    methods: {
        onGetLength() {
            this.$emit("getLength", this.inputName.length)
        }
    }
}
</script>