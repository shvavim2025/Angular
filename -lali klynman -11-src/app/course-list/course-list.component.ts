import { Component } from '@angular/core';
import { Course } from '../../moduls/Course';
import { CourseService } from '../../service/course.service';
import { IconsPipe } from "../../pipes/icons.pipe";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [IconsPipe],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
 courseList:Course[];
 constructor(private _courseService: CourseService){
  this.courseList = _courseService.getAllCourses();
 }
}
