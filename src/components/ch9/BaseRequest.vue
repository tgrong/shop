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
            <button @click="onCacheRequest">缓存数据</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: ""
        }
    },
    methods: {
        onSendRequest() {
            // 1. 设置一个key值为cacheData的localStorage对象
            localStorage.setItem("cacheData", "tgrong");
            // 2. 获取key值为cacheData的localStorage对象
            localStorage.getItem("cacheData");
            // 3. 删除key值为cacheData的localStorage对象
            localStorage.removeItem("cacheData")
            this.data = "loading...";
            this.$http.get('/?day=1-1').then(d => {
                this.data = d.data

            }, err => {
                console.log(err.message)
            })
        },
        onRequest() {
            this.$http.get('/?day=1-1').then(d => {
                this.data = d.data
                // 请求成功后，再缓存返回数据
                localStorage.setItem("cacheBase", d.data)
                // 缓存数据保存时的时间
                localStorage.setItem("cacheTime", (new Date().getTime()));
            }, err => {
                console.log(err.message)
            })
        },
        onDiffTime(oTime, nTime, len) {
            let _oM = parseInt(oTime / 1000 / 60);
            let _nM = parseInt(nTime / 1000 / 60);
            console.log(_nM, _oM, _nM - _oM)
            if (_nM - _oM <= len) {
                return true
            } else {
                return false;
            }
        },
        onCacheRequest() {
            this.data = "loading...";
            // 先判断是否有缓存数据
            if (localStorage.getItem("cacheBase") && localStorage.getItem("cacheTime")) {
                // 判断时间否是规则内
                if (this.onDiffTime(localStorage.getItem("cacheTime"), (new Date()).getTime(), 3)) {
                    this.data = localStorage.getItem("cacheBase");
                } else {
                    this.onRequest();
                }
            } else {
                this.onRequest();
            }
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
.i-left button{
    margin-right: 5px;
}
/*  */
.iframe:last-child {
    border-top: none;
    background-color: #eee;
}
</style>