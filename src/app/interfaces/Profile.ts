
export class Profile {
    id: number;
    user_Id:number;
    lastname:string;
    natID:number;
    birthdate:Date;
    city:string;
    deparment:string;
    country:string;
    postalcode:number;
    career:string;
    skills:number;
    description:string;
    createdat:Date;
    updatedat:Date;

    constructor(
    pId: number, puser_Id:number,
    pLastname:string,
    pNatID:number,
    pBirthdate:Date,
    pCity:string,
    pDeparment:string,
    pCountry:string,
    pPostalcode:number,
    pCareer:string,
    pSkills:number,
    pDescription:string,
    ){
        this.id = pId;
        this.lastname = pLastname;
        this.natID = pNatID;
        this.birthdate = pBirthdate;
        this.city = pCity;
        this.deparment = pDeparment;
        this.country = pCountry;
        this.postalcode = pPostalcode;
        this.career = pCareer;
        this.skills = pSkills;
        this.description = pDescription;
    }
}