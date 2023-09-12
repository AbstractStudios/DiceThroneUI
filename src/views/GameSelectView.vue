<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/gameStore';

const gameStore = useGameStore();
gameStore.fetchGames();

const { games, selectedGame } = storeToRefs(gameStore);
</script>

<template>
<div class="game-list-container">
    <div class="game-list">
        <div class="game" v-for="game in games" :key="game.uuid">
            <div class="game-id">
                {{ game.uuid }}
            </div>
            <div class="game-name">
                {{ game.name }}
            </div>
            <br>
        </div>
    </div>
</div>
</template>

<style scoped>
@import '../assets/styles/gameSelect.css';
</style>