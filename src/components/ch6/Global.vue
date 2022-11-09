<template>
    <div>{{ tip }}</div>
</template>
<script>
export default {
    name: "Global",
    data() {
        return {
            tip: "这是一个全局组件！"
        }
    }
}
</script>