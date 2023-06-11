import { defineStore } from "pinia";
import axios from "axios";
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
        editCount(val) {
            this.count = val;
        },
        addGrade(val) {
            this.grade.push(val);
        },
        async ajaxEditName() {
            const res = await axios.get("http://rttop.cn/api/?day=1-1");
            this.name = res.data;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: ['name', 'count']
            }
        ]
    }
})