// export class Student {
//     id: number;
//     firstName: string;
// }

export class Student {
    constructor(
        public id: number,
        public firstName: string,
        public age: number,
        public address: string,
        public email?: string) { }

}
