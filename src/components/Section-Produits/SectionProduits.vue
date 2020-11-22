<template>
  <section   class="grid">

     <h3 class="h3-responsive">Séléctionnez une catégorie</h3>
        <div class="buttons">
    <bouton-categorie  v-on:appelApi="updateTableauProduits($event)" :key="index" v-for="(categorie,index) in categories" :categorie="categorie"></bouton-categorie>
         </div>


       <div class="grid-produits">
                 <cartes-accueil :categorie="categorie"  :key="index" v-for="(produit,index) in tableauProduits" :produit="produit"  ></cartes-accueil>
                    
                      </div>
 



</section>
</template>

<script>
import axios from "axios"
import {bus} from "../../main"

import BoutonCategorie from '../Boutons-Categorie/BoutonCategorie.vue'
import CartesAccueil from '../Cartes-Accueil/CartesAccueil.vue'
export default {
    name: "SectionProduits",
    components: {
         "bouton-categorie": BoutonCategorie,
         "cartes-accueil": CartesAccueil,
    },
    props: ["categories"],
    data() {
         return {
               tableauProduits: [],
               categorie: ""
             
            
         }

    },
    methods: {

      updateTableauProduits: function(urlProd) {
          
  
        axios.get(urlProd)
        .then(response => {
             if (this.tableauProduits !== []) {
                this.tableauProduits = []        
           }
          this.tableauProduits.push(...response.data)
       
        })
      },
      
     
    },
    created() {
         bus.$on("appelApi", (data) => {
              this.categorie = data

         })
    }
    


}
</script>

<style scoped src="./SectionProduits.css">

</style>