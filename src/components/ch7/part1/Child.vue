<template>
    <div class="iframe">
        <span>子组件：</span>
        <span>{{ inputName }}</span>
    </div>
</template>
<script>
export default {
    props: {
        inputName: {
            type: String,
            required: true
        }
    }
}
</script>