<template>
   <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-dark">
                <router-link class="navbar-brand text-light " to="/">Orinoco</router-link>
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link text-light " href="#">Mon Panier (0) <i class="fas fa-shopping-bag"></i><span class="sr-only">(current)</span></a>
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

        }
    },


}
</script>

<style scoped src="./Header.css">

</style>