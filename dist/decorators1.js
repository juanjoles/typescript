"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charmander = exports.Pokemon = void 0;
const Deprecated = (deprecationReason) => {
    return (target, memberName, propertyDescriptor) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args) => {
                    console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                };
                return wrapperFn;
            }
        };
    };
};
class Pokemon {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak() {
        console.log(`${this.name}`);
    }
    speak2() {
        console.log(`${this.name}!!!`);
    }
}
__decorate([
    Deprecated('Most use speak2 method instead.'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Pokemon.prototype, "speak", null);
exports.Pokemon = Pokemon;
exports.charmander = new Pokemon(4, 'charmander');
