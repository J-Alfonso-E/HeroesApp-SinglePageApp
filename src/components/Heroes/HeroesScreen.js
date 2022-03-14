import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getheroById";



export const HeroesScreen = () => {

    const {HeroId} = useParams(); //Leer Argumento que viene en el enlace del DashboardRoutes.js

    
    const hero = getHeroById(HeroId);
    if(!hero) return <Navigate to="/" />

    return (
        <div>
            <h1>HeroesScreen</h1>

            <p>{hero.superhero}</p>
        </div>
    )
}