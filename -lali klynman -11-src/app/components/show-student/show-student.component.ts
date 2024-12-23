import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../moduls/Student';

@Component({
  selector: 'app-show-student',
  standalone: true,
  imports: [],
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css'
})
export class ShowStudentComponent {
  @Input() stud: Student = new Student(0, " ", " ", " ", "", 0, 0,true, true);
  @Input() Ised: boolean = false;
  @Output() SaveStudent: EventEmitter<any> = new EventEmitter<any>();
  OnSave = (firstname: string, lastname: string, address: string, phone: string, age: string, avgeMarks: string, isActive: string ,isPaid:string) => {
    debugger
    this.stud.update(firstname, lastname, address, phone, +age, +avgeMarks, !!isActive,!!isPaid);

    this.SaveStudent.emit(this.stud)
  }
  onCancel = () => {
    this.Ised = false;
  }
}
