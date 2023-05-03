<template>
    <div class="iframe">
        <div class="i-left">
            <span>返回值：</span>
            <span>{{ data }}</span>
        </div>
    </div>
    <div class="iframe">
        <div class="i-left">
            <button @click="onSendRequest">发送请求</button>
        </div>
    </div>
</template>
<script>
import request from '@/plugins/axios';
export default {
    data() {
        return {
            data: "loading..."
        }
    },
    methods: {

        onSendRequest() {
            request.get('/?day=1-1').then(d => {
                this.data = d.data
                
            })

            // axios({
            //     method: 'GET',
            //     url: 'http://rttop.cn/api/?day=1-1',
            //     data: {
            //         firstName: 'tao',
            //         lastName: 'guorong'
            //     }
            // }).then(res=>{
            //     console.log("返回数据",res)
            // })
        }
    }
}
</script>
<style>
.iframe {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;
    border: solid 1px #ccc;
}

.i-left {
    display: flex;
    align-items: center;
}

.iframe:last-child {
    border-top: none;
    background-color: #eee;
}
</style>