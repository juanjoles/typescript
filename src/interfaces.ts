import {pokemon} from './interfaces/pokemon';

const picachu:pokemon = {
  id:1,
  description:'Yellow',
  age:20
}

const charmander:pokemon = {
  id:2,
  description:'Blue'
}
console.log(picachu, charmander);

//In this case, if the variable is initialized pokemons=[], is "never" format.
const pokemons:pokemon[] = [];

pokemons.push(picachu,charmander)
