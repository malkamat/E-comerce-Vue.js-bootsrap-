<template>
<div>
 <!-- <h1>L'accueil</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, inventore qui? Iure quisquam, est esse architecto deleniti quo laborum eveniet blanditiis unde totam corporis consequuntur, ducimus veniam nemo inventore consectetur?
  Error, optio? Natus aut quaerat voluptatum dicta soluta reiciendis, aperiam doloribus explicabo? Asperiores aperiam debitis voluptatum nihil illum laboriosam ea vel quis illo exercitationem, magnam, officiis dignissimos neque recusandae veniam.
  Tempora officiis id velit! Maxime recusandae, nisi saepe quis tempora numquam voluptas libero fugiat vero autem ad nam perferendis, officia distinctio quibusdam consectetur quisquam aliquid. Laboriosam rem at rerum! Temporibus.
  optio? Natus aut quaerat voluptatum dicta soluta reiciendis, aperiam doloribus explicabo? Asperiores aperiam debitis voluptatum nihil illum laboriosam ea vel quis illo exercitationem, magnam, officiis dignissimos neque recusandae veniam.
  Tempora officiis id velit! Maxime recusandae, nisi saepe quis tempora numquam voluptas libero fugiat vero autem ad nam perferendis, officia distinctio quibusdam consectetur quisquam aliquid. Laboriosam rem at rerum! Temporibus.
  Sint vel inventore voluptatum nam ut ratione quos, quia natus odio a cumque adipisci delectus hic, aliquid recusandae eum ex assumenda atque. Ex ipsum sed perspiciatis. Esse debitis necessitatibus doloremque.
  Obcaecati quos possimus illo deleniti sequi, dolorem quibusdam mollitia! Unde magni ea voluptas iste facilis fugiat. Autem tempora aliquam perspiciatis neque ut. Maxime inventore earum sed sequi voluptatem eaque consequatur!
  Numquam accusantium eius neque repudiandae minima quibusdam, distinctio illo cupiditate, dolore incidunt sint, modi dolorem! Sequi natus id culpa laboriosam explicabo optio quas. Illum asperiores, quis magni perferendis sit placeat?
 </p>
 <button @click="getProduits" class="btn btn-danger">Test api</button>
 <ul>
   <li  :key="index" v-for="(produit,index) in tableauProduits" :data-key="produit._id" >{{produit.name}}</li>
 </ul> -->
<!--Carousel Wrapper-->
<!-- <button @click="getProduits()"  class="btn btn-warning mt-5">{{slider2}}</button> -->

<!--Carousel Wrapper-->
<div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
    <li data-target="#carousel-example-2" data-slide-to="3"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100" :src="url"
          alt="First slide">
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption">
        <h1 class="h1-responsive">Orinoco</h1>
        <p>Bienvenue sur notre boutique en ligne</p>
      </div>
    </div>
    <div :key="index" v-for="(slide,index) in slider" class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <img class="d-block w-100" :src="slide.urlImg"
          alt="Second slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <h3 class="h3-responsive">{{slide.titre}}</h3>
        <p>{{slide.texte}}</p>
      </div>
    </div>
  
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div>
<!--/.Carousel Wrapper-->

</div>
 
</template>



<script>

import axios from "axios"
export default {
    name: "Accueil",
    data() {
      return {
        tableauProduits: [],
        slider2: "hello",
        url: 'http://localhost:3000/images/store.jpg',
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