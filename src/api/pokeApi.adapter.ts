import axios from "axios";


export interface HttpAdapter {
    get<T>(url:string):Promise<T>;
}
export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url:string):Promise<T>{
        const resp = await fetch(url);
        const data:T = await resp.json();
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    async get<T>(url:string) {
        const {data} = await axios.get<T>(url);
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