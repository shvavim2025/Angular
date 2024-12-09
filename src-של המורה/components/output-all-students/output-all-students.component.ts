import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-all-students',
  standalone: true,
  imports: [],
  templateUrl: './output-all-students.component.html',
  styleUrl: './output-all-students.component.css'
})
export class OutputAllStudentsComponent implements OnInit {
  @Output() childSaveStudent: EventEmitter<any> = new EventEmitter<any>();
  @Output() childUpdateStudent: EventEmitter<any> = new EventEmitter<any>();
  idStudent: number = 10;

  ngOnInit(): void {
    debugger
    this.childUpdateStudent.emit(this.idStudent);
    //parentSaveStudent(this.idStudent)
    
  }
}
