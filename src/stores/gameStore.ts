import { defineStore } from 'pinia'
import axios from 'axios';

const BASE_URL = 'https://back-end-azdjtklhyq-uc.a.run.app';

export const useGameStore = defineStore({
    id: 'game',
    state: () => ({
        games: [],
        selectedGame: null
    }),

    getters: {
        getGames(state): any {
            return state.games;
        },
        getSelectedGame(state): any {
            return state.games.find((game: any) => game.id === this.selectedGame);
        }
    },
    actions: {
        async fetchGames() {
            const response = await axios.get(`${BASE_URL}/v1/games`);
            if (response.status !== 200) {
                throw new Error('Failed to fetch games');
            }

            console.log(response.data);
            this.games = response.data
        }
    }
});