<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top" v-if="authenticated">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.positronx.io" target="_blank">
           <!-- Logo Image -->
           <img src="./assets/logo_horizontal_negro.png" width="180" alt="Dinerall" class="d-inline-block align-middle mr-2">
        </a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Cerrar sesión</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view @authenticated="setAuthenticated"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({name: "login"});
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>