<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
      name: 'UserBalance',
      data: function (){
          return {
              username: "",
              balance: 0
          }
      },
      created: function() {

          this.username = this.$route.params.username

          let self = this
          axios.get("https://cajero-api.herokuapp.com/user/signup/" + this.username)
              .then((result) => {
                  self.balance = result.data.balance
              })
              .catch((error) => {
                  alert("ERROR Servidor");
              });
      }
  }
</script>

<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }
    #UserBalance span{
        color: crimson;
        font-weight: bold;
    }
</style>
