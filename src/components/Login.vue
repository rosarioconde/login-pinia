<template>

  <div class="container">
    <h1>Login - iniciar sesión</h1>
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Contraseña" type="password" />
    <button @click="login">Iniciar sesión</button>
  </div>
</template>
<script setup>

import { useAuthStore } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  await authStore.login(email.value, password.value);
  if(authStore.isAuthenticated){
      if (authStore.isAdmin) {
        router.push('/admin');
      } else {
        router.push('/home');
      }
    }
}
</script>

