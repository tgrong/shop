<template>
    <div>
        <button @click="doLogin()">单击验证</button>
    </div>
</template>

<script>
export default {
    emits: {
        // myClk(payload){
        //     console.log(payload)
        // },
        // myFocus(payload){
        //     console.log(payload)
        // }
        submit({ userName, userPass }) {
            if (userName.length != '' && userPass.length != '') {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        doLogin() {
            this.$emit("submit", { userName: "陶国荣", userPass: "" })
        }
    }
}
</script>