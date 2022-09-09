"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charmander = exports.Pokemon = void 0;
const pokeApi_adapter_1 = require("./api/pokeApi.adapter");
class Pokemon {
    constructor(id, name, 
    // Todo: inyectar dependencias
    http) {
        this.id = id;
        this.name = name;
        this.http = http;
    }
    get imageUrl() {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
    getMoves() {
        return __awaiter(this, void 0, void 0, function* () {
            //const {data} = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');
            const data = yield this.http.get('https://pokeapi.co/api/v2/pokemon/4');
            console.log(data.moves);
            return data.moves;
        });
    }
}
exports.Pokemon = Pokemon;
const pokeApi = new pokeApi_adapter_1.PokeApiAdapter();
const pokeApiFetch = new pokeApi_adapter_1.PokeApiFetchAdapter();
exports.charmander = new Pokemon(4, 'Charmander', pokeApiFetch);
exports.charmander.getMoves();
