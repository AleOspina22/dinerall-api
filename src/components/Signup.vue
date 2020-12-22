<template>
    <div class="vue-template">
        <div class="inner-block">
        <div class="text-center">
            <img src="../assets/logo_vertical_negro.png" class="img-fluid" width="250" alt="Dinerall">
        </div>

        <form form v-on:submit.prevent="create_user">

            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name"/>
            </div>

            <div class="form-group">
                <label>Correo electrónico</label>
                <input type="email" class="form-control form-control-lg" v-model="user.mail"/>
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password"/>
            </div>

            <div class="form-group">
                <label>Fecha de nacimiento</label>
                <input type="date" class="form-control form-control-lg" v-model="user.birthday"/>
            </div>

            <div class="form-group">
                <label>Género</label>
                <select class="custom-select" v-model="user.gender">
                <option selected>Escoje un género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="No binario">No binario</option>
                <option value="Otro">Otro</option>
                </select>
            </div>


            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click='create_user()'>Registrarse</button>

            <p class="forgot-password text-right">
                ¿Ya tienes cuenta?
                <router-link :to="{name: 'login'}">Inicia sesión</router-link>
            </p>

            <div>
                <p style="padding: 2em 0 0 0;"> {{ response }} </p>
            </div>

        </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'Signup',
        data() {
            return {
                user: {
                    name: "",
                    mail: "",
                    password: "",
                    birthday: "",
                    gender: ""
                },
                response: ""
            }
        },

        methods: {
            create_user(){
                    axios({ method: "POST", 
                            "url": "https://dinerall.herokuapp.com/signup/", 
                            "data": this.user, 
                            "headers": { "content-type": "application/json"}
                            }).then(   
                                (result) => {
                                    const newUser = result.data
                                    this.response = "Bienvenido a Dinerall, " + newUser.name
                                    alert("Bienvenid@ a Dinerall, " + newUser.name + ". Por favor inicia sesión.");
                                    this.$router.replace({name: 'login'});                                                      
                                }
                            ).catch(
                                (error) => { 
                                    console.error(error)   
                                }
                            )                            


            }

        }
    }
</script>
