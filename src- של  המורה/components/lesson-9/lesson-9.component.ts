import { DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HebrewDatePipe } from '../../pipes/hebrew-date.pipe';
import Lesson9FormComponent from '../lesson-9-form/lesson-9-form.component';
import { Student } from '../../models/student';
import { Lesson9ReactiveFormComponent } from '../lesson-9-reactive-form/lesson-9-reactive-form.component';

@Component({
  selector: 'app-lesson-9',
  standalone: true,
  imports: [DatePipe, HebrewDatePipe, JsonPipe, Lesson9FormComponent, Lesson9ReactiveFormComponent],
  templateUrl: './lesson-9.component.html',
  styleUrl: './lesson-9.component.css'
})
export class Lesson9Component {
currentDate: Date = new Date();
student: Student = new Student(1, "Yael", 15, "Rabi")

}
