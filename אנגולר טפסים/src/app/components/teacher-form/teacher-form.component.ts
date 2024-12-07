import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../teacher-service/teacher.service';
@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  constructor(private teacherService: TeacherService) { }
  @Input() currentTeacher?: Teacher;
  @Input() isAdd?: boolean=false;
  @Output() formClose = new EventEmitter<void>();
  newTeacher: Teacher = new Teacher(0, "", []);
  onSubmit() {
    if (this.currentTeacher) {
      console.log(this.isAdd);
      this.teacherService.updateTeacher(this.currentTeacher);
      this.currentTeacher = undefined;
    }
    else {
      console.log(this.isAdd);
      this.teacherService.addTeacher(this.newTeacher);
      this.newTeacher = new Teacher(0, "", []);
      this.isAdd = false;
      console.log(this.isAdd);
      this.formClose.emit();
    }
  }
}
