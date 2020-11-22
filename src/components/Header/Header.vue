<template>
   <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-dark">
                <router-link class="navbar-brand text-light " to="/">  Orinoco</router-link>
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <router-link to="/panier"  class="nav-link text-light " href="#">Mon panier ({{qts}}) <i class="fas fa-shopping-bag"></i></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link text-light " to="/">Accueil <i class="fas fa-store-alt"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light " to="/">A propos du site <i class="fas fa-info-circle"></i></router-link>
                      </li>
                  </ul>
                </div>
              </nav>
</template>

<script>

import {bus} from "../../main"

export default {
    name: "Header",
    data() {
        return {
          qts: 0,
          panier: [],


        }
    },
    methods: {

      calculPanier: function() {
        
        if(localStorage.getItem("loglevel:webpack-dev-server")) {
          localStorage.removeItem("loglevel:webpack-dev-server")
        }
        let i = 0
        this.panier = []
        this.qts = 0

        for(i  ; i<localStorage.length; i++) {
        this.panier.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        this.qts =  this.qts + this.panier[i].quantite
    
      }

      return this.qts 
      }
      
    },

   
    created() {
      this.calculPanier()
        bus.$on("updateHeader", () => {
        this.calculPanier()
      }) 
    },
  
   
    
    

}
</script>

<style scoped src="./Header.css">

</style>