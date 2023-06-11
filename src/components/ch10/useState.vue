<template>
    <div></div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { schStore } from "../../store/schStore";
export default {
    computed: {
        ...mapState(schStore, ["name", "count"])
    },
    methods: {
        ...mapActions(schStore, ["editCount", "addGrade", "ajaxEditName"])
    },
    mounted() {
        const store = schStore();
        console.log(store.tip);
        console.log(store.$state.name);
    }
}
</script>
<style scoped></style>