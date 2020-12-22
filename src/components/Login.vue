<template>
    <div class="vue-template">
        <div class="inner-block">
        
        <div class="text-center">
            <img src="../assets/logo_vertical_negro.png" class="img-fluid" width="250" alt="Dinerall">
        </div>

        <form v-on:submit.prevent="auth_user">

            <div class="form-group">
                <label>Correo electrónico</label>
                <input type="email" class="form-control form-control-lg" v-model="user.mail"/>
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click='auth_user()'>
                Iniciar sesión
            </button>

            <router-link class="btn btn-light btn-lg btn-block"  to="/signup">Registrarse</router-link>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
            </p>

            <p> {{ response }} </p>

        </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    mail: "",
                    password: "",
                },
                response: ""
            }
        },

        methods: {
            auth_user(){
                if(this.user.mail != "" && this.user.password != ""){
                    axios({ method: "POST", 
                            "url": "https://dinerall.herokuapp.com/login/", 
                            "data": this.user, 
                            "headers": { "content-type": "application/json"}
                            }).then(   
                                (result) => {                                    
                                    if (result.data == true) {
                                        this.response = "¡Hola de nuevo!";
                                        //alert('¡Hola de nuevo!');
                                        this.$emit("authenticated", true);
                                        //this.$emit("current_user", this.user.mail);
                                        const mail = this.user.mail
                                        this.$router.push({ name:'balance', params:{ mail: mail } });

                                        //this.$router.push(mail + "/balance");
                                    } else {
                                        this.response = "Correo o contraseña incorrecta"
                                    }                               
                                }               
                            ).catch(
                                (error) => { 
                                    console.error(error)   
                                }
                            )
                } else {
                    this.response = "Debe ingresar un correo y una contraseña."
                }


            }

        }
    }
</script>

