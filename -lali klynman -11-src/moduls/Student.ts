export class Student {
    constructor(public id: number,
   public firstname: string,
public lastname: string,
public address: string,
public phone: string,
   public age: number,
   public avgeMarks: number,
   
   public isActive: boolean,
   public isPaid: boolean ,
   public dateLeft?: Date,
   ) {}
   update(firstname: string, lastname: string, address: string,phone: string, age: number, avgeMarks: number, isActive: boolean ,isPaid: boolean){
       this.firstname = firstname;
       this.lastname = lastname;
       this.address = address;
       this.phone = phone;
       this.age = age;
       this.avgeMarks = avgeMarks;
       this.isActive =isActive;
       this.isPaid = isPaid;
   }
}