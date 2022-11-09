<template>
    <child>
        <template v-slot:header="slotProps">
            {{arr=slotProps}}
            插槽内容--{{ slotProps.item }} 序号--{{ slotProps.index }}
        </template>
    </child>
</template>
<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            name: "",
            arr:[]
        }
    },
    components: {
        Child
    }
}
</script>