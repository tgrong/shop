<template>
    <ul>
        <li :key="index" v-for="item,index in tabs" 
            :class="{ 'focus': index == sIdx }" 
            @click="clk(item.sName, index)">
            {{ item.title }}
        </li>
    </ul>
    <child>
        <template #[sName]>
            <div class="content">
                {{ tabs[sIdx].content }}
            </div>
        </template>
    </child>
</template>
<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            tabs: [{
                sName: "s1",
                title: "新闻",
                content: "新闻内容很丰富"
            }, {
                sName: "s2",
                title: "热点",
                content: "热点事件也不少"
            }, {
                sName: "s3",
                title: "图片",
                content: "图片资讯更精彩"
            }],
            sName: "s1",
            sIdx: 0
        }
    },
    methods: {
        clk(n, i) {
            this.sName = n;
            this.sIdx = i
        }
    },
    components: {
        Child
    }
}
</script>
<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 300px;
    border: solid 1px #ccc;
}

ul>li {
    padding: 8px;
    cursor: pointer;
    width: 84px;
    text-align: center;
}

ul .focus {
    background-color: #ccc;
    font-weight: 700;
}

.content {
    width: 260px;
    border: solid 1px #ccc;
    border-top: none;
    padding: 20px;
}
</style>