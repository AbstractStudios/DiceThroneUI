<script setup lang="ts">
import { ref } from 'vue';

const username = ref<string>('');
const login = () => {
  // Replace this with your login logic
  console.log(`Logging in with username: ${username.value}`);
};
</script>

<template>
    <div class="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
        Hello World
    </div>
    <div class="p-4">
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  </template>
  