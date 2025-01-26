import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { JsonPipe } from '@angular/common';
import { StudentService } from '../../service/student.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesson-14',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './lesson-14.component.html',
  styleUrl: './lesson-14.component.css'
})
export class Lesson14Component {
  students: Student[];

  constructor(private studentService: StudentService){
    this.students = this.studentService.getStudents();
  }
}
