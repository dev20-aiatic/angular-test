

/** Interfaz de usuario */
export interface User {
    id: Number,
    name: String;
    email: String;
}

/** Interfaz de Perfil */
export interface Profile {
    id: Number,
    user_Id:Number,
    lastname?:String,
    natID?:Number,
    birthdate:Date,
    city?:String,
    deparment?:String,
    country?:String,
    postalcode?:Number,
    career?:String,
    skills?:Number,
    description?:String,
    createdat?:Date,
    updatedat?:Date
}
