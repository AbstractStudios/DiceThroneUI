import { defineStore } from 'pinia'
import axios from 'axios';

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
            const response = await axios.get(`https://back-end-azdjtklhyq-uc.a.run.app/v1/games/${gameId}`)
            if (response.status !== 200) {
                throw new Error('Failed to fetch players');
            }

            this.players = response.data.players;
        },
        async rollDice(gameId: string, playerId: string) {

        }
    }
});