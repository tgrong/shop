<template>
    <myComponent @my-clk="fn"></myComponent>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            require: true,
            validator(value) {
                return ['a', 'b'].includes(value)
            },
            default: "陶国荣"
        },
        age: Number
    },
    data() {
        return {
            newName: this.name
        }
    }
}
</script>