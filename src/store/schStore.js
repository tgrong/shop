import { defineStore } from "pinia";

export const schStore = defineStore("sch_id", {
    state: () => {
        return {
            name: "精英学校",
            count: 1200,
            grade: ['小学', '初中']
        }
    },
    getters: {
        changeName: state => {
            state.name = "全日制学校";
        },
        changeCount: state => {
            state.count++;
        }
    },
    actions: {
        addCount() {
            this.count += 2;
        }
    }
})