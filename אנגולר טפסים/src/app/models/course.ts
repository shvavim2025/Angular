export enum SubjectCourse{
    Mathematics = 'Mathematics',
    Science = 'Science',
    History = 'History',
    ComputerScience = 'Computer Science',
    Literature = 'Literature' 
}
export class Course {
    constructor(
        public idCourse: number,
        public courseName: string,
        public courseSubject: SubjectCourse 
    ) {

    }
}

