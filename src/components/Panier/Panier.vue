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
            <th scope="col">Product</th>
            <th scope="col" width="120">Quantity</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" class="text-right" width="200"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <figure class="itemside align-items-center">
                        <div class="aside"><img src="bootstrap-ecommerce-html/images/items/11.jpg" class="img-sm"></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark">Camera Canon EOS M50 Kit</a>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <strong class="price">$1156.00</strong> 

                </td>
                <td> 
                    <div class="price-wrap"> 
                        <strong class="price">$1156.00</strong> 
                        <small class="text-muted"> $315.20 each </small> 
                    </div> <!-- price-wrap .// -->
                </td>
                <td class="text-right"> 
                <a href="" class="btn btn-light"> Supprimer </a>
                <a href="" class="btn btn-light mt-3"> Modifier </a>
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
                    <dd class="text-right">$69.97</dd>
                    </dl>
                   
                    <hr>
                    <p class="text-center mb-3">
                        <i class="fas fa-credit-card"></i>
                    </p>
                    <a href="#" class="btn btn-primary btn-block"> Passer la commande </a>
                    <a href="#" class="btn btn-light btn-block">Continuer mes achats</a>
            </div> <!-- card-body.// -->
            </div> <!-- card.// -->

                </aside> <!-- col.// -->


            </div> <!-- row.// -->
            <!-- ============================ COMPONENT 1 END .// ================================= -->



            </div> <!-- container .//  -->
            </section>

    </div>
</template>

<script>
import CartesPanier from '../Cartes-Panier/CartesPanier.vue'
export default {
    name: "panier",
    components: {
        "cartes-panier": CartesPanier
    },
    data() {
        return {
            formData: {
                contact: {

                },
                categorie: ""
            }
        }
    }

}
</script>

<style>

</style>