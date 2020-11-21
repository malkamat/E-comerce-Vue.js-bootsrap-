import Accueil from "../components/Accueil/Accueil"
import Produit from "../components/Produit/Produit"
export default [
    {path: "/", component: Accueil},
    {path: "/produit/:categorie/:id", component: Produit},
]