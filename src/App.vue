<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">ExpressVue app</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul 
          class="navbar-nav ml-auto"
          v-if="!$store.getters.token"
        >
          <li class="nav-link">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-link">
            <router-link to="/feeds" class="nav-link">Feeds</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/settings" class="nav-link">Settings</router-link>
          </li>
          <li class="nav-link">
            <a href="#" class="nav-link" @click.prevent="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    
    

    <div class="container-fluid overflow-hidden">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('setToken');
      this.$router.push('/login');
    }
  }
}
</script>
