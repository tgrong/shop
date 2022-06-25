<template>
    <div class="action">
        <div class="a-parent" @click="todo">
            <div class="a-child" @click.stop="todo"></div>
        </div>
        <div class="a-item">数量:{{ intNum }}</div>
    </div>
</template>
 
<script>
export default {
    name: "EventObject",
    data() {
        return {
            intNum: 0,
        };
    },
    methods: {
        todo() {
            this.intNum++;
        }
    }
};
</script>
<style scoped>
.action .a-item {
    margin: 10px 0;
}

.action .a-parent {
    width: 100px;
    height: 100px;
    border: solid 1px #666;
    padding: 20px;
}

.action .a-child {
    width: 100px;
    height: 100px;
    border: solid 1px #666;
}

.action .a-item input {
    width: 80px;
    height: 32px;
}
</style>