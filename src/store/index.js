import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  getters: {
    isAdmin: (state) => state.user?.role === 'admin', //verificando si el rol es admin
    isAuthenticated: (state) => !!state.token, // verificar si el token existe
  }, 
  actions: {
    async login (email, password) {
      try {
        const response = await axios.get('https://5fa1c2cdba0736001613b14e.mockapi.io/api/users')
        const user = response.data.find(u => u.email === email && u.pass === password);

        if (user) {
          this.token = user.token
          this.user = user
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('token', JSON.stringify(user.token))
        } else { 
          console.log('Usuario no encontrado')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
})