export enum SubjectCourse{
    Mathematics = 'Mathematics',
    Science = 'Science',
    History = 'History',
    ComputerScience = 'Computer Science',
    Literature = 'Literature',
    ComputerScienceCourse = "ComputerScienceCourse"
}


export class Course{
    constructor(
        public IdCourse: number,
        public NameCourse: string,
        public SubjectCourse: SubjectCourse
    ){}
}