<template>
    <div>
        <cartes-panier></cartes-panier>
        <section class="section-content mt-5 padding-y bg">
            <div class="container">


                <!-- ============================ COMPONENT 1 ================================= -->

                <div class="row">




                    <aside class="col-lg-9">
                        <div class="card">
                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Article</th>
                                        <th scope="col" width="120">Quantitée</th>
                                        <th scope="col" width="120">Prix</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <tbody :key="index" v-for="(produit,index) in panier">
                                    <tr>
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"><img :src="produit.imageUrl" class="img-sm"></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">{{produit.titre}}</a>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <strong class="quantite">{{produit.quantite}}</strong>

                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <strong class="price">{{produit.singlePrice}} €</strong><br>
                                                <small class="text-muted"> {{produit.singlePrice}} € / unitée </small>
                                            </div> <!-- price-wrap .// -->
                                        </td>
                                        <td class="text-right">
                                            <button @click="supprimerArticle" :id="produit.id"
                                                class="btn btn-light">
                                                Supprimer </button>
                                            <button @click.prevent="modifierArticle" :id="produit.id"
                                                :data-categorie="produit.categorie" class="btn btn-light mt-3">
                                                Modifier </button>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                            <div class="card-body border-top">
                                <p class="icontext"><i class="icon text-success fa fa-truck"></i> Livraison Gratuite</p>
                            </div> <!-- card-body.// -->

                        </div> <!-- card.// -->



                    </aside> <!-- col.// -->


                    <aside class="col-lg-3">

                        <div class="card mb-3">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Prénom</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Prénom">

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Nom</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Nom">

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Adresse</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Adresse">

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Ville</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Ville">

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>e-mail</label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" name="" placeholder="e-mail">

                                        </div>
                                    </div>
                                </form>
                            </div> <!-- card-body.// -->
                        </div> <!-- card.// -->

                        <div class="card">
                            <div class="card-body">
                                <dl class="dlist-align">
                                    <dt>Prix Total:</dt>
                                    <dd class="text-right">123</dd>
                                </dl>

                                <hr>
                                <p class="text-center mb-3">
                                    <i class="fas fa-credit-card"></i>
                                </p>
                                <button href="#" class="btn btn-primary btn-block"> Passer la commande </button>
                                <router-link to="/" class="btn btn-light btn-block">Continuer mes achats</router-link>
                            </div> <!-- card-body.// -->
                        </div> <!-- card.// -->

                    </aside> <!-- col.// -->

                </div> <!-- row.// -->






            </div> <!-- container .//  -->
        </section>

    </div>
</template>

<script>
    import {bus} from "../../main"
    import CartesPanier from '../Cartes-Panier/CartesPanier.vue'
    export default {
        name: "panier",
        components: {
            "cartes-panier": CartesPanier
        },

        data() {
            return {
                panier: [],
                total: 0,

            }
        },
        methods: {

             
            supprimerArticle: function (event) {
                localStorage.removeItem(event.target.id)
                this.monPanier()
                 bus.$emit("updateHeader")
            },


            modifierArticle: function (event) {
                this.$router.push(`/produit/${event.target.dataset.categorie}/${event.target.id}`)

            },

            monPanier: function () {


                if (localStorage.length > 0) {
                    if (localStorage.getItem("loglevel:webpack-dev-server")) {
                        localStorage.removeItem("loglevel:webpack-dev-server")
                    }
                    let i = 0
                    this.panier = []

                    for (i; i < localStorage.length; i++) {
                        this.panier.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                    }


                } else if (localStorage.length == 0) {
                    this.panier = []
                }

            }
        },
        created() {
            this.monPanier()
        },
  

    }
</script>

<style scoped src="./Panier.css">
   
</style>