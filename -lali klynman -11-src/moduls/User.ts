 export enum Position{
    principal="principal",
    teacher="teacher",
    student="student",
    secretary="secretary"
 }
export class User{
constructor(public name:string,
    public position:Position,
    public email:string,
    public password:string
){}
}