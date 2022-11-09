<template>
    <div class="iframe">
        <div class="i-left">
            <span>组件B：</span>
            <span>{{ name }}</span>
        </div>
    </div>
</template>
<script>
import Bus from "./Bus"
export default {
    data() {
        return {
            name: ""
        }
    },
    mounted() {
        Bus.on("inputName", data => {
            this.name = data;
        })
    }
}
</script>