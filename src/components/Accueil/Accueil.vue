<template>
<div>
 <h1>L'accueil</h1>
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
   <li :key="index" v-for="(produit,index) in tableauProduits" >{{produit.name}}</li>
 </ul>
</div>
 
</template>



<script>

import axios from "axios"
export default {
    name: "Accueil",
    data() {
      return {
        tableauProduits: []
      }

    },
    methods: {
      getProduits: function() {
        axios.get("http://localhost:3000/api/teddies")
        .then(response => {
          this.tableauProduits.push(...response.data)
        })
        this.tableauProduits = []

      }
    }

}
</script>

<style>

</style>