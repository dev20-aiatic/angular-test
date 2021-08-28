
/** Interfaz de usuario */
export interface User {
    id: number,
    name: string;
    email: string;
    profile_Id: number;
}

/** Interfaz de Perfil */
export interface Profile {
    lastname?:string,
    natIdCard?:number,
    DoB:Date,
    city?:string,
    department?:string,
    country?:string,
    postalcode?:number,
    career?:string,
    skill_Id?:number,
    description?:string,
}
 