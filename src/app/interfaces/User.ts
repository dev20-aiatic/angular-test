
/** Interfaz de usuario */
export interface User {
    message: string;
    user: UserDetails;
}

export interface UserDetails {
    id: string;
    name: string;
    email: string;
    social: string;
    Profile: Profile;
}

export interface Profile {
    lastname: string;
    natIdCard: number;
    DoB?: any;
    city: string;
    department: string;
    country: string;
    postalcode: string;
    career: string;
    photo: any;
    description: string;
    profile_skills: ProfileSkills;
}

export interface ProfileSkills {
    Profile_Id: number;
    Skill_Id: number;
}



