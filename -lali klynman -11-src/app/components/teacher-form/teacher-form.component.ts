import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../../moduls/Teacher';
import { TeacherService } from '../../../service/teacher.service';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  constructor(private teacherService: TeacherService) {}
  @Input() currentTeacher?: Teacher;
  @Input() isAdd ?: boolean=false;
  @Output() formClose=new EventEmitter<void>();
  teacher = new Teacher("" ,"",[])
  onSubmit(){

  if(this.currentTeacher){
    //add new teacher
    this.teacher.ID = this.currentTeacher.ID;
    this.teacherService.updateTeacher(this.teacher)
    this.currentTeacher=undefined
  }
  else{
    this.teacherService.addTeacher(this.teacher)
    this.isAdd=false  
  }
  this.teacher=new Teacher("","",[])
  this.formClose.emit()
}
}
