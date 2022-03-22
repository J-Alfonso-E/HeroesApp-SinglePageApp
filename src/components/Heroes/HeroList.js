import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    //console.log(publisher);

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row rows-cols-1 rows-cols-md-3 g-3">


            {
                heroes.map(hero => (
                    <HeroCard key={ hero.id} {...hero}/>
                ))
            }


        </div>
    )
}