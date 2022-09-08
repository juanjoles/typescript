import axios from "axios";
import {PokeapiReponse} from './interfaces/pokeapi-response.interface';
//This one format to definition to classes.
export class Person {
    public id: number;
    public name:string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
        console.log('constructor llamado')
    }
}
//This other format.
export class Pokemon {
    get imageUrl():string{
        return `https://person.com/${this.id}.jpg`
    }
    constructor(
        public readonly id:number, //readonly use for not change the value id.
        public name:string
    ){}

    //Methods
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}`);
    }

    //Method Async
    async getMoves(){
        const {data} = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves)
        return data.moves;
    }
}
export const charmander = new Pokemon(5, 'Charmander');

export const juan = new Person(1, 'Juanjo');

