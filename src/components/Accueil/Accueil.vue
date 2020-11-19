<template>
<div>


<slider-header></slider-header>
<about></about>
<section class="grid">

     <h3 class="h3-responsive">Séléctionnez une catégorie</h3>
     <div class="buttons">
       <button class="btn btn-outline-dark">furniture</button>
       <button class="btn btn-outline-dark">cameras</button>
       <button class="btn btn-outline-dark">teddies</button>
     </div>

       <div class="col-lg-4 col-md-6 mb-4 mt-5">
                        <div class="card h-100">
                          <a href="#"><img class="card-img-top" src="${produit.imageUrl}" alt=""></a>
                          <div class="card-body">
                            <h4 class="card-title">
                              <a class="text-dark" href="#">${produit.name}</a>
                            </h4>
                            <h5>${produit.price/100} € ttc</h5>
                            <p class="card-text">${produit.description}</p>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">★ ★ ★ ★ ☆</small>
                          </div>
                        </div>
                      </div>
 



</section>
 </div>
</template>



<script>

import axios from "axios"
import SliderHeader from '../Slider-header/SliderHeader.vue'
import About from '../About-Orinoco/About.vue'
export default {
    name: "Accueil",
    components: {
       "slider-header" : SliderHeader,
       "about": About
    },
    
    data() {
      return {
        tableauProduits: [],
        slider: [
          {titre: "OriTeddies",texte: "Des ours en Peluche",urlImg : 'http://localhost:3000/images/teddy_2.jpg'},
          {titre: "OriFurniture",texte: "Des meubles fait main",urlImg : 'http://localhost:3000/images/oak_2.jpg'},
          {titre: "OriCameras",texte: "Des appareils photo vintage",urlImg : 'http://localhost:3000/images/vcam_2.jpg'},
        ]
      }

    },
   
    methods: {
      getProduits: function() {
        axios.get("http://localhost:3000/api/teddies")
        .then(response => {
          console.log(response.data);
          this.tableauProduits.push(...response.data)
        })
        this.tableauProduits = []
        

      },
      getlog: function() {
        console.log(this.slider);
      }
    },

}
</script>

<style scoped src="./Accueil.css">

</style>