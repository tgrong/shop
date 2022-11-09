<template>
    <div>
        <login-item @submit="submit"></login-item>
    </div>
</template>
<script>
import LoginItem from './LoginItem.vue'
export default {
    components: {
        LoginItem
    },
    methods: {
        submit(data) {
            console.log(data)
        }
    }
}
</script>