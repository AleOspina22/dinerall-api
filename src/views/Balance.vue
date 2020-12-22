<template>
    <div class="vue-template">
        <div class="inner-block-balance">
        <h2>Tu balance general es <span style="color:#F5B14C; font-family:'Lato', sans-serif; font-weight:800;">{{balance}}</span> </h2>
        <p>
            Aquí podrás ver el saldo de cada una de tus cuentas.
        </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Balance',
        data() {

            return {
                balance: "",
                mail: ""
            };
        },

        created(){
            // Create our number formatter.
            var formatter = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            // These options are needed to round to whole numbers if that's what you want.
            minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
            });
            
            this.mail = this.$route.params.mail

            axios.get("https://dinerall.herokuapp.com/" + this.mail + "/balance" ) 
            .then(
                (result) => { 
                     
                    let balance_gral = 0
                    for (let [key, value] of Object.entries(result.data)) {
                        balance_gral = balance_gral + value;
                        //console.log(`${key}: ${value}`);
                    }

                    this.balance = formatter.format(balance_gral)

                },
                (error) => {
                    console.error(error)   
                }
            );
        }          
    
    }
</script>

