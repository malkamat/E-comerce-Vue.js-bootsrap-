<template>
   <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-dark">
                <router-link class="navbar-brand text-light " to="/">Orinoco</router-link>
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a  class="nav-link text-light " href="#">Mon Panier ({{qts}}) <i class="fas fa-shopping-bag"></i></a>
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

export default {
    name: "Header",
    data() {
        return {
          qts: 0,
          panier: [],
          i: 0

        }
    },
    methods: {
      calculPanier: function() {
        for(this.i ; this.i<localStorage.length; this.i++) {
        this.panier.push(JSON.parse(localStorage.getItem(localStorage.key(this.i))));
        this.qts +=  this.panier[this.i].quantite
        console.log(JSON.parse(localStorage.getItem(localStorage.key(this.i))));
      }
      this.i = 0
      return this.qts
      }
      
      
    },
 
    
    created() {
      this.calculPanier()
   
    },
   


}
</script>

<style scoped src="./Header.css">

</style>