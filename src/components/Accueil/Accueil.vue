<template>
<div>


<slider-header></slider-header>
<about></about>
<section-produits :categories="categories"></section-produits>
 </div>
</template>



<script>

// import axios from "axios"

import SliderHeader from '../Slider-header/SliderHeader.vue'
import About from '../About-Orinoco/About.vue'
import SectionProduits from '../Section-Produits/SectionProduits.vue'
export default {
    name: "Accueil",
    components: {
       "slider-header" : SliderHeader,
       "about": About,
       "section-produits": SectionProduits
    },
    
    data() {
      return {

        categories: [
          "teddies" ,
          "furniture",
          "cameras",
        ]
      }

    },
   
    methods: {

    
    },

}
</script>

<style scoped src="./Accueil.css">

</style>