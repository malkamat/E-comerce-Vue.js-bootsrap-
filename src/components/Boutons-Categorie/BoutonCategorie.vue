<template>
       <button  @click="appelApi" class="btn btn-outline-dark">{{categorie}}</button>
</template>

<script>
export default {
    name: "BoutonCategorie",
    props: ["categorie"],
    data() {
        return {
            url: "http://localhost:3000/api/"

        }

    },
    methods: {
          appelApi: function() {
              this.$emit("appelApi", `${this.url}${this.categorie}`)
          }
    }

}
</script>

<style scoped src="./BoutonCategorie.css">

</style>