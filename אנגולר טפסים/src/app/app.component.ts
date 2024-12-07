import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsListComponent } from '../app/components/studenstList/studenstList.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsListComponent,TeachersListComponent, TeachersListComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})

export class AppComponent {
  // selectedStudent: Student | null = null;

  // editStudent(student: Student) {
  //   this.selectedStudent = student;
  // }
}



