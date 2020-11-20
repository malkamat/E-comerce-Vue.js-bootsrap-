<template>

     <div class=" mb-3 card h-100">
                          <a href="#"><img class="card-img-top" :src="produit.imageUrl" alt=""></a>
                          <div class="card-body">
                            <h4 class="card-title">
                              <a class="text-dark" href="#">{{produit.name}}</a>
                            </h4>
                            <p>{{convertPrice(produit.price)}}</p>
                            <p class="card-text">{{produit.description}}</p>
                </div>
                    <div class="card-footer">
                     <small class="text-muted">★ ★ ★ ★ ☆</small>
                     </div>
            </div>

     

</template>

<script>
export default {
    name: "CartesAccueil",
    props: ["produit"],
    data() {
      return {
        longueur: 0,
        

      }
    },
    methods: {
      convertPrice: function(produitPrix) {
        this.longueur = produitPrix.toString().split("").length
        
         
       return ` ${produitPrix.toString().split("").splice(" " ,this.longueur - 2).join("")},${produitPrix.toString().split("").splice(this.longueur - 2, this.longueur - 1).join("")} €`
       
        
      }
    }

}
</script>

<style scoped src="./CartesAccueil.css">

</style>