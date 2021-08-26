
export class Profile {
    profile_Id: number;
    lastname:string;
    natID:number;
    birthdate:Date;
    city:string;
    deparment:string;
    country:string;
    postalcode:number;
    career:string;
    skill_Id:number;
    description:string;
    createdat:Date;
    updatedat:Date;

    constructor(
    pprofile_Id: number,
    pLastname:string,
    pNatID:number,
    pBirthdate:Date,
    pCity:string,
    pDeparment:string,
    pCountry:string,
    pPostalcode:number,
    pCareer:string,
    pskill_Id:number,
    pDescription:string,
    ){
        this.profile_Id = pprofile_Id;
        this.lastname = pLastname;
        this.natID = pNatID;
        this.birthdate = pBirthdate;
        this.city = pCity;
        this.deparment = pDeparment;
        this.country = pCountry;
        this.postalcode = pPostalcode;
        this.career = pCareer;
        this.skill_Id = pskill_Id;
        this.description = pDescription;
    }
}