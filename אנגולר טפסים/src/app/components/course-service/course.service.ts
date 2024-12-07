import { Injectable } from '@angular/core';
import { Course, SubjectCourse } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses = [
    new Course(1, 'A', SubjectCourse.ComputerScience),
    new Course(2, 'B', SubjectCourse.History),
    new Course(3, 'C', SubjectCourse.Mathematics),
  ];

  getCourses() {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
  updateCourse(course: Course): void {
    const index1 = this.courses.indexOf(course);
    if (index1 > -1) {
      this.courses[index1].courseName = course.courseName;
      this.courses[index1].courseSubject = course.courseSubject;
    }

  }
}
