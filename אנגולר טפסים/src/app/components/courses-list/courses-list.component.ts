import { Component } from '@angular/core';
import { Course, SubjectCourse } from '../../models/course';
import { CourseService } from '../course-service/course.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
    }
}
