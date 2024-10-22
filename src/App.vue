<template>
   <div class="d-flex flex-column min-vh-100">
       <Navbar /> 
       <div class="flex-grow-1"> 
        <div class="container-fluid mt-4">
              <br/>
        <router-view />
        </div>
      </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';


</script>
