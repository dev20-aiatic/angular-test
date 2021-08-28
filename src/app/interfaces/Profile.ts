
export class ProfileDetails {
    lastname:string;
    natIdCard:number;
    DoB:Date;
    city:string;
    department:string;
    country:string;
    postalcode:number;
    career:string;
    skill_Id:number;
    description:string;

    constructor(
    pLastname:string,
    pNatIDCard:number,
    pDoB:Date,
    pCity:string,
    pDepartment:string,
    pCountry:string,
    pPostalcode:number,
    pCareer:string,
    pskill_Id:number,
    pDescription:string,
    ){
        this.lastname = pLastname;
        this.natIdCard = pNatIDCard;
        this.DoB = pDoB;
        this.city = pCity;
        this.department = pDepartment;
        this.country = pCountry;
        this.postalcode = pPostalcode;
        this.career = pCareer;
        this.skill_Id = pskill_Id;
        this.description = pDescription;
    }
}