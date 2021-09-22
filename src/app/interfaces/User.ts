
/** Interfaz de usuario */
export interface User {
    message: string;
    user: UserDetails;
}

export interface UserDetails {
    Profile: Profile;
    email: string;
    id: string;
    name: string;
    social: string;
}

export interface Profile {
    id: number;
    lastname: string;
    natIdCard: number;
    DoB?: any;
    city: string;
    department: string;
    country: string;
    postalcode: string;
    career: string;
    skill_Id?: any;
    description: string;
    user_profile: UserProfile;
}

export interface UserProfile {
    user_Id: number;
    profile_Id: number;
}



