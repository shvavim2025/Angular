import { Component } from '@angular/core';
import { ShowStudentComponent } from '../show-student/show-student.component';
import { InfromationCardComponent } from '../infromation-card/infromation-card.component';
import { Student } from '../../../moduls/Student';
import { CustomDirective } from '../../directive/custom.directive';
import { NgTemplateOutlet } from '@angular/common';
import { CourseListComponent } from "../../course-list/course-list.component";
import { IconsPipe } from '../../../pipes/icons.pipe';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [ShowStudentComponent, InfromationCardComponent, CustomDirective, NgTemplateOutlet,
    IconsPipe, CourseListComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  curStudent?: Student;
  showAdd: boolean = false;
  sureDelete?: Student;
  color='white';
  students: Student[] = [
    new Student(1, 'Lea ', "levi", "rabi Akiva", "0533167545", 20, 85, false,false, new Date()),
    new Student(2, 'Ruti ', "Lando", "chazon Aish", "0533845552", 19, 95, true,true, new Date()),
    new Student(3, 'Shoshi ', "dov", "Nechemya ", "0533167332", 20, 90, true,true, new Date()),
    new Student(4, 'Michal ', "Mifon", "Chevron", "0504167489", 19, 60, true,true, new Date()),
    new Student(5, 'Riki ', "Choen", "Mymon", "0524167574", 20, 78, false,false, new Date())
  ];
  Delete(stud: Student): void {
    this.sureDelete=stud
  }
  DeleteStudent(flag:boolean): void {
    if(flag) 
    this.students = this.students.filter(student => student.id !== this.sureDelete?.id);
  this.sureDelete=undefined
  }
  Show(student: Student): void {
    this.curStudent = student;
  }
 

  SaveStudent(student: Student) {
    debugger
    if (student.id) {
      this.students = this.students.map(s => s.id === student.id? student : s);
    } else {
      student.id = Math.max(...this.students.map(s => s.id)) + 1;
      this.students.push(student);
    }
    this.showAdd = false;
    this.curStudent = undefined;
  }
  Add(): void {
    this.showAdd = true;
  }
}
