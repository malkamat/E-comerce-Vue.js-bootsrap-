<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
    <footer-bottom></footer-bottom>
    </div>
</template>

<script>

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import Accueil from "./components/Accueil/Accueil"


export default {
  name: 'App',
  components: {
    "header-top": Header,
    "footer-bottom": Footer,
    // "Accueil": Accueil,

  }
}
</script>

<style>

</style>
