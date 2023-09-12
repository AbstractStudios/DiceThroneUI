import { defineStore } from 'pinia'
import axios from 'axios';

const BASE_URL = 'https://back-end-azdjtklhyq-uc.a.run.app';

export const usePlayerStore = defineStore({
    id: 'player',
    state: () => ({
        players: [],
        activePlayerId: null
    }),

    getters: {
        getPlayers(state): any {
            return state.players;
        },
        getActivePlayer(state): any {
            return state.players.find((player: any) => player.id === state.activePlayerId);
        }
    },
    actions: {
        async fetchPlayers(gameId: string) {
            const response = await axios.get(`${BASE_URL}/v1/games/${gameId}`)
            if (response.status !== 200) {
                throw new Error('Failed to fetch players');
            }

            this.players = response.data.players;
        },
        async rollDice(playerId: string) {
            const response = await axios.post(`${BASE_URL}/v1/players/${playerId}/dice/roll`)
            console.log(response);
            if (response.status !== 200) {
                throw new Error('Failed to roll dice');
            }
        }
    }
});