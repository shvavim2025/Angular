export class Student {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public age: number,
        public phone: string,
        public average: number,
        public address: string,
        public isActive: boolean,
        public dateLeft?: Date,
        public isPaid?: boolean) { 
        }
    update(firstName: string, lastName: string, age: number, phone: string, average: number, address: string, isActive: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.average = average;
        this.address = address;
        this.isActive = isActive;
    }
}

