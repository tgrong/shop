<template>
    <div>
        {{ name }},{{ count }},{{ changeCount }}
        <button @click="editCount(5)">增加</button>
    </div>
</template>
<script>
import { mapState,mapActions } from 'pinia'
import { schStore } from "../../store/schStore"
export default {
    data(){
        return {
            tip: "..."
        }
    },
    computed:{
       ...mapState(schStore,["name","count","changeCount"])
    },
    methods:{
        ...mapActions(schStore,["editCount"])
    }
}
</script>
<style scoped>

</style>