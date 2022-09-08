"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const picachu = {
    id: 1,
    description: 'Yellow',
    age: 20
};
const charmander = {
    id: 2,
    description: 'Blue'
};
console.log(picachu, charmander);
//In this case, if the variable is initialized pokemons=[], is "never" format.
const pokemons = [];
pokemons.push(picachu, charmander);
