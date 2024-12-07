import { Component } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../teacher-service/teacher.service';
import { TeacherFormComponent } from '../teacher-form/teacher-form.component';

@Component({
  selector: 'app-teachers-list',
  standalone: true,
  imports: [TeacherFormComponent],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css'
})
export class TeachersListComponent {
  teachers: Teacher[];
  teacherToUpdate?: Teacher;
  isTeacherToAdd:boolean=false;
  constructor(private teacherService: TeacherService) {
    this.teachers = this.teacherService.getTeachers();
    }
    editTeacher(teacher: Teacher) {
      console.log(this.teacherToUpdate);
      this.teacherToUpdate=teacher;
    }
    add() {
      console.log("hello");
      this.isTeacherToAdd=true; 
      this.teacherToUpdate = undefined;
    }

}
