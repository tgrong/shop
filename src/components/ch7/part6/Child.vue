<template>
    <div v-for="(item, index) in names" :key="index">
        <slot :name="item"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            names: ["s1","s2","s3"]
        }
    }
}
</script>