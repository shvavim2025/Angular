import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 private students = [
    new Student(1,"Nechama",15,"", "eee@dd"),
    new Student(2,"Rut",15,"", "rr@dd"),
    new Student(3,"Tami",44,"", "sssss@dd"),
    new Student(4,"Sara",88,"", "fff@dd"),
  ];
  constructor() { }

  getStudents(){
    return this.students
  }

  getStudentById(id: number){
    return this.students.find(f => f.id == id);
  }
}
