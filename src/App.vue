<template>
  <Navbar />
  <!-- menampilkan page sesuai dengan routing yang diakses -->
  <router-view />
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

