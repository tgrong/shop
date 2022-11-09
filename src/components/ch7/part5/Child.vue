<template>
    <div v-for="(item, index) in arr" :key="index" class="sf">
        <slot :item="item" name="header" :index="index"></slot>
    </div>
    <button @click="add">增加</button>
</template>
<script>
export default {
     data(){
        return{
            arr:["张三","李四","王二"]
        }
     },methods:{
        add(){
            this.arr.push("sdf")
        }
     }
}
</script>