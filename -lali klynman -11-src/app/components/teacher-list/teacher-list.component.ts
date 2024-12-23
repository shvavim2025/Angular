import { Component } from '@angular/core';
import { TeacherService } from '../../../service/teacher.service';
import { Teacher } from '../../../moduls/Teacher';
import { TeacherFormComponent } from "../teacher-form/teacher-form.component";
import { IconsPipe } from "../../../pipes/icons.pipe";

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [TeacherFormComponent, IconsPipe],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
  teachers?: Teacher[]
  teacher?: Teacher;
isAdded: boolean=false;
  constructor(private teacherService:TeacherService){
    this.teachers= this.teacherService.getAllTeachers();
  }


  onUpdateTeacher(teacher: Teacher){
    this.teacher=teacher;
  }
  onAdd(){
this.isAdded=true;
  }
  onClose(){
    this.isAdded=false;
  }
  

  

  
}
