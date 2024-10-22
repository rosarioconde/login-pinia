<template>

<h1>ADMIN</h1>
<p>Esta vista pertenece al admin</p>
<p>{{ authStore.user.name }}</p>
<button @click="logout">Cerrar sesión</button>
</template>

<script setup>
import { useAuthStore } from '../store';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/login');
}

</script>