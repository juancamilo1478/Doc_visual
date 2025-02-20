export interface Specialist {
    id: number;
    name: string;
    title:string;
    perfilPhoto: string;
    expetience: number;
    point: number;
    services: string[];
    description: string;
    location: string;
    specialist: string[];
    latitude: number;
    longitude: number;
    direction:string;
    gallery:string[]; 
    servicesCost:{ nameService: string; price: number }[];
    opinions:{text:string,score:number,user:string,fecha:string,lugar:string}[];
}

