import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';
import {StudentDetailsComponent} from '../studentDetails/studentDetails.component';
import { InformationCardComponent } from '../information-card/information-card.component';
import {HighlightDirective} from '../directives/highlight.directive';
import { NgTemplateOutlet } from '@angular/common';
import { CoursesListComponent } from '../courses-list/courses-list.component';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent,InformationCardComponent,HighlightDirective,NgTemplateOutlet,CoursesListComponent],
  templateUrl: './studenstList.component.html',
  styleUrl: './studenstList.component.css'
})
export class StudentsListComponent {
  
  selectedColor: string = ''
  currentStudent?: Student;
  studentToDelete?:Student;
  showAddPannel: boolean = false;
  allStudent: Student[] = [
    new Student(1, "Rachely", "Levi", 18, "03850328", 99, "Rabbi Akiva",true,new Date(),true),
    new Student(2, "Dasi", "Vitan", 56, "75333333", 78, "Eliezer",false,new Date(),false),
    new Student(3, "Mini", "Levi", 12, "876543", 56, "Hirsch",true,new Date(),true),
    new Student(4, "Rachely", "Levi", 18, "03850328", 99, "Rabbi Akiva",true,new Date(),false),
    new Student(5, "Dasi", "Vitan", 56, "75333333", 78, "Eliezer",false,new Date(),true),
  ];
  Delete(student: Student) {
    this.studentToDelete=student;
  }
  Edit(student: Student) {
    this.currentStudent = student;
  }
  Add() {
    this.showAddPannel = true;
  }
  InformationCardAns(toDelete:boolean) {
    if(toDelete) {
    this.allStudent = this.allStudent.filter(student => student.id != this.studentToDelete?.id);
    }
    this.studentToDelete= undefined;
  }
  SaveStudent(student: Student) {
    if (student.id) {
      this.allStudent = this.allStudent.map(s => s.id === student.id? student : s);
    } else {
      student.id = Math.max(...this.allStudent.map(s => s.id)) + 1;
      this.allStudent.push(student);
    }
    this.showAddPannel = false;
    this.currentStudent = undefined;
  }
}

