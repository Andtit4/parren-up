<template>
  <div class="home">
         <div class="container">
        <div class="bg0 p-tb-30 p-lr-15 how-pos3-parent mx-auto mod-width">

          <div class="row">
            <div class="col-sm-12 col-md-12">
              <div class="row">
                <div class="mx-auto col-sm-9 col-md-9" v-if="isLoginMode">

                </div>
                <div class="mx-auto col-sm-9 col-md-9" v-if="!isLoginMode">
                  <b-form class="m-tb-40" @submit.prevent="signup()">
                    <b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Entrer adresse courielle"
                        v-model="email"
                      ></b-form-input> </b-form-group
                    ><b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Entrer nom"
                        v-model="firstName"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Entrer prénom"
                        v-model="lastName"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="password"
                        placeholder="Entrer votre mot de passe"
                        v-model="password"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        v-model="passwordConfirm"
                      ></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <b-form-input
                          type="number"
                          placeholder="Entrer numéro de téléphone"
                          v-model="phone"
                        ></b-form-input>
                      </b-form-group>
                    </b-form-group>
                    <div class="text-center">
                      <button
                        type="submit"
                        v-on:click="userRegistration"
                        class="stext-101 cl0 size-101 bg1 bor14 hov-btn1 p-lr-15 trans-04 pointer"
                      >
                        Adhérer a la communauté
                      </button>
                    </div>
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { HTTP } from '../config/http-constants'
export default {
    name: 'loginView',

    data(){
        return{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        passwordConfirm: "",
        users: []
        }
    },

methods: {
    userRegistration() {
        // alert('clicked')
        HTTP.post('/', {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        phone: this.phone,
      }).then(response => {
         console.log(response);
         alert('Inscription effectuée');
         this.$router.push("/product")
      }).catch(error => {
         console.log(error);
        this.response = "Error: " + error.response.status;
      });
    }
}
 

};
</script>

<style>

</style>