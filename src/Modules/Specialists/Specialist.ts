export interface Specialist {
    id: number;
    web:string;
    name: string;
    title:string;
    perfilPhoto: string;
    expetience: number;
    point: number;
    typeconsultation:string[];
    services: string[];
    description: string;
    specialist: string[];
    gallery:string[]; 
    locals: {  
        name: string;
        longitude: number;
        latitude: number;
        direction: string;
        departament: string;
    }[];
    servicesCost:{ nameService: string; price: number }[];
    social:{facebook:string,instagram:string,linkedin:string,youtube:string};
    opinions:{text:string,score:number,user:string,fecha:string,lugar:string}[];
    // 🔹 Nueva propiedad: Horario del especialista
    schedule: {
        [day: string]: { hour: number; minute: number }[];
    };
}

