<template>
    <CompA />
    <CompB />
</template>
<script>
import CompA from "./CompA.vue"
import CompB from "./CompB.vue"
export default {
    components: {
        CompA,
        CompB
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

.iframe input {
    padding: 8px;
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