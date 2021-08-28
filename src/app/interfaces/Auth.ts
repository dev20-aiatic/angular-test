
/**  Interfaz de la respuesta recibida de api */
export interface obtResponse {
    auth: boolean;
    token: string;
    message:string;
    user: UserDetails;
}

/** Interfaz de información del token usuario */
export interface UserDetails {
    id: Number,
    name: String;
    email: String;
    profile: Profile;
  }


/** Interfaz del Perfil */
export interface Profile {
    lastname?:String,
    natIdCard?:Number,
    DoB:Date,
    city?:String,
    department?:String,
    country?:String,
    postalcode?:Number,
    career?:String,
    skill_Id?:Number,
    description?:String,
}
 
