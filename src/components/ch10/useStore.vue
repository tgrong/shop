<template>
    <div>
        {{ name }},{{ count }},{{ changeCount }}
        <button @click="addCount">增加</button>
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
        ...mapActions(schStore,["addCount"])
    }
}
</script>
<style scoped>

</style>