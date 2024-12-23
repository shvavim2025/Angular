import { Injectable } from '@angular/core';
import { Teacher } from '../moduls/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  private teachers=[
    new Teacher("Lea","215114778",["A","B","C","D",]),
    new Teacher("Gili","215114760",["A","E","C","F",]),
    new Teacher("Asti","215111626",["A","B","C","D",])
  ]

  getAllTeachers(): Teacher[] {
    console.log( this.teachers);
    
    return this.teachers
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher)
  }

  updateTeacher(teacher: Teacher): void {
    const index=this.teachers.indexOf(teacher);
    if(index >-1) {
    this.teachers[index] = teacher
    }
  }
  deleteTeacher(teacher: Teacher): void {
    const index=this.teachers.indexOf(teacher);
    if(index > -1) {
      this.teachers=this.teachers.filter(te=>te!=teacher)
    }
  }
}
