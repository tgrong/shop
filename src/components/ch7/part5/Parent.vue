<template>
    <child>
        <template v-slot:header="slotProps">
            <div class="info" v-show="slotProps.index != 0">
                {{ slotProps }},
                姓名--{{ slotProps.item }}, 序号--{{ slotProps.index }}
            </div>
        </template>
    </child>
</template>
<script>
import Child from "./Child.vue"
export default {
    components: {
        Child
    }
}
</script>
<style scoped>
.info{
    margin: 10px 0;
    padding: 5px 0;
    width: 400px;
    border-bottom: solid 1px #ccc;
}
</style>