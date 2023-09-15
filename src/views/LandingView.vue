<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import LoginForm from '../components/LoginForm.vue';

const userStore = useUserStore();

const loadingData = ref(true);

</script>

<template>
  <div class="loading-container" v-if="loadingData"></div>
  <div class="login-container" v-else-if="userStore.id == ''">
    <LoginForm />
  </div>
  <div class="landing-container" v-else>
    LANDING
  </div>
</template>
