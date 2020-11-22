import Accueil from "../components/Accueil/Accueil"
import Produit from "../components/Produit/Produit"
import Panier from "../components/Panier/Panier"
export default [
    {path: "/", component: Accueil},
    {path: "/produit/:categorie/:id", component: Produit},
    {path: "/panier", component: Panier},
]