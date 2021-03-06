import {heroes} from '../data/heroes';

export const getHeroesByName = (name = '') => {
    console.log("Llamando getHeroesByName");

    if(name.trim() === ""){
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
    
}