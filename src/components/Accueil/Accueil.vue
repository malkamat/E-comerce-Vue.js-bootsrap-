<template>
<div>


<slider-header></slider-header>
<about></about>

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