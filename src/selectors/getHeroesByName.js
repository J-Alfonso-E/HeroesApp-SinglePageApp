import {heroes} from '../data/heroes';

export const getHeroesByName = (name = '') => {
    //console.log(name);

    if(name.trim() === ""){
        return [];
    }
    name = name.toLowerCase();
    return heroes.find(hero => hero.superhero.toLowerCase().includes(name));
    
}