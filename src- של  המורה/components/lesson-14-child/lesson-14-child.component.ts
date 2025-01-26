import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lesson-14-child',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './lesson-14-child.component.html',
  styleUrl: './lesson-14-child.component.css'
})
export class Lesson14ChildComponent implements OnInit {
  studentId!: number;
  student: Student | undefined;
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.studentId = +id;
        this.student = this.studentService.getStudentById(this.studentId);
      } else {
        console.error('Product ID not found');
      }
    });
  }
}
