<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PlayerDisplay from '../components/gameplay/HealthCounter.vue'
import { usePlayerStore } from '../stores/playerStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const playerStore = usePlayerStore();

playerStore.fetchPlayers(route.params.gameId);

const {players, activePlayerId} = storeToRefs(playerStore);

const rollRice = (playerId: string) => {
    playerStore.rollDice(playerId);
}

</script>

<template>
    <div class="gameplay-container">
        <div class="header">
            Header
        </div>
        <div class="players-container">
            <div class="players">
                <div class="player" v-for="player in players" :key="player.id">
                    <div class="player-name">
                        {{ player.userId }}
                    </div>
                    <div class="player-character">
                        {{ player.characterId }}
                    </div>
                    <div class="player-health">
                        {{ player.health }}
                    </div>
                    <div class="player-cp">
                        {{ player.combatPoints }}
                    </div>
                    <div class="player-id">
                        {{ player.uuid }}
                    </div>
                    <div class="player-dice">
                        <div class="player-die" v-for="dice in player.dice" :key="dice.id">
                            {{ dice.diceValue }}
                        </div>
                    </div>
                    <button class="roll-dice" @click="rollDice(player.uuid)">
                        Roll Dice
                    </button>
                    <br>
                    <!-- <div class="debug"> {{ player }}</div> -->
                </div>
            </div>
        </div>
        <div class="abilities-container">
            Abilities
        </div>
        <div class="dice-container">
            Dice
        </div>
    </div>
</template>

<style scoped>
@import '../assets/styles/gameplay.css';
</style>