import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lesson-9-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './lesson-9-form.component.html',
  styleUrl: './lesson-9-form.component.css'
})
export default class Lesson9FormComponent {
  //username: string = 'ישראל ישראלי';
  @Input() currentStudent: Student;

  onSubmit(form: any) {
    console.log(form)
  }
}
