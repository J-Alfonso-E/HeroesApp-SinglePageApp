import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from '../Heroes/HeroCard';
import { useForm } from "../hooks/useForm";
import queryString from 'query-string';
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({ searchText: q });

    const { searchText } = formValues;
    //const HeroesFiltered = getHeroesByName(q);
    const HeroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    

    const EnviarFormulario = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    //console.log(HeroesFiltered);
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={EnviarFormulario}>
                        <input type="text" placeholder="Buscar un Heroe" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange} />
                        <button className="btn btn-primary mt-1" type="submit">Buscar</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    
                    {
                        (q === "") ? <div className="alert alert-info">Buscar un heroe</div> : (HeroesFiltered.length === 0 ) && <div className="alert alert-danger">No se ha encontrado coincidencias con la busqueda: {q}</div>
                    }

                    {
                        HeroesFiltered.map(hero => (
                            <HeroCard key={hero.id} { ...hero} />
                        ))
                    }

                </div>
            </div>



        </div>);
}