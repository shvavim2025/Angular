import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  private teachers = [
    new Teacher(1, 'Elisheva', ["v1", "v2", "v3", "v4"]),
    new Teacher(2, 'Brachi', ["a1", "a2", "a3"]),
    new Teacher(3, 'Chaya', ["d1", "d2"]),
  ];

  getTeachers() {
    return this.teachers;
  }

  addTeacher(teacher: Teacher|any): void {
    teacher.id = this.teachers.length + 1; // Assign a new ID
    this.teachers.push(teacher);
  }
  updateTeacher(updatedTeacher: Teacher): void {
    const index = this.teachers.findIndex(t => t.id === updatedTeacher.id);
    if (index !== -1) {
      this.teachers[index] = updatedTeacher;
    }
  }
  deleteTeacher(id: number): void {
    this.teachers = this.teachers.filter(t => t.id !== id);
  }
}
