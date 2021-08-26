/** Interfaz para obtener usuario */
export interface TokenResponse {
    auth: boolean;
    token: string;
    user: User;
}

/** Interfaz de usuario */
export interface User {
    id: number,
    name: string;
    email: string;
    profile_Id: number;
}


/** Interfaz de Perfil */
export interface Profile {
    profile_Id: number,
    lastname?:string,
    natID?:number,
    birthdate:Date,
    city?:string,
    deparment?:string,
    country?:string,
    postalcode?:number,
    career?:string,
    skill_Id?:number,
    description?:string,
    createdAt?:Date,
    updatedAt?:Date
}
 