import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './studentDetails.component.html',
  styleUrl: './studentDetails.component.css'
})
export class StudentDetailsComponent {
  @Input() isEdit: boolean = false;
  @Input() student: Student = new Student(0, '', '', 0, '', 0, '', false);
  @Output() SaveStudent: EventEmitter<any> = new EventEmitter<any>();
  OnSave(firstName: string, lastName: string, age: string, phone: string, average: string, address: string, isActive: string): void {
    this.student.update(firstName, lastName, +age, phone, +average, address, !!isActive);
    this.SaveStudent.emit(this.student);
  }
  onCancel() { }
}
