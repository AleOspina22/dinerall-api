<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="header">
        <h1>Dinrall</h1>
        <nav>
          <button v-on:click="init" v-if="is_auth" > Inicio </button> <button v-on:click="getBalance" v-if="is_auth" > Registrarse </button>
        </nav> 
    </div>

    <div class="main-component">
    </div>
    <div class="footer"> <h2>Misión TIC 2022 - G2M2E2</h2>
    </div>
    <router-view/>

  </div>
</template>



<script>
  export default { name: 'App',
        components: {},
        data: function(){
          return {
  is_auth: dinerall_api.database.user_db.getItem('isAuth') || false }
  },
  methods: {
  },
  beforeCreate: function(){ dinerall_api.database.user_db.setItem('current_username') dinerall_api.database.user_db.setItem('isAuth', true)
  } }
</script>



<style>
body{
 margin: 0 0 0 0;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px; background-color: #283747 ; color:#E5E7E9 ;
  display: flex;
  justify-content: space-between; align-items: center;
}

.header h1{ width: 20%;
  text-align: center; 
}

.header nav { 
  height: 100%; 
  width: 45%;
  display: flex; 
  justify-content: space-around; 
  align-items: center;
  font-size: 20px; 
}

.header nav button{
  color: #E5E7E9; 
  background: #283747; 
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover{ 
  color: #283747; 
  background: #E5E7E9; 
  border: 1px solid #E5E7E9;
}

.main-component{ 
  height: 75vh;
  margin: 0%;
  padding: 0%; 
  background: #FDFEFE;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px; 
  background-color: #283747; 
  color: #E5E7E9;
}


.footer h2{ 
  width: 100%; 
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>