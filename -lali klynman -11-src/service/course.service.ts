
import { Injectable } from '@angular/core';
import { Course, SubjectCourse } from '../moduls/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses=[
    new Course(1,'level1',SubjectCourse.ComputerScienceCourse),
    new Course(2,'level2',SubjectCourse.History),
    new Course(3,'level3',SubjectCourse.Literature),
    new Course(4,'level4',SubjectCourse.Mathematics),
    new Course(5,'level5',SubjectCourse.Science),
  ]
  getAllCourses(): Course[]{
    return this.courses;
  }
  addCourse(course: Course): void {
    this.courses.push(course);
  }
  updateCourse(course: Course): void {
    const index = this.courses.indexOf(course);
    if(index>-1){
      this.courses[index].NameCourse=course.NameCourse;
      this.courses[index].SubjectCourse=course.SubjectCourse;
    }
  }
}


