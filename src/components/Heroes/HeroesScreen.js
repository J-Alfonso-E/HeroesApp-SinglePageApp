import { useMemo, React } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getheroById";



export const HeroesScreen = () => {

    const { HeroId } = useParams(); //Leer Argumento que viene en el enlace del DashboardRoutes.js

    const hero = useMemo(() => getHeroById(HeroId), [HeroId]);

    let history = useNavigate();
    const handleReturn = () => {
        history(-1);
    };

    //const hero = getHeroById(HeroId);
    if (!hero) return <Navigate to="/" />

    const { id, superhero, publisher, alter_ego, first_appearance} = hero;

    const imgPath = `/assets/${id}.jpg`;

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4 animate__animated animate__bounceInLeft">
                    <img src={imgPath} alt={superhero} className="img-thumbnail"></img>
                </div>

                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group animate__animated animate__bounceInRight">
                        <li className="list-group-item"> <b>Alter Ego:</b> {alter_ego}</li>
                        <li className="list-group-item"> <b>Publisher:</b> {publisher}</li>
                        <li className="list-group-item"> <b>First Appearance:</b> {first_appearance}</li>

                    </ul>

                    <button className="btn btn-outline-info" onClick={handleReturn} >
                        Regresar
                    </button>
                </div>
            </div>


        </div>
    )
}