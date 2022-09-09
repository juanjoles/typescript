const MyDecorator = () => {
    return (target: Function) => {
        console.log(target)
    }
}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name:string,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}`)
    }
}

export const charmander = new Pokemon(4, 'charmander')