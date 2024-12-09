import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-lesson-9-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lesson-9-form.component.html',
  styleUrl: './lesson-9-form.component.css'
})
export class Lesson9FormComponent {
  //username: string = 'ישראל ישראלי';
  @Input() currentStudent: Student;

  onSubmit() {
  console.log(this.currentStudent)
  }
 
}
