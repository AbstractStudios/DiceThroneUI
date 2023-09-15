import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        id: ""
    }),

    actions: {
        login(username: string) {
            this.id = username;
        }


    }
});