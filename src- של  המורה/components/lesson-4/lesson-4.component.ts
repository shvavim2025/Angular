import { Component } from '@angular/core';
import { OutputAllStudentsComponent } from '../output-all-students/output-all-students.component';
import { Student } from '../../models/student';

@Component({
  selector: 'app-lesson-4',
  standalone: true,
  imports: [OutputAllStudentsComponent],
  templateUrl: './lesson-4.component.html',
  styleUrl: './lesson-4.component.css'
})
export class Lesson4Component {

  parentSaveStudent(id : number){
    console.log(id + " child component init")
  }
}
