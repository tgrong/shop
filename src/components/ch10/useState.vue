<template>
    <div></div>
</template>
<script>
import { mapState } from 'pinia'
import { schStore } from "../../store/schStore";
export default {
    computed: {
        ...mapState(schStore, ["name", "changeName"])
    },
    mounted() {
        console.log(this.name);
        this.changeName;
        console.log(this.name);
    }
}
</script>
<style scoped></style>