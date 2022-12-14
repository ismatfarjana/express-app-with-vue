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
          v-if="!$store.getters.isAuthenticated"
        >
          <li class="nav-link">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    

    <div id="page-content-container" class="container">
      <router-view />
    </div>
  </div>
  
</template>
