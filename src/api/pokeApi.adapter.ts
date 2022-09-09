import axios from "axios";


export class PokeApiAdapter {

    async get (url:string) {
        const {data} = await axios.get(url);
        return data;
    }

    async post (url:string, data:any) {
        //peticion get
        return;
    }

    async patch (url:string, data:any) {
        //peticion get
        return;
    }

    async delete (url:string) {
        //peticion get
        return;
    }
}